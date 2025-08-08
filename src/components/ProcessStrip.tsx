'use client';
import { motion } from 'framer-motion';
import { MessageCircle, Settings, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const steps = [
  {
    icon: MessageCircle,
    title: 'Friendly Talk',
    description: 'Start with a casual conversation to understand your needs and goals',
  },
  {
    icon: Settings,
    title: 'We Work on Your Mortgage',
    description: 'Our experts handle all the paperwork and negotiations for you',
  },
  {
    icon: CheckCircle2,
    title: 'You Get Approved',
    description: 'Receive your approval and move forward with confidence',
  },
];

export default function ProcessStrip() {
  return (
    <section className="relative py-20 sm:py-24">
      <Image
        src="/assets/lenders/process.png"
        alt="Modern process"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/95 to-charcoal/90" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Journey to Approval
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            We've simplified the mortgage process into three easy steps. 
            From your first conversation to final approval, we're here to guide you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="group cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    className="relative mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-mint/20 to-mint/10 flex items-center justify-center group-hover:from-mint/30 group-hover:to-mint/20 transition-all duration-300">
                      <step.icon className="h-10 w-10 text-mint group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-mint text-charcoal text-sm font-bold flex items-center justify-center shadow-lg">
                      {index + 1}
                    </div>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-semibold text-white mb-3"
                    whileHover={{ color: "#5EEAD4" }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.title}
                  </motion.h3>
                  
                  <p className="text-sm text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-white/90 mb-6 text-lg">
            Ready to start your journey?
          </p>
          <motion.button 
            className="inline-flex items-center px-8 py-3 bg-mint text-charcoal font-semibold rounded-lg hover:bg-mint/90 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
