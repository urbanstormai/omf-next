'use client';
import { ReactNode } from 'react';

export default function Section({
  id, children, className = '', narrow = false,
}: { id?: string; children: ReactNode; className?: string; narrow?: boolean }) {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className={`mx-auto ${narrow ? 'max-w-5xl' : 'max-w-7xl'} px-4`}>
        {children}
      </div>
    </section>
  );
}
