import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import LenderMarquee from "@/components/LenderMarquee";
import BuyerGrid from "@/components/BuyerGrid";
import ProcessStrip from "@/components/ProcessStrip";
import Calculator from "@/components/Calculator";
import MarketPosition from "@/components/MarketPosition";
import Testimonials from "@/components/Testimonials";
import DownloadGuide from "@/components/DownloadGuide";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <NavBar />
      <Hero />
      <LenderMarquee />
      <BuyerGrid />
      <ProcessStrip />
      <Calculator />
      <MarketPosition />
      <Testimonials />
      <DownloadGuide />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
