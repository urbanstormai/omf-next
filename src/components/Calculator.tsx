'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Home, PoundSterling, Calendar } from 'lucide-react';

export default function Calculator() {
  const [propertyValue, setPropertyValue] = useState(300000);
  const [deposit, setDeposit] = useState(60000);
  const [interestRate, setInterestRate] = useState(4.5);
  const [term, setTerm] = useState(25);

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [ltv, setLtv] = useState(0);

  useEffect(() => {
    const loan = Math.max(propertyValue - deposit, 0);
    setLoanAmount(loan);
    setLtv(propertyValue > 0 ? (loan / propertyValue) * 100 : 0);
    
    const r = interestRate / 100 / 12;
    const n = term * 12;
    let M = 0;
    if (r > 0) {
      M = loan * (r / (1 - Math.pow(1 + r, -n)));
    } else {
      M = loan / n;
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

  const InputField = ({ 
    icon: Icon, 
    label, 
    value, 
    onChange, 
    min, 
    max, 
    step, 
    prefix = '', 
    suffix = '' 
  }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-lg font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
        />
        {suffix && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 text-sm">{suffix}</span>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Calculate Your Monthly Payment
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get an instant estimate with our smart mortgage calculator. 
            Adjust the sliders to see how different scenarios affect your payments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Details</h3>
            
            <div className="space-y-6">
              <InputField
                icon={Home}
                label="Property Value"
                value={propertyValue}
                onChange={setPropertyValue}
                min={50000}
                max={5000000}
                step={1000}
              />

              <InputField
                icon={PoundSterling}
                label="Deposit Amount"
                value={deposit}
                onChange={setDeposit}
                min={0}
                max={propertyValue - 1000}
                step={1000}
              />

              <InputField
                icon={TrendingUp}
                label="Interest Rate"
                value={interestRate}
                onChange={setInterestRate}
                min={0.5}
                max={15}
                step={0.1}
                suffix="%"
              />

              <InputField
                icon={Calendar}
                label="Mortgage Term"
                value={term}
                onChange={setTerm}
                min={5}
                max={40}
                step={1}
                suffix="years"
              />
            </div>

            {/* LTV Indicator */}
            <div className="mt-6 p-4 bg-gray-50 rounded-2xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Loan-to-Value (LTV)</span>
                <span className="text-sm font-bold text-gray-900">{ltv.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(ltv, 100)}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Your Results</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-indigo-200 text-sm mb-1">Monthly Payment</p>
                  <motion.p 
                    className="text-4xl font-bold"
                    key={monthlyPayment}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {fmt(monthlyPayment)}
                  </motion.p>
                </div>

                <div>
                  <p className="text-indigo-200 text-sm mb-1">Loan Amount</p>
                  <p className="text-2xl font-semibold">{fmt(loanAmount)}</p>
                </div>

                <div>
                  <p className="text-indigo-200 text-sm mb-1">Total Repayment</p>
                  <p className="text-2xl font-semibold">{fmt(totalRepayment)}</p>
                </div>

                <div>
                  <p className="text-indigo-200 text-sm mb-1">Total Interest</p>
                  <p className="text-2xl font-semibold">{fmt(totalRepayment - loanAmount)}</p>
                </div>
              </div>

              <button className="w-full mt-8 bg-white text-indigo-600 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-200">
                Get Your Exact Quote
              </button>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Quick Insights</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Based on {term} year term at {interestRate}% interest</p>
                <p>• {ltv > 80 ? 'Higher LTV may require specialist lenders' : 'Good LTV for standard rates'}</p>
                <p>• Consider overpayments to reduce total interest</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
