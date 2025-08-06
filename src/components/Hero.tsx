'use client';
import { motion, useReducedMotion } from 'framer-motion';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const floatVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-mint to-sea text-off text-center overflow-hidden">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        Mortgages made simple.<br />
        Onshore &bull; Offshore &bull; Overseas.
      </h1>
      <p className="text-lg md:text-2xl font-medium mt-4">
        Your path to buying in the UK or Overseas starts here.
      </p>
      <button
        aria-label="Book a free call"
        className="mt-8 px-6 py-3 rounded-full font-semibold bg-charcoal text-off hover:bg-off hover:text-charcoal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sea"
      >
        Book a free call
      </button>
      <div className="flex items-center gap-3 mt-4">
        <span className="px-2 py-1 bg-black text-off text-xs rounded-full">Trustpilot-rated</span>
        <span className="px-2 py-1 bg-off text-charcoal text-xs rounded-full">FCA regulated</span>
      </div>
      <motion.div
        aria-hidden="true"
        initial="hidden"
        animate="visible"
        variants={floatVariants}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute bottom-0 right-0 w-64 h-64"
      >
        {/* Simple “floating shapes” SVG */}
        <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="200" r="40" fill="white" opacity="0.3" />
          <rect x="150" y="150" width="60" height="60" fill="white" opacity="0.3" rx="12" />
          <circle cx="200" cy="60" r="30" fill="white" opacity="0.2" />
        </svg>
      </motion.div>
    </section>
  );
}
