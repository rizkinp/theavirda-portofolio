import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen smooth-scroll-container">
      <Navbar />
      <section id="hero" className="scroll-section">
        <HeroSection />
      </section>
      <section id="experience" className="scroll-section">
        <ExperienceSection />
      </section>
      <section id="portfolio" className="scroll-section">
        <PortfolioSection />
      </section>
      <section id="contact" className="scroll-section">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}
