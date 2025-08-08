'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah & James Wilson',
    location: 'London, UK',
    rating: 5,
    text: 'OMF made our overseas property purchase seamless. Their expertise in international mortgages saved us thousands and gave us complete peace of mind.',
    image: '/api/placeholder/64/64',
  },
  {
    name: 'Marcus Chen',
    location: 'Singapore',
    rating: 5,
    text: 'As an expat, I thought getting a UK mortgage would be impossible. OMF proved me wrong - professional, efficient, and got me an excellent rate.',
    image: '/api/placeholder/64/64',
  },
  {
    name: 'Elena Rodriguez',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'The team understood my complex income structure perfectly. They found solutions other brokers couldn\'t. Highly recommend for overseas buyers.',
    image: '/api/placeholder/64/64',
  },
  {
    name: 'David Thompson',
    location: 'Hong Kong',
    rating: 5,
    text: 'Exceptional service from start to finish. They navigated the complexities of offshore lending with expertise and got us our dream home.',
    image: '/api/placeholder/64/64',
  },
  {
    name: 'Lisa Anderson',
    location: 'Sydney, Australia',
    rating: 5,
    text: 'Professional, responsive, and incredibly knowledgeable about UK property purchases for non-residents. Couldn\'t have done it without them.',
    image: '/api/placeholder/64/64',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Trusted by clients worldwide
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Real stories from real clients who achieved their property dreams with OMF.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-50 rounded-2xl p-8 md:p-12"
              >
                <div className="flex items-center justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                
                <blockquote className="text-xl text-slate-700 leading-relaxed mb-8 text-center">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-mint to-sea flex items-center justify-center text-white font-semibold text-xl">
                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-4 text-center">
                    <div className="font-semibold text-charcoal text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-slate-600">{testimonials[currentIndex].location}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-charcoal" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-charcoal" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-mint' : 'bg-slate-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
