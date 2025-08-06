'use client';
import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Calculator() {
  const reduceMotion = useReducedMotion();

  const [propertyValue, setPropertyValue] = useState(300000);
  const [deposit, setDeposit] = useState(60000);
  const [interestRate, setInterestRate] = useState(4.5);
  const [term, setTerm] = useState(25);

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);

  useEffect(() => {
    const P = Math.max(propertyValue - deposit, 0);
    const r = interestRate / 100 / 12;
    const n = term * 12;
    let M = 0;
    if (r > 0) {
      M = P * (r / (1 - Math.pow(1 + r, -n)));
    } else {
      M = P / n;
    }
    setMonthlyPayment(M);
    setTotalRepayment(M * n);
  }, [propertyValue, deposit, interestRate, term]);

  const fmt = (value: number) =>
    new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <section
      aria-labelledby="calculator-heading"
      className="bg-off py-16 px-6 md:px-12"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          id="calculator-heading"
          className="text-3xl font-semibold text-charcoal text-center mb-8"
        >
          Calculate your monthly payment
        </h2>

        <form role="form" className="grid grid-cols-1 gap-6">
          <div>
            <label
              htmlFor="propertyValue"
              className="block text-sm font-medium text-charcoal mb-1"
            >
              Property value (£)
            </label>
            <input
              id="propertyValue"
              type="number"
              min={50000}
              step={1000}
              value={propertyValue}
              onChange={(e) => setPropertyValue(Number(e.target.value))}
              className="w-full border border-charcoal rounded p-3 text-base"
            />
          </div>

          <div>
            <label
              htmlFor="deposit"
              className="block text-sm font-medium text-charcoal mb-1"
            >
              Deposit (£)
            </label>
            <input
              id="deposit"
              type="number"
              min={0}
              max={propertyValue - 1000}
              step={1000}
              value={deposit}
              onChange={(e) => setDeposit(Number(e.target.value))}
              className="w-full border border-charcoal rounded p-3 text-base"
            />
          </div>

          <div>
            <label
              htmlFor="interestRate"
              className="block text-sm font-medium text-charcoal mb-1"
            >
              Interest rate (%)
            </label>
            <input
              id="interestRate"
              type="number"
              min={0.5}
              max={10}
              step={0.1}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full border border-charcoal rounded p-3 text-base"
            />
          </div>

          <div>
            <label
              htmlFor="term"
              className="block text-sm font-medium text-charcoal mb-1"
            >
              Term (years)
            </label>
            <input
              id="term"
              type="number"
              min={5}
              max={40}
              step={1}
              value={term}
              onChange={(e) => setTerm(Number(e.target.value))}
              className="w-full border border-charcoal rounded p-3 text-base"
            />
          </div>
        </form>

        <motion.div
          aria-live="polite"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? {} : { opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-xl font-semibold text-charcoal">
            Monthly payment: {fmt(monthlyPayment)}
          </p>
          <p className="text-base text-charcoal mt-2">
            Total repayment: {fmt(totalRepayment)}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
