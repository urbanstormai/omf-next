'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          <div className="flex items-center">
            <Image
              src="/assets/lenders/logo.png"
              alt="OMF Logo"
              width={600}
              height={200}
              className="h-24 w-auto"
              priority
            />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </a>
              <a href="#process" className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Process
              </a>
              <a href="#about" className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              <a href="#lead" className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
              <a 
                href="#lead"
                className="glossy text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/20 transition-all duration-200 border border-white/30"
              >
                Free Consultation
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-dark border-t border-white/20">
            <a href="#services" className="text-white/90 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Services
            </a>
            <a href="#process" className="text-white/90 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Process
            </a>
            <a href="#about" className="text-white/90 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="#lead" className="text-white/90 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
            <a 
              href="#lead"
              className="w-full text-left bg-white/20 text-white px-3 py-2 rounded-lg text-base font-semibold hover:bg-white/30 block"
            >
              Free Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
