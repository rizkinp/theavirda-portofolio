import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen smooth-scroll-container overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <section id="hero" className="scroll-section w-full">
          <HeroSection />
        </section>
        <section id="experience" className="scroll-section w-full">
          <ExperienceSection />
        </section>
        <section id="portfolio" className="scroll-section w-full">
          <PortfolioSection />
        </section>
        <section id="contact" className="scroll-section w-full">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
