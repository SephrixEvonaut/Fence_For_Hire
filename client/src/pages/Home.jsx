import HeroSection from './home/HeroSection';
import AboutSection from './home/AboutSection';
import FenceTypesSection from './home/FenceTypesSection';
import TestimonialsSection from './home/TestimonialsSection';
import CompanyInfoSection from './home/CompanyInfoSection';
import SocialGallerySection from './home/SocialGallerySection';
import ContactSection from './home/ContactSection';
import './home.css';

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <FenceTypesSection />
      <TestimonialsSection />
      <CompanyInfoSection />
      <SocialGallerySection />
      <ContactSection />
    </div>
  );
}
