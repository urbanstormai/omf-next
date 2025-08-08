'use client';
import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const faqs = [
    {
      question: 'How much can I borrow?',
      answer: 'Your borrowing amount depends on your income, credit score, and existing debts. Most lenders offer 4-5x your annual income. Use our calculator above for an instant estimate.',
    },
    {
      question: 'What documents do I need?',
      answer: 'You\'ll need 3 months of payslips, 3 months of bank statements, ID (passport/driver\'s license), and proof of address. Self-employed applicants need 2-3 years of accounts.',
    },
    {
      question: 'How long does the process take?',
      answer: 'With OMF, most mortgages complete within 2-4 weeks from application. First-time buyers typically take 3-5 weeks. We\'ll keep you updated at every step.',
    },
    {
      question: 'Can I get a mortgage with bad credit?',
      answer: 'Yes, we work with specialist lenders who accept various credit issues. Your rate may be higher, but we\'ll find the best available option for your situation.',
    },
    {
      question: 'What fees will I pay?',
      answer: 'OMF charges no broker fees. You may pay lender arrangement fees (£0-£2,000), valuation fees (£200-£1,500), and legal fees (£500-£1,500). We\'ll explain all costs upfront.',
    },
  ];

  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-white py-16 px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          id="faq-heading"
          className="text-3xl font-semibold text-charcoal text-center mb-12"
          initial={reduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          Frequently asked questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-lg"
              initial={reduceMotion ? 'visible' : 'hidden'}
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } },
              }}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-charcoal">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-charcoal transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                    animate={reduceMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
                    exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-charcoal/80">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
