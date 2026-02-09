
export interface SymptomFormData {
  symptoms: string;
  severity: string;
  duration: string;
  age: string;
  additionalInfo: string;
  consent: boolean;
  files: File[];
}

export interface GroundingSource {
  title?: string;
  uri?: string;
}

export interface AIResponse {
  symptomSummary: string;
  otcMedications: Array<{ name: string; info: string }>;
  prescriptionMeds: Array<{ name: string; info: string }>;
  possibleCauses: string[];
  selfCareTips: string[];
  dietSuggestions: {
    prefer: string[];
    avoid: string[];
  };
  careRoutine: {
    morning: string;
    day: string;
    evening: string;
  };
  whatNotToDo: string[];
  redFlags: string[];
  whenToSeekCare: string;
  confidence: 'High' | 'Medium' | 'Low';
  groundingSources?: GroundingSource[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  readTime: string;
  focusKeyword: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
}
