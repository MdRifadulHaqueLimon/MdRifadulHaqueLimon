/**
 * SkillCard Component
 * Individual skill card
 */
import React from 'react';

export const SkillCard = ({ skill, delay }) => {
  return (
    <div className="skill-card reveal" style={{ transitionDelay: `${delay}s` }}>
      <div className="skill-icon">{skill.icon}</div>
      <div className="skill-name">{skill.name}</div>
    </div>
  );
};

export default SkillCard;
