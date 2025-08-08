'use client';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const benefits = [
    'Free, no-obligation quote',
    'Access to 200+ lenders',
    'Expert advice from day one',
    'Same-day response guaranteed',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Perfect Mortgage?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 15,000+ homeowners who found their ideal mortgage with OMF. 
              Get your free quote in just 2 minutes - no obligation, no impact on credit score.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="flex items-center text-gray-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:08001234567"
                className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                0800 123 4567
              </a>
              <a
                href="mailto:hello@onemortgagefirm.com"
                className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl font-semibold transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                hello@onemortgagefirm.com
              </a>
            </div>

            <div className="mt-6 flex items-center text-gray-400">
              <Clock className="w-4 h-4 mr-2" />
              <span>Available 7 days a week, 8am-8pm</span>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="+44 7123 456789"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell us about your situation
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="I'm looking to buy my first home in London with a 20% deposit..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get My Free Quote
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy. 
                No impact on your credit score. Unsubscribe at any time.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
