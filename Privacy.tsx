import React from 'react';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100">
            Your privacy and data security are our top priorities.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <p className="text-sm text-slate-500 mb-8">Last Updated: February 9, 2026</p>

          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-slate-700 leading-relaxed">
                HealPath AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our health education platform powered by Google Gemini AI.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-slate-700">
                <div>
                  <h3 className="font-bold mb-2">Health Information You Provide:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Symptom descriptions and health queries</li>
                    <li>Age and relevant medical context</li>
                    <li>Uploaded medical documents or images (optional)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Technical Information:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Device type, browser, and operating system</li>
                    <li>IP address and general location data</li>
                    <li>Usage patterns and interaction data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Cookies and Analytics:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Essential cookies for site functionality</li>
                    <li>Analytics cookies to improve user experience</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold">How We Use Your Information</h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>To provide AI-powered symptom analysis and health education</li>
                <li>To improve our services and develop new features</li>
                <li>To ensure platform security and prevent misuse</li>
                <li>To comply with legal obligations</li>
                <li>To send important service updates (with your consent)</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold">Data Security</h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure cloud infrastructure with regular security audits</li>
                <li>Access controls and authentication protocols</li>
                <li>Regular backups and disaster recovery plans</li>
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                <p className="text-sm text-yellow-800">
                  <strong>Important:</strong> While we take extensive precautions, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
              <div className="space-y-3 text-slate-700">
                <p>We use the following third-party services:</p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Google Gemini AI:</h3>
                  <p className="text-sm">
                    Your health queries are processed by Google's Gemini AI to provide personalized insights. Google's privacy policy applies to this data processing. We do not share personally identifiable information without your consent.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Analytics Services:</h3>
                  <p className="text-sm">
                    We may use analytics tools to understand how users interact with our platform. These services collect anonymized usage data.
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold">Your Rights</h2>
              </div>
              <p className="text-slate-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Opt-Out:</strong> Decline non-essential cookies and marketing communications</li>
                <li><strong>Data Portability:</strong> Receive your data in a structured format</li>
              </ul>
              <p className="text-slate-700 mt-4">
                To exercise these rights, contact us at <a href="mailto:privacy@healpathai.com" className="text-blue-600 hover:underline">privacy@healpathai.com</a>.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
              <p className="text-slate-700 leading-relaxed">
                We retain your personal information only as long as necessary to provide our services and comply with legal obligations. Health queries and analysis results are typically stored for 90 days unless you request earlier deletion. Anonymous, aggregated data may be retained indefinitely for research and improvement purposes.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <p className="text-slate-700 leading-relaxed">
                HealPath AI is not intended for children under 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
              <p className="text-slate-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of HealPath AI after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Contact Us */}
            <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-slate-700 mb-4">
                If you have questions or concerns about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-2 text-slate-700">
                <p><strong>Email:</strong> <a href="mailto:privacy@healpathai.com" className="text-blue-600 hover:underline">privacy@healpathai.com</a></p>
                <p><strong>General Inquiries:</strong> <a href="mailto:support@healpathai.com" className="text-blue-600 hover:underline">support@healpathai.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
