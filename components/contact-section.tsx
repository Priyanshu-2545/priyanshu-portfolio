'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CircleCheck as CheckCircle } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // In production, this would connect to your backend/Supabase
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-2 sm:space-y-3 mb-10 sm:mb-12 md:mb-16">
          <p className="text-blue-500 font-semibold text-xs sm:text-sm uppercase tracking-wide">Get in touch</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Let's Work Together</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl">
            I'm always interested in hearing about new projects and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2 lg:col-span-1 space-y-4 sm:space-y-6">
            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 sm:h-12 w-10 sm:w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <Mail className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">Email</h3>
                <a
                  href="mailto:priyanshugarg2525@gmail.com"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-blue-500 transition break-all"
                >
                  priyanshugarg2525@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 sm:h-12 w-10 sm:w-12 rounded-lg bg-green-100 dark:bg-green-900/30">
                  <Phone className="h-5 sm:h-6 w-5 sm:w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">Phone</h3>
                <a
                  href="tel:+917791994483"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-green-500 transition"
                >
                  +91 7791994483
                </a>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 sm:h-12 w-10 sm:w-12 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                  <MapPin className="h-5 sm:h-6 w-5 sm:w-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">Location</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Udaipur, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 lg:col-span-2">
            {submitted && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 rounded-lg flex items-center gap-2 sm:gap-3">
                <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-green-900 dark:text-green-200">Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-semibold transition flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {loading ? 'Sending...' : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
