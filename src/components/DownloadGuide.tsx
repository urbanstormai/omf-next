'use client';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import Image from 'next/image';

export default function DownloadGuide() {
  return (
    <section id="lead" className="relative py-20 sm:py-32">
      <Image
        src="/assets/lenders/guide-bg.webp"
        alt="Modern interior"
        fill
        className="object-cover object-[center_20%]"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/40 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
            <FileText className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Free Guide: Overseas Mortgages
          </h2>
          
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Everything you need to know about buying property in the UK or overseas. 
            From eligibility requirements to tax implications, this comprehensive guide covers it all.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-charcoal bg-white rounded-full hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Free Guide
          </motion.button>
          
          <p className="mt-4 text-sm text-white/70">
            Join 5,000+ overseas buyers who've used this guide
          </p>
        </motion.div>
      </div>
    </section>
  );
}
