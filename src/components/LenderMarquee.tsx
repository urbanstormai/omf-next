'use client';
import { motion, useReducedMotion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

export default function LenderMarquee() {
  const reduceMotion = useReducedMotion();
  const controls = useAnimation();

  const logos = [
    { src: '/assets/icons/lender-santander.svg', alt: 'Santander logo' },
    { src: '/assets/icons/lender-hsbc.svg', alt: 'HSBC logo' },
    { src: '/assets/icons/lender-barclays.svg', alt: 'Barclays logo' },
    { src: '/assets/icons/lender-halifax.svg', alt: 'Halifax logo' },
    { src: '/assets/icons/lender-skipton-building-society.svg', alt: 'Skipton Building Society logo' },
    { src: '/assets/icons/lender-virgin.svg', alt: 'Virgin Money logo' },
    { src: '/assets/icons/lender-natwest.svg', alt: 'NatWest logo' },
    { src: '/assets/icons/lender-lloyds-bank.svg', alt: 'Lloyds Bank logo' },
  ];

  const marqueeVariants = {
    animate: reduceMotion
      ? { x: 0 }
      : {
          x: ['0%', '-100%'],
          transition: {
            x: { repeat: Infinity, duration: 20, ease: 'linear' },
          },
        },
  };

  useEffect(() => {
    if (!reduceMotion) {
      controls.start('animate');
    }
  }, [reduceMotion, controls]);

  return (
    <section className="bg-charcoal">
      <div className="flex items-center h-14 md:h-16 px-6 md:px-12 overflow-hidden relative">
        <h2 className="text-lg md:text-xl font-semibold text-off flex-shrink-0 mr-8">
          Access to 200+ Lenders
        </h2>

        {/* Desktop marquee */}
        <div className="hidden md:block flex-1 relative">
          <motion.div
            className="flex items-center h-full space-x-8 absolute left-0 top-0"
            variants={marqueeVariants}
            animate={controls}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() => controls.start('animate')}
          >
            {logos.concat(logos).map((logo, idx) => (
              <div key={idx} className="flex-shrink-0">
                <Image src={logo.src} alt={logo.alt} width={120} height={40} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile swipeable */}
        <div className="md:hidden flex-1 overflow-x-auto flex items-center space-x-6 py-2">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex-shrink-0">
              <Image src={logo.src} alt={logo.alt} width={100} height={32} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
