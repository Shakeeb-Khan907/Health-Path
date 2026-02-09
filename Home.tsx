import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Sparkles, FileText, Camera, Upload } from 'lucide-react';
import { QUICK_SYMPTOMS, SEVERITY_OPTIONS, DURATION_OPTIONS } from '../constants';
import { SymptomFormData } from '../types';

const Home = () => {
  const [formData, setFormData] = useState<SymptomFormData>({
    symptoms: '',
    severity: '',
    duration: '',
    age: '',
    additionalInfo: '',
    consent: false,
    files: []
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleQuickSymptom = (symptom: string) => {
    setFormData(prev => ({
      ...prev,
      symptoms: prev.symptoms ? `${prev.symptoms}, ${symptom}` : symptom
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        files: [...prev.files, ...Array.from(e.target.files || [])]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please accept the disclaimer to continue.');
      return;
    }
    setIsLoading(true);
    // Placeholder for API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Feature coming soon! This will analyze your symptoms using Gemini AI.');
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Your Personal Health Assistant, Powered by AI
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Get instant, educational health insights using Google Gemini AI. Understand symptoms, explore OTC options, and make informed decisions.
            </p>
            <div className="flex gap-4">
              <a href="#symptom-checker" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors flex items-center gap-2">
                Start Analysis <ArrowRight className="w-5 h-5" />
              </a>
              <Link to="/blog" className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
                Health Blog
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" alt="Healthcare" className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose HealPath AI?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Insights</h3>
              <p className="text-slate-600">Advanced Gemini AI analyzes your symptoms with medical accuracy.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safe & Educational</h3>
              <p className="text-slate-600">Evidence-based information for informed health decisions.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Care</h3>
              <p className="text-slate-600">Tailored recommendations based on your unique situation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Symptom Checker Form */}
      <section id="symptom-checker" className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Symptom Analysis Tool</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Quick Symptoms */}
              <div>
                <label className="block text-sm font-bold mb-3">Quick Select Common Symptoms</label>
                <div className="flex flex-wrap gap-2">
                  {QUICK_SYMPTOMS.map(symptom => (
                    <button
                      key={symptom}
                      type="button"
                      onClick={() => handleQuickSymptom(symptom)}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                    >
                      {symptom}
                    </button>
                  ))}
                </div>
              </div>

              {/* Symptoms Description */}
              <div>
                <label className="block text-sm font-bold mb-2">Describe Your Symptoms</label>
                <textarea
                  value={formData.symptoms}
                  onChange={(e) => setFormData({...formData, symptoms: e.target.value})}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  placeholder="Example: I have a headache and mild fever for the past 2 days..."
                  required
                />
              </div>

              {/* Severity */}
              <div>
                <label className="block text-sm font-bold mb-2">Severity Level</label>
                <select
                  value={formData.severity}
                  onChange={(e) => setFormData({...formData, severity: e.target.value})}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select severity...</option>
                  {SEVERITY_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-bold mb-2">How Long Have You Had These Symptoms?</label>
                <select
                  value={formData.duration}
                  onChange={(e) => setFormData({...formData, duration: e.target.value})}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select duration...</option>
                  {DURATION_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-bold mb-2">Your Age</label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your age"
                  min="1"
                  max="120"
                  required
                />
              </div>

              {/* Additional Info */}
              <div>
                <label className="block text-sm font-bold mb-2">Additional Information (Optional)</label>
                <textarea
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Medical history, medications, allergies, etc."
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-bold mb-2">Upload Medical Documents (Optional)</label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                    multiple
                    accept="image/*,.pdf"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 mx-auto text-slate-400 mb-2" />
                    <p className="text-sm text-slate-600">Click to upload images or PDFs</p>
                  </label>
                </div>
                {formData.files.length > 0 && (
                  <div className="mt-2 text-sm text-slate-600">
                    {formData.files.length} file(s) selected
                  </div>
                )}
              </div>

              {/* Consent */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                    className="mt-1"
                    required
                  />
                  <span className="text-sm text-slate-700">
                    I understand this is for educational purposes only and not a substitute for professional medical advice. I have read the <Link to="/disclaimer" className="text-blue-600 underline">medical disclaimer</Link>.
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? 'Analyzing...' : 'Get AI Analysis'}
                {!isLoading && <Sparkles className="w-5 h-5" />}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed with Our Health Blog</h2>
          <p className="text-xl text-blue-100 mb-8">
            Expert insights on fitness, nutrition, mental health, and wellness trends for 2026.
          </p>
          <Link to="/blog" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
            Explore Health Articles
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
