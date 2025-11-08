import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Phone, Facebook, Instagram, Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Fence Options', 
    path: '/fence-options',
    submenu: [
      { name: 'Arbor and Pergola', path: '/fence-options/arbor-pergola' },
      { name: 'Chain Link Fences', path: '/fence-options/chain-link' },
      { name: 'Metal Fences', path: '/fence-options/metal' },
      { name: 'Vinyl Fences', path: '/fence-options/vinyl' },
      { name: 'Wood Fences', path: '/fence-options/wood' },
      { name: 'Outdoor Shower', path: '/fence-options/outdoor-shower' },
    ]
  },
  { name: 'Catalog', path: '/catalog' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Financing', path: '/financing' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileSubmenuOpen(false);
  };

  const toggleMobileSubmenu = () => {
    setMobileSubmenuOpen(!mobileSubmenuOpen);
  };

  return (
    <>
      <header className="header-navy">
        <div className="header-container">
          <div className="header-desktop">
            <div className="header-left">
              <Link href="/" data-testid="link-home">
                <div className="logo-section">
                  <div className="logo-content">
                    <div className="stars" data-testid="stars-rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="star">★</span>
                      ))}
                    </div>
                    <div className="logo-text">
                      <span className="logo-all-state">ALL STATE</span>
                      <span className="logo-fence">FENCE</span>
                    </div>
                    <div className="fence-icon">
                      <div className="fence-pickets">
                        {[...Array(11)].map((_, i) => (
                          <div key={i} className="picket"></div>
                        ))}
                      </div>
                      <div className="fence-dots">
                        <span className="dot"></span>
                        <span className="dot"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <nav className="header-nav" data-testid="nav-desktop">
              {navigationLinks.map((link) => {
                if (link.submenu) {
                  return (
                    <div 
                      key={link.path}
                      className="dropdown-parent"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                      onFocus={() => setDropdownOpen(true)}
                      onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget)) {
                          setDropdownOpen(false);
                        }
                      }}
                      data-testid="dropdown-fence-options"
                    >
                      <Link
                        href={link.path}
                        data-testid={`link-${link.name.toLowerCase().replace(' ', '-')}`}
                      >
                        <span className={`nav-link ${location === link.path || location.startsWith(link.path + '/') ? 'active' : ''}`}>
                          {link.name}
                          <ChevronDown className="icon-sm dropdown-icon" />
                        </span>
                      </Link>
                      {dropdownOpen && (
                        <div className="dropdown-menu" data-testid="dropdown-menu">
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.path}
                              href={sublink.path}
                              data-testid={`link-${sublink.name.toLowerCase().replace(/ /g, '-')}`}
                            >
                              <span className={`dropdown-item ${location === sublink.path ? 'active' : ''}`}>
                                {sublink.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    data-testid={`link-${link.name.toLowerCase().replace(' ', '-')}`}
                  >
                    <span className={`nav-link ${location === link.path ? 'active' : ''}`}>
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="header-right">
              <a
                href="tel:7742043402"
                className="phone-link"
                data-testid="link-phone"
              >
                <Phone className="icon-sm" />
                <span>(774) 204-3402</span>
              </a>
              <button
                className="cta-button"
                data-testid="button-estimate"
              >
                Get a Free Estimate
              </button>
              <div className="financing-badge" data-testid="badge-financing">
                <span className="badge-text">FINANCING NOW AVAILABLE</span>
              </div>
              <div className="social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  data-testid="link-facebook"
                  aria-label="Facebook"
                >
                  <Facebook className="icon-md" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  data-testid="link-instagram"
                  aria-label="Instagram"
                >
                  <Instagram className="icon-md" />
                </a>
              </div>
            </div>
          </div>

          <div className="header-tablet">
            <div className="tablet-row-1">
              <button
                onClick={toggleMobileMenu}
                className="hamburger-button"
                data-testid="button-menu-tablet"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="icon-lg" /> : <Menu className="icon-lg" />}
              </button>

              <Link href="/" data-testid="link-home-tablet">
                <div className="logo-section-tablet">
                  <div className="logo-content">
                    <div className="stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="star">★</span>
                      ))}
                    </div>
                    <div className="logo-text">
                      <span className="logo-all-state">ALL STATE</span>
                      <span className="logo-fence">FENCE</span>
                    </div>
                    <div className="fence-icon">
                      <div className="fence-pickets">
                        {[...Array(11)].map((_, i) => (
                          <div key={i} className="picket"></div>
                        ))}
                      </div>
                      <div className="fence-dots">
                        <span className="dot"></span>
                        <span className="dot"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="social-icons-tablet">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  data-testid="link-facebook-tablet"
                  aria-label="Facebook"
                >
                  <Facebook className="icon-md" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  data-testid="link-instagram-tablet"
                  aria-label="Instagram"
                >
                  <Instagram className="icon-md" />
                </a>
              </div>
            </div>

            <div className="tablet-row-2">
              <a
                href="tel:7742043402"
                className="phone-link-tablet"
                data-testid="link-phone-tablet"
              >
                <Phone className="icon-sm" />
                <span>(774) 204-3402</span>
              </a>
              <button
                className="cta-button-tablet"
                data-testid="button-estimate-tablet"
              >
                Get a Free Estimate
              </button>
              <div className="financing-badge-tablet" data-testid="badge-financing-tablet">
                <span className="badge-text">FINANCING NOW AVAILABLE</span>
              </div>
            </div>
          </div>

          <div className="header-mobile">
            <button
              onClick={toggleMobileMenu}
              className="hamburger-button-mobile"
              data-testid="button-menu-mobile"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="icon-lg" /> : <Menu className="icon-lg" />}
            </button>

            <Link href="/" data-testid="link-home-mobile">
              <div className="logo-section-mobile">
                <div className="logo-content">
                  <div className="logo-text">
                    <span className="logo-all-state">ALL STATE</span>
                    <span className="logo-fence">FENCE</span>
                  </div>
                  <div className="fence-icon">
                    <div className="fence-pickets">
                      {[...Array(11)].map((_, i) => (
                        <div key={i} className="picket"></div>
                      ))}
                    </div>
                    <div className="fence-dots">
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <button
              className="cta-button-mobile"
              data-testid="button-estimate-mobile"
            >
              Get Estimate
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" data-testid="menu-overlay">
          <nav className="mobile-menu-content">
            {navigationLinks.map((link) => {
              if (link.submenu) {
                return (
                  <div key={link.path} data-testid="mobile-dropdown-fence-options">
                    <div className="mobile-nav-with-toggle">
                      <Link
                        href={link.path}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileSubmenuOpen(false);
                        }}
                        className="mobile-nav-link-wrapper"
                        data-testid={`link-mobile-${link.name.toLowerCase().replace(' ', '-')}`}
                      >
                        <span className={`mobile-nav-link ${location === link.path || location.startsWith(link.path + '/') ? 'active' : ''}`}>
                          {link.name}
                        </span>
                      </Link>
                      <button
                        onClick={toggleMobileSubmenu}
                        className="mobile-toggle-button"
                        data-testid="button-toggle-fence-options"
                        aria-label={mobileSubmenuOpen ? 'Close submenu' : 'Open submenu'}
                      >
                        <ChevronDown className={`icon-sm mobile-dropdown-icon ${mobileSubmenuOpen ? 'rotated' : ''}`} />
                      </button>
                    </div>
                    {mobileSubmenuOpen && (
                      <div className="mobile-submenu" data-testid="mobile-submenu">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.path}
                            href={sublink.path}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileSubmenuOpen(false);
                            }}
                            data-testid={`link-mobile-${sublink.name.toLowerCase().replace(/ /g, '-')}`}
                          >
                            <span className={`mobile-submenu-item ${location === sublink.path ? 'active' : ''}`}>
                              {sublink.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.name.toLowerCase().replace(' ', '-')}`}
                >
                  <span className={`mobile-nav-link ${location === link.path ? 'active' : ''}`}>
                    {link.name}
                  </span>
                </Link>
              );
            })}
            <div className="mobile-menu-footer">
              <a
                href="tel:7742043402"
                className="mobile-phone-link"
                data-testid="link-phone-mobile-menu"
              >
                <Phone className="icon-md" />
                <span>(774) 204-3402</span>
              </a>
              <div className="mobile-social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  data-testid="link-facebook-mobile"
                  aria-label="Facebook"
                >
                  <Facebook className="icon-lg" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  data-testid="link-instagram-mobile"
                  aria-label="Instagram"
                >
                  <Instagram className="icon-lg" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
