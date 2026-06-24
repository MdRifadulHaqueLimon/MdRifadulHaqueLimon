/**
 * Navbar Component
 * Main navigation header with mobile responsive menu
 */
import React, { useState } from 'react';
import { useNavbarScroll } from '../../hooks';
import { NAV_LINKS } from '../../data/config';
import './Navbar.css';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useNavbarScroll();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header id="header" className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="nav-inner">
          {/* Logo */}
          <a href="#hero" className="logo">
            Limon<span>&lt;/&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <nav>
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a href="#contact" className="btn btn-primary nav-cta">
            Hire Me
          </a>

          {/* Hamburger Menu */}
          <button
            className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
            id="hamburger"
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`} id="mobileNav">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={closeMobileMenu}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={closeMobileMenu}
          style={{ color: 'var(--accent-light)' }}
        >
          Hire Me →
        </a>
      </div>
    </header>
  );
};

export default Navbar;
