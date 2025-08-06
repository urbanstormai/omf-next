'use client';
import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const tabs = [
  {
    id: 'buyer-uk',
    label: 'UK Buyers',
    content:
      'First-time buyers, Remortgage, Buy-to-let, cash extraction, development finance, equity release.',
  },
  {
    id: 'buyer-intl',
    label: 'International Buyers',
    content: 'Spain, Portugal, France, Greece, Italy.',
  },
  {
    id: 'buyer-specialist',
    label: 'Specialist and HNWC',
    content: 'Complex income, multi-currency or loans > £1 m.',
  },
  {
    id: 'buyer-expats',
    label: 'Expats',
    content: 'Secure UK or EU property while living abroad.',
  },
];

export default function BuyerGrid() {
  const [active, setActive] = useState(tabs[0].id);
  const reduceMotion = useReducedMotion();

  const variants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const handleKey = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const dir = e.key === 'ArrowRight' ? 1 : -1;
      const nextIdx = (idx + dir + tabs.length) % tabs.length;
      setActive(tabs[nextIdx].id);
    }
  };

  return (
    <section
      itemScope
      itemType="https://schema.org/Service"
      aria-labelledby="buyergrid-heading"
      className="bg-off py-16 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="buyergrid-heading"
          className="text-2xl md:text-3xl font-semibold text-charcoal text-center mb-8"
        >
          Tailored to every kind of buyer
        </h2>

        <ul role="tablist" className="flex justify-center flex-wrap gap-4 mb-10">
          {tabs.map((tab, idx) => {
            const selected = tab.id === active;
            return (
              <li role="presentation" key={tab.id}>
                <button
                  id={`${tab.id}-tab`}
                  role="tab"
                  aria-selected={selected}
                  aria-controls={tab.id}
                  tabIndex={selected ? 0 : -1}
                  onMouseEnter={() => setActive(tab.id)}
                  onClick={() => setActive(tab.id)}
                  onKeyDown={(e) => handleKey(e, idx)}
                  className={
                    selected
                      ? 'px-4 py-2 bg-charcoal text-off rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-sea'
                      : 'px-4 py-2 border border-charcoal text-charcoal bg-transparent rounded-full font-medium hover:bg-charcoal hover:text-off focus:outline-none focus:ring-2 focus:ring-sea'
                  }
                >
                  {tab.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div role="region">
          <AnimatePresence mode="wait">
            {tabs.map(
              (tab) =>
                tab.id === active && (
                  <motion.section
                    key={tab.id}
                    id={tab.id}
                    role="tabpanel"
                    aria-labelledby={`${tab.id}-tab`}
                    initial={reduceMotion ? undefined : 'enter'}
                    animate="center"
                    exit={reduceMotion ? undefined : 'exit'}
                    variants={variants}
                    transition={{ duration: 0.6 }}
                    className="prose mx-auto max-w-2xl text-center text-charcoal"
                    itemProp="audience"
                  >
                    <p>{tab.content}</p>
                  </motion.section>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
