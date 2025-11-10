import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section" data-testid="section-hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title" data-testid="text-hero-title">
          Welcome to All State Fence
        </h1>
        <p className="hero-subtitle" data-testid="text-hero-subtitle">
          Professional Fence Installation & Repair Services
        </p>
        <button className="hero-cta-button" data-testid="button-hero-cta">
          Get Our Ultimate Fence
        </button>
      </div>
    </section>
  );
}
