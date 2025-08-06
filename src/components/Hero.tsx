'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const floatVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
      },
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-mint via-sea to-teal-300 text-charcoal text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-mint/20 via-transparent to-sea/20" />
      
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
          variants={itemVariants}
        >
          Mortgages made simple.
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
            Onshore • Offshore • Overseas.
          </span>
        </motion.h1>
        
        <motion.p 
          className="mt-6 text-lg sm:text-xl md:text-2xl text-charcoal/80 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Your path to buying in the UK or Overseas starts here.
        </motion.p>
        
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <button
            aria-label="Book a free call to discuss your mortgage options"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-off bg-charcoal rounded-full hover:bg-charcoal/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-charcoal transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Book a free call
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
        
        <motion.div 
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          variants={itemVariants}
        >
          <span className="inline-flex items-center px-3 py-1.5 bg-black/10 text-charcoal text-sm font-medium rounded-full">
            Trustpilot-rated
          </span>
          <span className="inline-flex items-center px-3 py-1.5 bg-off/80 text-charcoal text-sm font-medium rounded-full">
            FCA regulated
          </span>
        </motion.div>
      </motion.div>

      {/* Floating SVG Elements */}
      <motion.div
        aria-hidden="true"
        initial="hidden"
        animate="visible"
        variants={floatVariants}
        className="absolute top-20 left-10 w-32 h-32 opacity-20"
      >
        <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="64" cy="64" r="40" fill="currentColor" />
        </svg>
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial="hidden"
        animate="visible"
        variants={floatVariants}
        transition={{ delay: 0.3 }}
        className="absolute bottom-20 right-10 w-24 h-24 opacity-15"
      >
        <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="12" width="72" height="72" rx="12" fill="currentColor" />
        </svg>
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial="hidden"
        animate="visible"
        variants={floatVariants}
        transition={{ delay: 0.6 }}
        className="absolute top-1/2 left-1/4 w-16 h-16 opacity-10"
      >
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="32,8 56,56 8,56" fill="currentColor" />
        </svg>
      </motion.div>
    </section>
  );
}
