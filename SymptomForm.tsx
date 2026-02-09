
import React, { useState, useEffect } from 'react';
// Added missing Link import
import { Link } from 'react-router-dom';
import { 
  Plus, 
  X, 
  Upload, 
  ChevronRight, 
  Loader2, 
  CheckCircle2, 
  Info,
  ShieldAlert
} from 'lucide-react';
import { QUICK_SYMPTOMS, SEVERITY_OPTIONS, DURATION_OPTIONS } from '../constants';
import { SymptomFormData } from '../types';

interface Props {
  onSubmit: (data: SymptomFormData) => void;
  isLoading: boolean;
}

const SymptomForm: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<SymptomFormData>({
    symptoms: '',
    severity: 'moderate',
    duration: 'day_or_two',
    age: '',
    additionalInfo: '',
    consent: false,
    files: []
  });

  useEffect(() => {
    const saved = localStorage.getItem('healpath_form_draft');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(prev => ({ ...prev, ...parsed, files: [] })); // Files can't be stringified
      } catch (e) { console.error(e); }
    }
  }, []);

  useEffect(() => {
    const { files, ...serializable } = formData;
    localStorage.setItem('healpath_form_draft', JSON.stringify(serializable));
  }, [formData]);

  const toggleSymptomTag = (tag: string) => {
    const currentSymptoms = formData.symptoms.split(',').map(s => s.trim()).filter(Boolean);
    if (currentSymptoms.includes(tag)) {
      setFormData({ ...formData, symptoms: currentSymptoms.filter(s => s !== tag).join(', ') });
    } else {
      setFormData({ ...formData, symptoms: [...currentSymptoms, tag].join(', ') });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, files: Array.from(e.target.files) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.symptoms.trim()) {
      alert("Please describe your symptoms.");
      return;
    }
    if (!formData.consent) {
      alert("Please agree to the disclaimer before submitting.");
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 p-6 md:p-10 border border-slate-100 max-w-3xl mx-auto">
      <div className="space-y-8">
        {/* Symptoms Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg font-bold text-slate-800">Tell us how you're feeling</h3>
            <div className="h-px flex-grow bg-slate-100"></div>
          </div>
          
          <label className="block text-sm font-semibold text-slate-600 mb-2">Describe your symptoms *</label>
          <textarea
            value={formData.symptoms}
            onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
            placeholder="E.g., I've had a persistent cough and a mild fever for two days..."
            className="w-full h-32 p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none resize-none placeholder:text-slate-400"
            required
          />

          <div className="mt-4 flex flex-wrap gap-2">
            {QUICK_SYMPTOMS.map(tag => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleSymptomTag(tag)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  formData.symptoms.toLowerCase().includes(tag.toLowerCase())
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* File Upload Section */}
        <section>
          <label className="block text-sm font-semibold text-slate-600 mb-2">Upload medical document (optional)</label>
          <div className="relative group">
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              accept=".pdf,image/*"
            />
            <div className={`p-8 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center transition-colors ${
              formData.files.length > 0 ? 'bg-blue-50 border-blue-200' : 'bg-slate-50 border-slate-200 group-hover:bg-slate-100'
            }`}>
              <Upload className={`w-8 h-8 mb-2 ${formData.files.length > 0 ? 'text-blue-500' : 'text-slate-400'}`} />
              <p className="text-sm text-slate-600 text-center">
                {formData.files.length > 0 
                  ? `${formData.files.length} file(s) selected` 
                  : "Click to upload or drag and drop JPEG, PNG, WebP, or PDF (max 10MB)"}
              </p>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-2">How severe is it? *</label>
            <select
              value={formData.severity}
              onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              {SEVERITY_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-2">How long has this been going on? *</label>
            <select
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              {DURATION_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-2">Your age (optional)</label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              placeholder="E.g., 28"
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-2">Any additional information? (optional)</label>
            <input
              type="text"
              value={formData.additionalInfo}
              onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
              placeholder="Allergies, current meds, etc."
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </section>

        {/* Disclaimer & Submit */}
        <section className="pt-4 space-y-6">
          <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-100">
            <input
              type="checkbox"
              id="consent"
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="mt-1 w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="consent" className="text-xs md:text-sm text-amber-800">
              I understand that <strong>HealPath AI is an educational tool, not a doctor</strong>. 
              The analysis is for informational purposes only and is not a substitute for professional medical advice, 
              diagnosis, or treatment. <Link to="/disclaimer" className="underline font-semibold">View full disclaimer</Link>.
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-4 rounded-2xl text-white font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg ${
              isLoading ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 active:scale-[0.98] shadow-blue-200'
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                Analyzing your symptoms...
              </>
            ) : (
              <>
                Analyze Symptoms
                <ChevronRight className="w-6 h-6" />
              </>
            )}
          </button>
          
          <p className="text-[10px] text-center text-slate-400">
            Secure processing. Your data is not stored permanently.
          </p>
        </section>
      </div>
    </form>
  );
};

export default SymptomForm;
