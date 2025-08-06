'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageSquare, Edit3, CheckCircle } from 'lucide-react';

export default function ProcessStrip() {
  const reduceMotion = useReducedMotion();

  const steps = [
    { icon: MessageSquare, title: "Let's talk" },
    { icon: Edit3, title: 'We create your mortgage plan' },
    { icon: CheckCircle, title: 'You get approved' },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      aria-labelledby="processstrip-heading"
      className="bg-lime py-12 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2 id="processstrip-heading" className="sr-only">
          Our Process
        </h2>
        <motion.ul
          role="list"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial={reduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map(({ icon: Icon, title }, idx) => (
            <motion.li
              key={idx}
              role="listitem"
              className="flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <Icon
                className="w-12 h-12 mb-4 text-charcoal"
                aria-hidden="true"
              />
              <h3 className="text-xl md:text-2xl font-semibold text-charcoal">
                {title}
              </h3>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
