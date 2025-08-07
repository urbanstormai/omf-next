'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface PrimaryButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  icon?: boolean;
  className?: string;
}

export default function PrimaryButton({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  icon = false,
  className = '' 
}: PrimaryButtonProps) {
  const baseClasses = "group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200";
  
  const variantClasses = {
    primary: "text-charcoal bg-white hover:bg-white/90 focus:ring-white",
    secondary: "text-white bg-transparent border-2 border-white/30 hover:border-white/50 hover:bg-white/10 focus:ring-white/50"
  };

  const Component = href ? 'a' : 'button';
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Component
        href={href}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {children}
        {icon && (
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        )}
      </Component>
    </motion.div>
  );
}
