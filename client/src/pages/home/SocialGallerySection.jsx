import './SocialGallerySection.css';

const galleryItems = [
  { type: 'image', id: 1 },
  { type: 'image', id: 2 },
  { type: 'feedback', id: 1, text: 'Thank you for the amazing work! Our backyard looks incredible.' },
  { type: 'image', id: 3 },
  { type: 'image', id: 4 },
  { type: 'image', id: 5 },
  { type: 'feedback', id: 2, text: 'Professional team, quality materials, and excellent customer service!' },
  { type: 'image', id: 6 },
  { type: 'image', id: 7 },
  { type: 'image', id: 8 },
  { type: 'feedback', id: 3, text: 'Highly recommend! They transformed our property with a beautiful new fence.' },
  { type: 'image', id: 9 },
];

export default function SocialGallerySection() {
  return (
    <section className="social-gallery-section" data-testid="section-social-gallery">
      <div className="social-gallery-container">
        <h2 className="social-gallery-title" data-testid="text-social-gallery-title">
          Recent Projects & Customer Feedback
        </h2>
        <div className="social-gallery-grid">
          {galleryItems.map((item, index) => {
            if (item.type === 'feedback') {
              return (
                <div key={`feedback-${item.id}`} className="gallery-feedback-card" data-testid={`card-feedback-${item.id}`}>
                  <div className="feedback-header">
                    <span className="feedback-label">FEEDBACK</span>
                  </div>
                  <p className="feedback-text">{item.text}</p>
                  <div className="feedback-rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="star" aria-hidden="true">★</span>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <div key={`image-${item.id}`} className="gallery-image-card" data-testid={`card-gallery-${item.id}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 400">
                  <rect fill="#9ca3af" width="400" height="400"/>
                  <text x="50%" y="50%" fontSize="16" fill="#fff" textAnchor="middle" dominantBaseline="middle">
                    Project #{item.id}
                  </text>
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
