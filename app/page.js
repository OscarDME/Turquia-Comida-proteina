import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import CarouselSection from "@/components/CarouselSection";
import ImageGallery from "@/components/ImageGallery";
import Bonuses from "@/components/Bonuses";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";
import FAQ from "@/components/FAQ";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <Story />
      <Features />
      <Benefits />
      <CarouselSection />
      <ImageGallery />
      <Bonuses />
      <Testimonials />
      <FinalCta />
      <FAQ />
      <Closing />
      <Footer />
    </main>
  );
}
