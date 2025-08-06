'use client';

export default function LenderMarquee() {
  return (
    <section
      className="lender-bar bg-charcoal h-14 overflow-hidden"
      aria-label="Lender partners"
    >
      <div className="marquee flex gap-8 animate-scroll items-center w-max">
        <img src="/assets/lenders/logo1.svg" alt="Logo 1" className="h-12 grayscale brightness-200" />
        <img src="/assets/lenders/logo2.svg" alt="Logo 2" className="h-12 grayscale brightness-200" />
        <img src="/assets/lenders/logo1.svg" alt="Logo 1" className="h-12 grayscale brightness-200" />
        <img src="/assets/lenders/logo2.svg" alt="Logo 2" className="h-12 grayscale brightness-200" />
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

