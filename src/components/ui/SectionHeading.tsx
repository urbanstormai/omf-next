'use client';

export default function SectionHeading({
  title, subtitle, align = 'center',
}: { title: string; subtitle?: string; align?: 'left' | 'center' }) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <h2 className="text-3xl md:text-4xl font-semibold text-white">{title}</h2>
      {subtitle && <p className="mt-2 text-white/70 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
