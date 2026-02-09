import { GoogleGenAI, Type } from "@google/genai";
import { AIResponse, SymptomFormData, GroundingSource } from "../types";

// Initialize the client. The API_KEY is injected by vite.config.ts
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    symptomSummary: { type: Type.STRING, description: "A warm, professional summary of the user's input." },
    otcMedications: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          info: { type: Type.STRING }
        },
        required: ["name", "info"]
      }
    },
    prescriptionMeds: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          info: { type: Type.STRING }
        },
        required: ["name", "info"]
      }
    },
    possibleCauses: { type: Type.ARRAY, items: { type: Type.STRING } },
    selfCareTips: { type: Type.ARRAY, items: { type: Type.STRING } },
    dietSuggestions: {
      type: Type.OBJECT,
      properties: {
        prefer: { type: Type.ARRAY, items: { type: Type.STRING } },
        avoid: { type: Type.ARRAY, items: { type: Type.STRING } }
      }
    },
    careRoutine: {
      type: Type.OBJECT,
      properties: {
        morning: { type: Type.STRING },
        day: { type: Type.STRING },
        evening: { type: Type.STRING }
      },
      required: ["morning", "day", "evening"]
    },
    whatNotToDo: { type: Type.ARRAY, items: { type: Type.STRING } },
    redFlags: { type: Type.ARRAY, items: { type: Type.STRING } },
    whenToSeekCare: { type: Type.STRING },
    confidence: { type: Type.STRING, enum: ["High", "Medium", "Low"] }
  },
  required: ["symptomSummary", "otcMedications", "possibleCauses", "redFlags", "whenToSeekCare", "careRoutine"]
};

const fileToPart = async (file: File) => {
  return new Promise<{ inlineData: { data: string; mimeType: string } }>((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      // Guard against null results
      if (!result) {
        resolve({ inlineData: { data: "", mimeType: file.type } });
        return;
      }
      const base64 = result.split(',')[1];
      resolve({
        inlineData: {
          data: base64,
          mimeType: file.type
        }
      });
    };
    reader.readAsDataURL(file);
  });
};

export const analyzeSymptoms = async (data: SymptomFormData): Promise<AIResponse> => {
  const prompt = `
    Role: You are HealPath AI, a Supportive Health Educator (NOT a doctor).
    Task: Provide educational guidance based on symptoms and optionally uploaded medical files.
    
    CRITICAL CONTEXT:
    - User Age: ${data.age || "Unknown (be extra cautious)"}
    - Symptoms: ${data.symptoms}
    - Severity: ${data.severity}
    - Duration: ${data.duration}
    - Context: ${data.additionalInfo || "None"}
    
    INSTRUCTIONS:
    1. Tailor education specifically to the user's life stage if provided.
    2. Use Google Search to verify current medical guidelines for described symptoms.
    3. Strictly avoid final diagnoses. Phrasing like "Often associated with" or "Could be" is mandatory.
    4. Provide clear OTC education. Explain why certain meds are used (e.g. "Ibuprofen is often used for inflammation...").
    5. CARE ROUTINE (MANDATORY): You MUST provide text for Morning, Day, and Evening. If the symptom doesn't require specific timing, provide general wellness advice (rest, hydration, light meals, stretching) for those periods so no field is empty.
    6. Return valid JSON only.
  `;

  const parts: any[] = [{ text: prompt }];
  
  if (data.files && data.files.length > 0) {
    const fileParts = await Promise.all(data.files.map(f => fileToPart(f)));
    parts.push(...fileParts);
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: { parts },
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        tools: [{ googleSearch: {} }],
        systemInstruction: "You are a professional medical educator. Your tone is clinical, empathetic, and extremely safe. You always ensure every part of the care routine (morning, day, evening) has content to support the user."
      },
    });

    let resultText = response.text;
    if (!resultText) {
      throw new Error("No response received from AI.");
    }

    // Clean up potential markdown code blocks (e.g., ```json ... ```)
    resultText = resultText.replace(/^```json\s*/, "").replace(/^```\s*/, "").replace(/\s*```$/, "");

    const result = JSON.parse(resultText) as AIResponse;
    
    // Ensure arrays exist to prevent crashing if the model returns null for optional fields
    result.otcMedications = result.otcMedications || [];
    result.prescriptionMeds = result.prescriptionMeds || [];
    result.redFlags = result.redFlags || [];
    result.selfCareTips = result.selfCareTips || [];
    result.dietSuggestions = result.dietSuggestions || { prefer: [], avoid: [] };
    
    const groundingSources: GroundingSource[] = [];
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (chunks) {
      chunks.forEach((chunk: any) => {
        if (chunk.web?.uri) {
          groundingSources.push({
            title: chunk.web.title || "Medical Source",
            uri: chunk.web.uri
          });
        }
      });
    }

    return { ...result, groundingSources };
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw new Error("Analysis failed. Please ensure your internet connection is stable and try again.");
  }
};