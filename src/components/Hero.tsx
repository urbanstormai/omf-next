'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[60vh] px-4 py-16 text-center bg-gradient-to-br from-mint to-sea"
      aria-label="Hero"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-charcoal leading-tight mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Overseas & UK Mortgage Experts
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl text-off mb-10 max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Personal, jargon-free mortgage advice. Boutique service. Always on your side.
      </motion.p>
      <motion.div
        className="mt-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        aria-hidden="true"
      >
        <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="90" cy="30" rx="80" ry="20" fill="#E5FFFA" />
          <ellipse cx="130" cy="28" rx="14" ry="8" fill="#B2FFD6" />
        </svg>
      </motion.div>
    </section>
  );
}
