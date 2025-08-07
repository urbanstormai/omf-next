'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { Shield, Clock, Users } from 'lucide-react';

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
    <section className="relative flex flex-col items-center justify-center min-h-screen text-white text-center overflow-hidden bg-hero pt-40">
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
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight mb-8 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
          variants={itemVariants}
          style={{
            textShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          Mortgages made simple.
        </motion.h1>
        
        <motion.p 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 bg-gradient-to-r from-white/90 via-white/95 to-white/80 bg-clip-text text-transparent"
          variants={itemVariants}
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          Onshore.Offshore.Overseas.
        </motion.p>
        
        <motion.p 
          className="text-xl sm:text-2xl md:text-3xl text-white/85 max-w-4xl mx-auto mb-16 leading-relaxed font-medium"
          variants={itemVariants}
          style={{
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          Your path to buying in the UK or Overseas starts here. Expert guidance, competitive rates, and seamless service.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          variants={itemVariants}
        >
          <motion.a
            href="#lead"
            className="glossy text-charcoal px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/30 transition-all duration-200 border border-white/40 backdrop-blur-md bg-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a free call →
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.3 }}
            className="glass-dark rounded-xl p-4 text-center relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <Shield className="h-6 w-6 text-white/70 mx-auto mb-2 drop-shadow-lg" />
            <h3 className="text-sm font-bold text-white/80 tracking-wide">FCA Regulated</h3>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.3 }}
            className="glass-dark rounded-xl p-4 text-center relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <Clock className="h-6 w-6 text-white/70 mx-auto mb-2 drop-shadow-lg" />
            <h3 className="text-sm font-bold text-white/80 tracking-wide">Fast Approval</h3>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.3 }}
            className="glass-dark rounded-xl p-4 text-center relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <Users className="h-6 w-6 text-white/70 mx-auto mb-2 drop-shadow-lg" />
            <h3 className="text-sm font-bold text-white/80 tracking-wide">Overseas Experts</h3>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
