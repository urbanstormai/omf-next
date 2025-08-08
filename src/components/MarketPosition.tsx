'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { TrendingUp, Shield, Users } from 'lucide-react';

export default function MarketPosition() {
  const reduceMotion = useReducedMotion();

  const features = [
    {
      icon: TrendingUp,
      title: 'Best rates guaranteed',
      description: 'We compare 90+ lenders to find you the lowest rates available',
    },
    {
      icon: Shield,
      title: 'FCA regulated advice',
      description: 'All our advisors are fully qualified and regulated by the Financial Conduct Authority',
    },
    {
      icon: Users,
      title: '5,000+ mortgages secured',
      description: 'Join thousands of happy homeowners who found their perfect mortgage with us',
    },
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
      aria-labelledby="marketposition-heading"
      className="bg-white py-16 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={reduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map(({ icon: Icon, title, description }, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="text-center"
            >
              <Icon
                className="w-12 h-12 mb-4 text-lime mx-auto"
                aria-hidden="true"
              />
              <h3 className="text-xl font-semibold text-charcoal mb-2">
                {title}
              </h3>
              <p className="text-charcoal/80">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
