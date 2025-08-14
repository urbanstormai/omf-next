'use client';
import Image from 'next/image';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';

type Lender = { name: string; src: string; w: number; h: number; alt?: string };

const LENDERS: Lender[] = [
  { name: 'Barclays', src: '/barclays.svg', w: 120, h: 40, alt: 'Barclays' },
  { name: 'HSBC', src: '/hsbc.svg', w: 120, h: 40, alt: 'HSBC' },
  { name: 'Santander', src: '/santander.svg', w: 120, h: 40, alt: 'Santander' },
  { name: 'Halifax', src: '/halifax.jpeg', w: 120, h: 40, alt: 'Halifax' },
  { name: 'NatWest', src: '/natwest.svg', w: 120, h: 40, alt: 'NatWest' },
  { name: 'Lloyds', src: '/lloyds.svg', w: 120, h: 40, alt: 'Lloyds Bank' },
  { name: 'Nationwide', src: '/nationwide.svg', w: 120, h: 40, alt: 'Nationwide' },
  { name: 'Virgin Money', src: '/virgin.svg', w: 120, h: 40, alt: 'Virgin Money' }
];

export default function LenderMarquee() {
  // duplicate once for continuous scroll
  const items = [...LENDERS, ...LENDERS];

  return (
    <Section className="pt-10">
      <SectionHeading title="Trusted by leading lenders" subtitle="Whole-of-market access" />
      <div className="mt-8 glass-dark glossy rounded-xl2 px-4 py-3 overflow-hidden">
        <div className="marquee flex items-center gap-10 will-change-transform">
          {items.map((l, i) => (
            <div key={`${l.name}-${i}`} className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
              <Image
                src={l.src}
                alt={l.alt ?? l.name}
                width={l.w}
                height={l.h}
                loading="lazy"
                className="h-8 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .marquee {
          animation: scroll 26s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee { animation: none; }
        }
      `}</style>
    </Section>
  );
}
