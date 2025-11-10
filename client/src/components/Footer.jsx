import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-black">
      <div className="footer-container">
        {/* Desktop Layout */}
        <div className="footer-desktop">
          <div className="footer-left">
            <div className="footer-social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                data-testid="link-footer-facebook"
                aria-label="Facebook"
              >
                <Facebook className="icon-md" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                data-testid="link-footer-instagram"
                aria-label="Instagram"
              >
                <Instagram className="icon-md" />
              </a>
            </div>
          </div>

          <div className="footer-center">
            <div className="footer-contact-info">
              <a
                href="tel:7742043402"
                className="footer-contact-item"
                data-testid="link-footer-phone"
              >
                <Phone className="icon-sm" />
                <span>(774) 204-3402</span>
              </a>
              <a
                href="mailto:allstatefencesale@hotmail.com"
                className="footer-contact-item"
                data-testid="link-footer-email"
              >
                <Mail className="icon-sm" />
                <span>allstatefencesale@hotmail.com</span>
              </a>
              <div className="footer-contact-item" data-testid="text-footer-address">
                <MapPin className="icon-sm" />
                <span>307 Concord Street, Rockland MA 02370</span>
              </div>
            </div>
            <div className="footer-copyright" data-testid="text-footer-copyright">
              All State Fence ©2021 - Design by Kingsbury Web
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-logo">
              <div className="footer-stars" data-testid="footer-stars-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="footer-star">★</span>
                ))}
              </div>
              <div className="footer-logo-text">
                <span className="footer-logo-all-state">ALL STATE</span>
                <span className="footer-logo-fence">FENCE</span>
              </div>
              <div className="footer-fence-icon">
                <div className="footer-fence-pickets">
                  {[...Array(11)].map((_, i) => (
                    <div key={i} className="footer-picket"></div>
                  ))}
                </div>
                <div className="footer-fence-dots">
                  <span className="footer-dot"></span>
                  <span className="footer-dot"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="footer-tablet">
          <div className="footer-tablet-row-1">
            <div className="footer-social-icons-tablet">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                data-testid="link-footer-facebook-tablet"
                aria-label="Facebook"
              >
                <Facebook className="icon-md" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                data-testid="link-footer-instagram-tablet"
                aria-label="Instagram"
              >
                <Instagram className="icon-md" />
              </a>
            </div>
            <div className="footer-logo-tablet">
              <div className="footer-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="footer-star">★</span>
                ))}
              </div>
              <div className="footer-logo-text">
                <span className="footer-logo-all-state">ALL STATE</span>
                <span className="footer-logo-fence">FENCE</span>
              </div>
              <div className="footer-fence-icon">
                <div className="footer-fence-pickets">
                  {[...Array(11)].map((_, i) => (
                    <div key={i} className="footer-picket"></div>
                  ))}
                </div>
                <div className="footer-fence-dots">
                  <span className="footer-dot"></span>
                  <span className="footer-dot"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-tablet-row-2">
            <div className="footer-contact-info-tablet">
              <a
                href="tel:7742043402"
                className="footer-contact-item"
                data-testid="link-footer-phone-tablet"
              >
                <Phone className="icon-sm" />
                <span>(774) 204-3402</span>
              </a>
              <a
                href="mailto:allstatefencesale@hotmail.com"
                className="footer-contact-item"
                data-testid="link-footer-email-tablet"
              >
                <Mail className="icon-sm" />
                <span>allstatefencesale@hotmail.com</span>
              </a>
              <div className="footer-contact-item" data-testid="text-footer-address-tablet">
                <MapPin className="icon-sm" />
                <span>307 Concord Street, Rockland MA 02370</span>
              </div>
            </div>
          </div>

          <div className="footer-tablet-row-3">
            <div className="footer-copyright">
              All State Fence ©2021 - Design by Kingsbury Web
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="footer-mobile">
          <div className="footer-mobile-social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              data-testid="link-footer-facebook-mobile"
              aria-label="Facebook"
            >
              <Facebook className="icon-lg" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              data-testid="link-footer-instagram-mobile"
              aria-label="Instagram"
            >
              <Instagram className="icon-lg" />
            </a>
          </div>

          <div className="footer-mobile-contact">
            <a
              href="tel:7742043402"
              className="footer-mobile-contact-item"
              data-testid="link-footer-phone-mobile"
            >
              <Phone className="icon-sm" />
              <span>(774) 204-3402</span>
            </a>
            <a
              href="mailto:allstatefencesale@hotmail.com"
              className="footer-mobile-contact-item"
              data-testid="link-footer-email-mobile"
            >
              <Mail className="icon-sm" />
              <span>allstatefencesale@hotmail.com</span>
            </a>
            <div className="footer-mobile-contact-item" data-testid="text-footer-address-mobile">
              <MapPin className="icon-sm" />
              <span>307 Concord Street, Rockland MA 02370</span>
            </div>
          </div>

          <div className="footer-copyright-mobile">
            All State Fence ©2021 - Design by Kingsbury Web
          </div>

          <div className="footer-logo-mobile">
            <div className="footer-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="footer-star">★</span>
              ))}
            </div>
            <div className="footer-logo-text">
              <span className="footer-logo-all-state">ALL STATE</span>
              <span className="footer-logo-fence">FENCE</span>
            </div>
            <div className="footer-fence-icon">
              <div className="footer-fence-pickets">
                {[...Array(11)].map((_, i) => (
                  <div key={i} className="footer-picket"></div>
                ))}
              </div>
              <div className="footer-fence-dots">
                <span className="footer-dot"></span>
                <span className="footer-dot"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
