'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  variant?: 'glass' | 'glass-dark' | 'glossy';
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ 
  children, 
  variant = 'glass',
  className = '',
  hover = true
}: GlassCardProps) {
  const baseClasses = "rounded-2xl p-6";
  const variantClasses = {
    glass: "glass",
    'glass-dark': "glass-dark",
    glossy: "glossy"
  };

  const hoverAnimation = hover ? {
    whileHover: { scale: 1.02, y: -2 },
    transition: { duration: 0.2 }
  } : {};

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      {...hoverAnimation}
    >
      {children}
    </motion.div>
  );
}
