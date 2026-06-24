/**
 * SkillsSection Component
 * Displays technology skills and tools
 */
import React from 'react';
import { SKILLS } from '../../data/skills';
import { SkillCard } from './SkillCard';
import './SkillsSection.css';

export const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head" style={{ textAlign: 'center' }}>
          <span className="section-label reveal">My Toolbox</span>
          <h2 className="section-title reveal delay-1">Technologies &amp; Skills</h2>
          <p className="section-sub reveal delay-2" style={{ margin: '0 auto' }}>
            The tools and technologies I use to craft modern web applications end-to-end.
          </p>
        </div>

        <div className="divider">
          <div className="divider-dot"></div>
        </div>

        <div className="skills-grid">
          {SKILLS.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} delay={(index % 8) * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
