/**
 * ContactSection Component
 * Contact form and contact information
 */
import React from 'react';
import { useFormHandler } from '../../hooks';
import { CONTACT_INFO, SITE_CONFIG } from '../../data/config';
import './ContactSection.css';

// SVG Icon components
const EmailIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const getIcon = (iconType) => {
  const icons = {
    email: <EmailIcon />,
    phone: <PhoneIcon />,
    github: <GitHubIcon />,
    linkedin: <LinkedInIcon />,
  };
  return icons[iconType] || <EmailIcon />;
};

export const ContactSection = () => {
  const { handleSubmit, isLoading, status } = useFormHandler();

  return (
    <section id="contact">
      <div className="container">
        <div className="section-head" style={{ textAlign: 'center' }}>
          <span className="section-label reveal">Let's Talk</span>
          <h2 className="section-title reveal delay-1">Get In Touch</h2>
          <p className="section-sub reveal delay-2" style={{ margin: '0 auto' }}>
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="divider">
          <div className="divider-dot"></div>
        </div>

        <div className="contact-grid">
          {/* INFO SIDE */}
          <div className="reveal-left">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>
              Let's build something <span style={{ color: 'var(--accent-light)' }}>great together</span>
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '.9rem' }}>
              I'm currently open to freelance projects and internship opportunities. If you have a project that needs
              some creative work, I'd love to hear about it.
            </p>

            <div className="contact-info-list">
              {CONTACT_INFO.map((item) => (
                <div key={item.label} className="contact-info-item">
                  <div className="contact-info-icon">{getIcon(item.icon)}</div>
                  <div>
                    <div className="contact-info-label">{item.label}</div>
                    <div className="contact-info-value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORM SIDE */}
          <div className="reveal-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fname">First Name</label>
                  <input id="fname" type="text" placeholder="John" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lname">Last Name</label>
                  <input id="lname" type="text" placeholder="Doe" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="femail">Email Address</label>
                <input id="femail" type="email" placeholder="john@example.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="fsubject">Subject</label>
                <input id="fsubject" type="text" placeholder="Project Inquiry" required />
              </div>

              <div className="form-group">
                <label htmlFor="fmsg">Message</label>
                <textarea id="fmsg" placeholder="Tell me about your project..." required></textarea>
              </div>

              <div className="form-submit">
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                  <svg
                    viewBox="0 0 24 24"
                    style={{
                      width: '16px',
                      height: '16px',
                      fill: 'none',
                      stroke: '#fff',
                      strokeWidth: 2,
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }}
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {status && (
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: '.85rem',
                    color: status.type === 'success' ? 'var(--accent-light)' : '#ff6b6b',
                    marginTop: '8px',
                  }}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
