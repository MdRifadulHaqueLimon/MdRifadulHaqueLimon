/**
 * App Component
 * Main application component combining all sections
 */
import React, { useEffect } from 'react';
import { useScrollReveal } from './hooks';
import {
  Navbar,
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
  Footer,
} from './components';

import './styles/index.css';

function App() {
  // Ambient blobs
  const appRef = useScrollReveal();

  // Effect to observe scroll reveal elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={appRef} className="App">
      {/* Ambient Background Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
