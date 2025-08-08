'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Globe, Award, Plane } from 'lucide-react';

const buyerTypes = [
  {
    id: 'uk-buyers',
    title: 'UK Buyers',
    icon: Home,
    color: 'from-blue-500 to-cyan-500',
    front: {
      title: 'UK Property Buyers',
      description: 'First-time buyers, remortgages, buy-to-let',
    },
    back: {
      title: 'Complete UK Coverage',
      description: 'First-time buyers, remortgage, buy-to-let, cash extraction, development finance, equity release. We cover every scenario with specialist lenders.',
    },
  },
  {
    id: 'international',
    title: 'International Buyers',
    icon: Globe,
    color: 'from-green-500 to-emerald-500',
    front: {
      title: 'International Property',
      description: 'Spain, Portugal, France, Greece, Italy',
    },
    back: {
      title: 'European Property Finance',
      description: 'Secure financing for properties across Spain, Portugal, France, Greece, and Italy. Expert knowledge of local markets and regulations.',
    },
  },
  {
    id: 'specialist',
    title: 'Specialist & HNWI',
    icon: Award,
    color: 'from-purple-500 to-pink-500',
    front: {
      title: 'Complex Income',
      description: 'Multi-currency, loans > £1M',
    },
    back: {
      title: 'Bespoke Solutions',
      description: 'Complex income structures, multi-currency arrangements, high-value loans over £1M. Private banking relationships and exclusive rates.',
    },
  },
  {
    id: 'expats',
    title: 'Expats',
    icon: Plane,
    color: 'from-orange-500 to-red-500',
    front: {
      title: 'Living Abroad',
      description: 'UK or EU property while overseas',
    },
    back: {
      title: 'Expat Expertise',
      description: 'Secure UK or EU property while living abroad. Specialist expat mortgages with favorable terms and currency considerations.',
    },
  },
];

export default function BuyerGrid() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tailored to Every Kind of Buyer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're buying your first home or expanding your property portfolio, 
            we have the perfect solution for your unique situation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {buyerTypes.map((buyer, index) => (
            <motion.div
              key={buyer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-80"
              onMouseEnter={() => setHoveredCard(buyer.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className="absolute inset-0 w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: hoveredCard === buyer.id ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0 w-full h-full rounded-3xl shadow-xl bg-white p-8 flex flex-col items-center justify-center text-center"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${buyer.color} flex items-center justify-center mb-4`}>
                    <buyer.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{buyer.front.title}</h3>
                  <p className="text-gray-600">{buyer.front.description}</p>
                  <div className="mt-4 text-sm text-gray-400">
                    Hover to discover more
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0 w-full h-full rounded-3xl shadow-xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 flex flex-col justify-center text-white"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <h3 className="text-xl font-bold mb-3">{buyer.back.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{buyer.back.description}</p>
                  <button className="mt-4 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600">
            Over £2 billion in mortgages arranged • 4.9/5 customer satisfaction
          </p>
        </motion.div>
      </div>
    </section>
  );
}
