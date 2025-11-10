import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section className="contact-section" data-testid="section-contact">
      <div className="contact-container">
        <h2 className="contact-title" data-testid="text-contact-title">
          Contact Us Today!
        </h2>
        <div className="contact-content">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit} data-testid="form-contact">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  data-testid="input-name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  data-testid="input-email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  data-testid="input-phone"
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  data-testid="select-service"
                >
                  <option value="">Select a service...</option>
                  <option value="fence-installation">Fence Installation</option>
                  <option value="fence-repair">Fence Repair</option>
                  <option value="fence-replacement">Fence Replacement</option>
                  <option value="custom-design">Custom Design</option>
                  <option value="consultation">Free Consultation</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  data-testid="textarea-message"
                ></textarea>
              </div>
              <button type="submit" className="form-submit-button" data-testid="button-submit">
                Send Message
              </button>
            </form>
            <div className="contact-info-card">
              <h3>Get In Touch</h3>
              <div className="contact-info-items">
                <a href="tel:7742043402" className="contact-info-item" data-testid="link-contact-phone">
                  <Phone className="icon-sm" />
                  <span>(774) 204-3402</span>
                </a>
                <a href="mailto:allstatefencesale@hotmail.com" className="contact-info-item" data-testid="link-contact-email">
                  <Mail className="icon-sm" />
                  <span>allstatefencesale@hotmail.com</span>
                </a>
                <div className="contact-info-item">
                  <MapPin className="icon-sm" />
                  <span>307 Concord Street, Rockland MA 02370</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2956.123456789!2d-70.9123456!3d42.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDA3JzI0LjQiTiA3MMKwNTQnNDQuNCJX!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="All State Fence Location"
              aria-label="Google Maps showing All State Fence location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
