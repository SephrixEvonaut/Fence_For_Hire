import './CompanyInfoSection.css';

export default function CompanyInfoSection() {
  return (
    <section className="company-info-section" data-testid="section-company-info">
      <div className="company-info-container">
        <h2 className="company-info-title" data-testid="text-company-info-title">
          Family Owned & Operated - All State Fence
        </h2>
        <div className="company-info-content">
          <p className="company-info-text">
            Choosing a fence company is more than just finding someone to install a few posts and boards. We are a family-owned and operated company that has been serving Massachusetts since 1995. We understand that your fence is a significant investment in your property, and we're committed to delivering exceptional quality, reliability, and value.
          </p>
          <p className="company-info-text">
            Our team consists of highly trained professionals who take pride in their craftsmanship. We use only premium materials and proven installation techniques to ensure your fence will stand the test of time. Whether you need a decorative fence to enhance your curb appeal or a security fence to protect your property, we have the expertise to bring your vision to life.
          </p>
          <p className="company-info-text">
            We're fully licensed and insured, and we stand behind every project with comprehensive warranties. Our commitment to customer satisfaction has earned us hundreds of five-star reviews and a reputation as the most trusted fencing company in the region.
          </p>
        </div>
        <div className="company-badges">
          <div className="badge-item">
            <div className="badge-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="28" stroke="#fbbf24" strokeWidth="2" fill="#1e3a7a"/>
                <text x="50%" y="50%" fontSize="12" fontWeight="600" fill="#fff" textAnchor="middle" dominantBaseline="middle">25+</text>
              </svg>
            </div>
            <p className="badge-text">Years of Experience</p>
          </div>
          <div className="badge-item">
            <div className="badge-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="28" stroke="#fbbf24" strokeWidth="2" fill="#1e3a7a"/>
                <text x="50%" y="50%" fontSize="24" fontWeight="600" fill="#fbbf24" textAnchor="middle" dominantBaseline="middle">★</text>
              </svg>
            </div>
            <p className="badge-text">Licensed & Insured</p>
          </div>
          <div className="badge-item">
            <div className="badge-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="28" stroke="#fbbf24" strokeWidth="2" fill="#1e3a7a"/>
                <text x="50%" y="50%" fontSize="12" fontWeight="600" fill="#fff" textAnchor="middle" dominantBaseline="middle">100%</text>
              </svg>
            </div>
            <p className="badge-text">Satisfaction Guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
