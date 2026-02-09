import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for actual form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
                <p className="text-green-700">Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows={6}
                    placeholder="Tell us more about your question or feedback..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Email Support</h3>
              <p className="text-slate-600 mb-4">
                For general inquiries and support questions.
              </p>
              <a href="mailto:support@healpathai.com" className="text-blue-600 hover:underline font-medium">
                support@healpathai.com
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Feedback & Suggestions</h3>
              <p className="text-slate-600 mb-4">
                We're always looking to improve. Share your ideas with us!
              </p>
              <a href="mailto:feedback@healpathai.com" className="text-purple-600 hover:underline font-medium">
                feedback@healpathai.com
              </a>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
              <h4 className="font-bold text-yellow-900 mb-2">Emergency Notice</h4>
              <p className="text-sm text-yellow-800">
                This contact form is not for medical emergencies. If you're experiencing a medical emergency, please call 911 or your local emergency services immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
