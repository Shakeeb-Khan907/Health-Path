import React from 'react';
import { AlertTriangle, PhoneCall, ShieldAlert, FileWarning } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Medical Disclaimer</h1>
          <p className="text-xl text-red-100">
            Important information about the use of HealPath AI
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <p className="text-sm text-slate-500 mb-8">Last Updated: February 9, 2026</p>

          {/* Emergency Warning */}
          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <PhoneCall className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-red-900 mb-2">MEDICAL EMERGENCY?</h3>
                <p className="text-red-800 font-medium mb-3">
                  If you are experiencing a medical emergency, do NOT use this platform. Call 911 or your local emergency services immediately.
                </p>
                <p className="text-sm text-red-700">
                  Examples of emergencies: chest pain, difficulty breathing, severe bleeding, loss of consciousness, suspected stroke, severe allergic reaction, or any life-threatening situation.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* General Disclaimer */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <ShieldAlert className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold">General Medical Disclaimer</h2>
              </div>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  HealPath AI is an <strong>educational health information platform</strong> powered by artificial intelligence. The information provided through this service is for <strong>informational and educational purposes only</strong> and is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
                </p>
                <p className="font-bold text-lg text-slate-900">
                  ALWAYS SEEK THE ADVICE OF YOUR PHYSICIAN OR OTHER QUALIFIED HEALTH PROVIDER WITH ANY QUESTIONS YOU MAY HAVE REGARDING A MEDICAL CONDITION.
                </p>
                <p>
                  Never disregard professional medical advice or delay in seeking it because of something you have read or received from HealPath AI. If you think you may have a medical emergency, call your doctor or 911 immediately.
                </p>
              </div>
            </section>

            {/* What We Are NOT */}
            <section>
              <h2 className="text-2xl font-bold mb-4">What HealPath AI Is NOT</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 space-y-3 text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold text-xl">✗</span>
                  <p><strong>NOT a Licensed Medical Provider:</strong> We do not have a doctor-patient relationship with users. Our AI does not practice medicine.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold text-xl">✗</span>
                  <p><strong>NOT a Diagnostic Tool:</strong> We cannot diagnose medical conditions. Only a licensed healthcare professional can provide a diagnosis.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold text-xl">✗</span>
                  <p><strong>NOT a Prescription Service:</strong> We do not prescribe medications. All medication recommendations are educational and should be discussed with your doctor or pharmacist.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold text-xl">✗</span>
                  <p><strong>NOT an Emergency Service:</strong> For urgent or emergency medical situations, contact emergency services immediately.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold text-xl">✗</span>
                  <p><strong>NOT a Replacement for Professional Care:</strong> Our platform supplements, but does not replace, the relationship between you and your healthcare providers.</p>
                </div>
              </div>
            </section>

            {/* AI Limitations */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <FileWarning className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold">AI Technology Limitations</h2>
              </div>
              <div className="space-y-3 text-slate-700">
                <p>
                  While HealPath AI uses advanced Google Gemini AI technology, there are important limitations:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>AI Can Make Errors:</strong> Artificial intelligence may occasionally provide inaccurate or incomplete information.</li>
                  <li><strong>Not Personalized Medical Advice:</strong> AI cannot account for your complete medical history, medications, or individual circumstances like a doctor can.</li>
                  <li><strong>Limited Context:</strong> The AI bases recommendations on the information you provide, which may not include critical details.</li>
                  <li><strong>Not Real-Time Medical Monitoring:</strong> The platform cannot monitor your condition in real-time or provide ongoing medical supervision.</li>
                  <li><strong>Training Data Limitations:</strong> AI models are trained on historical data and may not reflect the most cutting-edge medical research.</li>
                </ul>
              </div>
            </section>

            {/* Over-the-Counter Medications */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Over-the-Counter (OTC) Medication Information</h2>
              <div className="space-y-3 text-slate-700">
                <p>
                  When HealPath AI suggests over-the-counter medications, this is <strong>educational information only</strong>:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Always read medication labels and follow package directions</li>
                  <li>Consult a pharmacist or doctor before taking any new medication</li>
                  <li>Be aware of potential drug interactions, allergies, and contraindications</li>
                  <li>OTC medications can have side effects and may not be suitable for everyone</li>
                  <li>Pregnant or nursing women should always consult a healthcare provider before taking any medication</li>
                </ul>
              </div>
            </section>

            {/* When to Seek Professional Care */}
            <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">When to Seek Professional Medical Care</h2>
              <p className="text-slate-700 mb-4">You should consult a healthcare provider if:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Symptoms are severe, worsening, or persistent</li>
                <li>You have concerns about a specific health condition</li>
                <li>You need a formal diagnosis or treatment plan</li>
                <li>You're considering taking new medications or supplements</li>
                <li>You have chronic health conditions or take prescription medications</li>
                <li>You're pregnant, nursing, or caring for young children</li>
                <li>Symptoms don't improve with self-care within a reasonable timeframe</li>
              </ul>
            </section>

            {/* No Liability */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <div className="space-y-3 text-slate-700">
                <p>
                  By using HealPath AI, you acknowledge and agree that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You use the platform at your own risk</li>
                  <li>HealPath AI and its operators are not liable for any health outcomes, decisions, or actions taken based on information provided by the platform</li>
                  <li>The platform does not guarantee accuracy, completeness, or reliability of health information</li>
                  <li>You are solely responsible for your health decisions and should consult licensed medical professionals</li>
                </ul>
                <div className="bg-slate-100 border border-slate-300 rounded-lg p-4 mt-4">
                  <p className="text-sm font-medium text-slate-800">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, HEALPATH AI DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                </div>
              </div>
            </section>

            {/* Geographic Limitations */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Geographic and Regulatory Limitations</h2>
              <p className="text-slate-700 leading-relaxed">
                Healthcare regulations, medication availability, and medical standards vary by country and region. Information provided by HealPath AI may not be applicable or appropriate in all jurisdictions. Always consult local healthcare providers familiar with your region's medical standards and regulations.
              </p>
            </section>

            {/* Children and Vulnerable Populations */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Children and Vulnerable Populations</h2>
              <p className="text-slate-700 leading-relaxed">
                Special caution is required when seeking health information for children, pregnant women, elderly individuals, or those with compromised immune systems. Always consult a qualified healthcare provider for these populations rather than relying on general health information platforms.
              </p>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Updates to This Disclaimer</h2>
              <p className="text-slate-700 leading-relaxed">
                We may update this Medical Disclaimer from time to time. Your continued use of HealPath AI after any changes constitutes acceptance of the updated disclaimer.
              </p>
            </section>

            {/* Acceptance */}
            <section className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
              <p className="text-slate-700 leading-relaxed">
                By using HealPath AI, you acknowledge that you have read, understood, and agree to be bound by this Medical Disclaimer. If you do not agree with these terms, please do not use the platform.
              </p>
            </section>

            {/* Contact */}
            <section className="border-t pt-8">
              <h2 className="text-2xl font-bold mb-4">Questions About This Disclaimer</h2>
              <p className="text-slate-700">
                If you have questions or concerns about this Medical Disclaimer, please contact us at{' '}
                <a href="mailto:legal@healpathai.com" className="text-blue-600 hover:underline font-medium">
                  legal@healpathai.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
