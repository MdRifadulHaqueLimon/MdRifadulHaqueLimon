/**
 * AboutSection Component
 * About me section with profile image and description
 */
import React from 'react';
import { ABOUT_INFO } from '../../data/config';
import './AboutSection.css';

export const AboutSection = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          {/* IMAGE */}
          <div className="about-image-wrap reveal-left">
            <div className="about-image-frame">
              <img src={ABOUT_INFO.image} alt="Md. Rifadul Haque Limon" />
            </div>
            <div className="about-image-card">
              <div className="number">{ABOUT_INFO.yearsExperience}</div>
              <div className="label">Tech Skills</div>
            </div>
          </div>

          {/* TEXT */}
          <div className="reveal-right">
            <span className="section-label">Get to know me</span>
            <h2 className="section-title">
              I Build Web<br />Solutions{' '}
              <span style={{ color: 'var(--accent-light)' }}>That Matter</span>
            </h2>

            <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '.95rem' }}>
              I'm <strong style={{ color: 'var(--text-primary)' }}>Md. Rifadul Haque Limon</strong>,
              a dedicated Full-Stack MERN developer currently pursuing my Diploma in Computer Science
              and Engineering (7th Semester) at{' '}
              <strong style={{ color: 'var(--accent-light)' }}>Borak Polytechnic Institute</strong>.
            </p>

            <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '.95rem' }}>
              My passion lies in transforming ideas into scalable, performant web applications — from
              pixel-perfect frontends with React.js to robust Node.js/Express APIs backed by MongoDB.
              I care deeply about code quality, clean architecture, and a delightful user experience.
            </p>

            <p style={{ color: 'var(--text-muted)', fontSize: '.95rem' }}>
              Whether it's a startup MVP or a complex dashboard, I bring precision, consistency, and
              a problem-solver mindset to every project I touch.
            </p>

            <div className="about-pills">
              {ABOUT_INFO.pills.map((pill) => (
                <span key={pill} className="pill">
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
