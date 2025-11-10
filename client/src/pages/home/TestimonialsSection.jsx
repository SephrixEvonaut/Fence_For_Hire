import './TestimonialsSection.css';

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    rating: 5,
    text: 'Excellent work! The team was professional, on time, and the fence looks amazing. Highly recommend All State Fence for any fencing needs.',
    date: '2 weeks ago'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Very pleased with the quality and craftsmanship. They helped us choose the perfect fence for our backyard and the installation was flawless.',
    date: '1 month ago'
  },
  {
    id: 3,
    name: 'Michael Brown',
    rating: 5,
    text: 'Great experience from start to finish. Fair pricing, quality materials, and exceptional customer service. Our new vinyl fence is beautiful!',
    date: '3 weeks ago'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section" data-testid="section-testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title" data-testid="text-testimonials-title">
          Professional Contractors with Installation Experts
        </h2>
        <p className="testimonials-subtitle">
          See What Our Clients Say
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card" data-testid={`card-testimonial-${testimonial.id}`}>
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <circle cx="25" cy="25" r="25" fill="#fbbf24"/>
                    <text x="50%" y="50%" fontSize="20" fontWeight="600" fill="#1e3a7a" textAnchor="middle" dominantBaseline="middle">
                      {testimonial.name.charAt(0)}
                    </text>
                  </svg>
                </div>
                <div className="testimonial-info">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <div className="testimonial-rating" aria-label={`${testimonial.rating} star rating`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star" aria-hidden="true">★</span>
                    ))}
                  </div>
                  <p className="testimonial-date">{testimonial.date}</p>
                </div>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
