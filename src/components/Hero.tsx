'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { Shield, Clock, Users } from 'lucide-react';
import PrimaryButton from './ui/PrimaryButton';
import GlassCard from './ui/GlassCard';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-white text-center overflow-hidden bg-hero pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/5 blur-xl"
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 rounded-full bg-white/3 blur-lg"
          animate={{
            y: [-8, 8, -8],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-white/4 blur-lg"
          animate={{
            y: [-6, 6, -6],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
          variants={itemVariants}
          style={{
            textShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
          }}
        >
          Mortgages made simple.
        </motion.h1>
        
        <motion.p 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-8 bg-gradient-to-r from-white/90 via-white/95 to-white/80 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Onshore • Offshore • Overseas.
        </motion.p>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-white/85 max-w-3xl mx-auto mb-12 leading-relaxed"
          variants={itemVariants}
          style={{
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          Your path to buying in the UK or Overseas starts here. Expert guidance, competitive rates, and seamless service.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
          variants={itemVariants}
        >
          <PrimaryButton href="#lead" variant="primary" icon>
            Book a free call
          </PrimaryButton>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard variant="glossy" className="text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <Shield className="h-10 w-10 text-white mx-auto mb-4 drop-shadow-lg" />
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">FCA Regulated</h3>
              <p className="text-white/85 text-sm leading-relaxed">Fully authorised and regulated for your peace of mind</p>
            </GlassCard>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard variant="glossy" className="text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <Clock className="h-10 w-10 text-white mx-auto mb-4 drop-shadow-lg" />
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">Fast Approval</h3>
              <p className="text-white/85 text-sm leading-relaxed">Quick decisions with our streamlined process</p>
            </GlassCard>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard variant="glossy" className="text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <Users className="h-10 w-10 text-white mx-auto mb-4 drop-shadow-lg" />
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">Overseas Experts</h3>
              <p className="text-white/85 text-sm leading-relaxed">UK and overseas property financing specialists</p>
            </GlassCard>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
