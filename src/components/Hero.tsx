'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { Shield, Clock, Globe } from 'lucide-react';
import PrimaryButton from './ui/PrimaryButton';
import GlassCard from './ui/GlassCard';

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

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-white text-center overflow-hidden bg-hero pt-20">
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
          variants={itemVariants}
        >
          Mortgages made simple.
        </motion.h1>
        
        <motion.p 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white/90 mb-8"
          variants={itemVariants}
        >
          Onshore • Offshore • Overseas.
        </motion.p>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12"
          variants={itemVariants}
        >
          Your path to buying in the UK or Overseas starts here. Expert guidance, competitive rates, and seamless service.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          variants={itemVariants}
        >
          <PrimaryButton href="#lead" variant="primary" icon>
            Book a free call
          </PrimaryButton>
          <PrimaryButton href="#lead" variant="secondary">
            Download guide
          </PrimaryButton>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <GlassCard variant="glass" className="text-center">
            <Shield className="h-8 w-8 text-white mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">FCA Regulated</h3>
            <p className="text-white/80 text-sm">Fully authorised and regulated for your peace of mind</p>
          </GlassCard>
          
          <GlassCard variant="glass" className="text-center">
            <Clock className="h-8 w-8 text-white mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Fast Approval</h3>
            <p className="text-white/80 text-sm">Quick decisions with our streamlined process</p>
          </GlassCard>
          
          <GlassCard variant="glass" className="text-center">
            <Globe className="h-8 w-8 text-white mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Global Reach</h3>
            <p className="text-white/80 text-sm">UK and overseas property financing specialists</p>
          </GlassCard>
        </motion.div>
      </motion.div>
    </section>
  );
}
