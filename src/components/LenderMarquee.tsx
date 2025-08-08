'use client';
import { motion } from 'framer-motion';

export default function LenderMarquee() {
  const text = "Access to 200+ Leading Lenders";
  const lenders = [
    'Santander',
    'HSBC',
    'Barclays',
    'Halifax',
    'NatWest',
    'Lloyds Bank',
    'Nationwide',
    'Virgin Money',
    'Skipton',
    'Leeds Building Society',
  ];

  // Create duplicated content for seamless loop
  const duplicatedContent = [...lenders, ...lenders, ...lenders];

  return (
    <section className="bg-white py-3">
      <div className="overflow-hidden">
        <motion.div
          className="flex items-center"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear',
            },
          }}
        >
          <div className="flex items-center flex-shrink-0">
            <span className="text-black font-semibold text-sm whitespace-nowrap mr-8">
              {text}
            </span>
            {duplicatedContent.map((lender, index) => (
              <div key={index} className="flex items-center">
                <span className="text-black text-sm font-medium mx-4 whitespace-nowrap">
                  {lender}
                </span>
                {index < duplicatedContent.length - 1 && (
                  <div className="w-px h-4 bg-gray-300" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <div className="text-center mt-2">
        <p className="text-xs text-gray-600">
          Trusted partnerships with the UK's leading mortgage providers
        </p>
      </div>
    </section>
  );
}
