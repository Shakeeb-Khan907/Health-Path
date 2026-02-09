import React from 'react';
import { Heart, Shield, Sparkles, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About HealPath AI</h1>
          <p className="text-xl text-blue-100">
            Empowering individuals with AI-driven health education and personalized wellness insights.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            HealPath AI was created to bridge the gap between health questions and reliable, educational answers. We believe that everyone deserves access to clear, evidence-based health information that helps them make informed decisions about their well-being.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Powered by Google's advanced Gemini AI, we provide personalized symptom analysis, over-the-counter medication guidance, and wellness recommendations—all designed to complement, not replace, professional medical care.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI-Powered Accuracy</h3>
            <p className="text-slate-600">
              We leverage cutting-edge AI technology to provide accurate, research-backed health insights based on the latest medical knowledge.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Safety First</h3>
            <p className="text-slate-600">
              All recommendations are educational and designed to help you understand when to seek professional care and what questions to ask.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Personalized Care</h3>
            <p className="text-slate-600">
              Every analysis is tailored to your specific symptoms, age, and health context, providing relevant and actionable guidance.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Users className="w-7 h-7 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Community Focused</h3>
            <p className="text-slate-600">
              We're committed to promoting health literacy and empowering communities with accessible, reliable health education.
            </p>
          </div>
        </div>

        {/* What We're Not */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-900">Important: What We're Not</h2>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>We are <strong>not</strong> a substitute for professional medical diagnosis or treatment.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>We do <strong>not</strong> provide emergency medical services—call 911 for emergencies.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>We do <strong>not</strong> prescribe medications or replace your doctor's advice.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>We are an <strong>educational tool</strong> to help you understand your health better.</span>
            </li>
          </ul>
        </div>

        {/* Technology */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Powered by Gemini AI</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            HealPath AI utilizes Google's Gemini 3 model, one of the most advanced AI systems available. This enables us to:
          </p>
          <ul className="space-y-3 text-slate-700 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Analyze complex symptom patterns with medical accuracy</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Process medical documents and images for context</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Provide evidence-based recommendations from trusted sources</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Understand nuanced health questions and provide clear answers</span>
            </li>
          </ul>
          <p className="text-slate-600 italic">
            All AI responses are generated with safety filters and medical guidelines to ensure responsible health education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
