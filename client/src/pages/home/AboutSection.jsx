import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-section" data-testid="section-about">
      <div className="about-container">
        <h2 className="about-title" data-testid="text-about-title">
          Creating Aesthetically Pleasing Backyard Experience!
        </h2>
        <p className="about-description" data-testid="text-about-description">
          At All State Fence, we bring over 25 years of expertise in creating beautiful and functional fencing solutions. 
          Our commitment to quality craftsmanship and customer satisfaction has made us the premier choice for residential 
          and commercial fencing throughout Massachusetts. We understand that your fence is more than just a boundary—it's 
          an investment in your property's security, privacy, and aesthetic appeal.
        </p>
        <p className="about-description">
          We specialize in custom fence design and installation, offering a wide range of materials and styles to complement 
          your property perfectly. From classic wood fences to modern vinyl and metal options, our expert team will guide you 
          through every step of the process to ensure your complete satisfaction.
        </p>
      </div>
    </section>
  );
}
