
import React from 'react';
import { 
  FileText, 
  Stethoscope, 
  Pill, 
  Leaf, 
  Utensils, 
  AlertCircle, 
  Clock, 
  ArrowLeft,
  ShieldCheck,
  CheckSquare,
  Ban,
  X,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { AIResponse } from '../types';

interface Props {
  result: AIResponse;
  onReset: () => void;
}

const ResultCard: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode; className?: string }> = ({ title, icon, children, className = "" }) => (
  <div className={`bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all hover:shadow-md ${className}`}>
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
        {icon}
      </div>
      <h4 className="font-bold text-slate-800 text-lg">{title}</h4>
    </div>
    {children}
  </div>
);

const AnalysisResult: React.FC<Props> = ({ result, onReset }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700 px-4">
      {/* Header Controls */}
      <div className="flex justify-between items-center px-2">
        <button onClick={onReset} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors">
          <ArrowLeft className="w-5 h-5" />
          New Search
        </button>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-100 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" /> Pharmacist-Guided
          </span>
        </div>
      </div>

      {/* Summary Section */}
      <ResultCard title="Symptom Summary" icon={<FileText className="w-5 h-5" />}>
        <div className="flex justify-between items-start mb-3">
          <p className="text-slate-600 leading-relaxed italic">
            "{result.symptomSummary}"
          </p>
          <div className="flex flex-col items-end gap-1 shrink-0 ml-4">
             <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
               result.confidence === 'High' ? 'bg-emerald-100 text-emerald-800' : 
               result.confidence === 'Medium' ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800'
             }`}>
               {result.confidence} Confidence
             </span>
          </div>
        </div>
      </ResultCard>

      {/* Medication Education - BOLD AND HIGHLIGHTED */}
      <ResultCard title="Medication Education" icon={<Pill className="w-5 h-5" />}>
        <div className="space-y-4">
          {/* OTC Meds */}
          {result.otcMedications.map((med, idx) => (
            <div key={idx} className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
              <span className="text-blue-700 font-extrabold block mb-2 text-xl tracking-tight underline decoration-blue-200 decoration-2 underline-offset-4">
                {med.name}
              </span>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">{med.info}</p>
            </div>
          ))}
          
          {/* Prescribed Meds Mention */}
          {result.prescriptionMeds && result.prescriptionMeds.length > 0 && (
            <div className="mt-6 pt-6 border-t border-slate-100">
              <h5 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Potentially Relevant Prescriptions</h5>
              {result.prescriptionMeds.map((med, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 mb-3 last:mb-0">
                  <span className="text-slate-900 font-extrabold block mb-2 text-xl">{med.name}</span>
                  <p className="text-sm text-slate-600 leading-relaxed italic">Note: Requires physician evaluation. {med.info}</p>
                </div>
              ))}
            </div>
          )}
          
          {result.otcMedications.length === 0 && (!result.prescriptionMeds || result.prescriptionMeds.length === 0) && (
            <p className="text-slate-500 italic text-center py-4">No specific medications identified for this profile.</p>
          )}
        </div>
      </ResultCard>

      {/* Routine - Updated to ensure no empty boxes look bad */}
      {result.careRoutine && (
        <ResultCard title="Suggested Care Routine" icon={<Clock className="w-5 h-5" />}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col">
              <span className="text-xs font-black text-blue-600 block mb-3 uppercase tracking-widest border-b border-blue-50 pb-2">Morning</span>
              <p className="text-sm text-slate-700 leading-relaxed flex-grow">
                {result.careRoutine.morning || "Begin your day with gentle hydration and rest."}
              </p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col">
              <span className="text-xs font-black text-blue-600 block mb-3 uppercase tracking-widest border-b border-blue-50 pb-2">Noon / Afternoon</span>
              <p className="text-sm text-slate-700 leading-relaxed flex-grow">
                {result.careRoutine.day || "Maintain consistent fluid intake and monitor your energy levels."}
              </p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col">
              <span className="text-xs font-black text-blue-600 block mb-3 uppercase tracking-widest border-b border-blue-50 pb-2">Evening / Night</span>
              <p className="text-sm text-slate-700 leading-relaxed flex-grow">
                {result.careRoutine.evening || "Prepare for restorative sleep; avoid heavy meals or screens."}
              </p>
            </div>
          </div>
        </ResultCard>
      )}

      {/* Red Flags & Safety */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-red-50 rounded-2xl p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-red-700">
            <AlertCircle className="w-6 h-6" />
            <h4 className="font-bold text-lg">Warning Signs</h4>
          </div>
          <ul className="space-y-3">
            {result.redFlags.map((flag, idx) => (
              <li key={idx} className="text-sm text-red-900 font-bold flex gap-3">
                <span className="w-2 h-2 bg-red-400 rounded-full shrink-0 mt-1.5"></span>
                {flag}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <Stethoscope className="w-6 h-6" />
            <h4 className="font-bold text-lg">Seeking Help</h4>
          </div>
          <p className="text-sm text-blue-50 leading-relaxed mb-6 font-medium">
            {result.whenToSeekCare}
          </p>
          <div className="p-4 bg-blue-500/30 rounded-xl text-xs backdrop-blur-sm border border-white/10 font-bold">
            If you are unsure, always consult a healthcare provider immediately.
          </div>
        </div>
      </div>

      {/* Additional Educational Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ResultCard title="Lifestyle Tips" icon={<Leaf className="w-5 h-5" />}>
          <ul className="space-y-2">
            {result.selfCareTips.map((tip, idx) => (
              <li key={idx} className="flex gap-2 text-sm text-slate-700 font-medium">
                <CheckSquare className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                {tip}
              </li>
            ))}
          </ul>
        </ResultCard>

        <ResultCard title="Dietary Advice" icon={<Utensils className="w-5 h-5" />}>
          <div className="space-y-4">
            <div>
              <span className="text-emerald-600 font-bold text-xs uppercase mb-1 block tracking-wider">Helpful Foods</span>
              <p className="text-sm text-slate-700 font-medium">{result.dietSuggestions.prefer.join(', ')}</p>
            </div>
            <div>
              <span className="text-amber-600 font-bold text-xs uppercase mb-1 block tracking-wider">Avoid These</span>
              <p className="text-sm text-slate-700 font-medium">{result.dietSuggestions.avoid.join(', ')}</p>
            </div>
          </div>
        </ResultCard>
      </div>
      
      {/* Sources & References */}
      {result.groundingSources && result.groundingSources.length > 0 && (
        <ResultCard title="Sources & References" icon={<BookOpen className="w-5 h-5" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {result.groundingSources.map((source, idx) => (
              <a 
                key={idx} 
                href={source.uri} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl hover:bg-blue-50 hover:border-blue-100 transition-all group"
              >
                <div className="truncate pr-2">
                  <p className="text-xs font-bold text-slate-800 truncate">{source.title}</p>
                  <p className="text-[10px] text-slate-500 truncate">{source.uri}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 shrink-0" />
              </a>
            ))}
          </div>
        </ResultCard>
      )}

      {/* Action Footer */}
      <div className="p-8 bg-slate-100 rounded-3xl text-[11px] text-slate-500 leading-relaxed text-center">
        <p className="mb-2 uppercase font-black tracking-widest text-slate-400">Strict Medical Disclaimer</p>
        HealPath AI is an educational technology service. This analysis is produced by AI and should be used to support, not replace, the relationship that exists between a patient and their physician. If you are experiencing chest pain, shortness of breath, or severe bleeding, please call emergency services immediately.
      </div>
    </div>
  );
};

export default AnalysisResult;
