'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Reduced height: h-16 (64px). Rounded glass pill. */}
        <div className="mt-3 glass-dark glossy rounded-full h-16 px-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            {/* Lock intrinsic size for CLS; scale visually via className */}
            <Image
              src="/assets/lenders/logo.png"
              alt="OMF"
              width={600}
              height={200}
              priority
              className="h-10 w-auto"  /* was h-24; now slimmer */
            />
            <span className="sr-only">UK & Overseas Mortgage Experts</span>
          </Link>

          <nav className="hidden md:flex items-center gap-5 text-white/80 text-sm">
            <Link href="#services" className="hover:text-white">Services</Link>
            <Link href="#process" className="hover:text-white">Process</Link>
            <Link href="#about" className="hover:text-white">About</Link>
            <Link href="#contact" className="hover:text-white">Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="#lead" className="hidden md:inline-flex rounded-full bg-white/10 text-white px-4 py-2 hover:bg-white/20">
              Log in
            </Link>
            <Link href="#lead"
              className="rounded-full bg-mint text-charcoal px-4 py-2 font-semibold shadow-soft hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-mint/80">
              Free consultation
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
