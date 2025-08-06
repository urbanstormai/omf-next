import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import LenderMarquee from "@/components/LenderMarquee";
import BuyerGrid from "@/components/BuyerGrid";
import ProcessStrip from "@/components/ProcessStrip";
import Calculator from "@/components/Calculator";
import DownloadGuide from "@/components/DownloadGuide";
import Testimonials from "@/components/Testimonials";
import MarketPosition from "@/components/MarketPosition";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <LenderMarquee />
      <BuyerGrid />
      <ProcessStrip />
      <Calculator />
      <DownloadGuide />
      <Testimonials />
      <MarketPosition />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
