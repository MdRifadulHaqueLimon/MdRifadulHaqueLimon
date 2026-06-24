/**
 * ProjectsSection Component
 * Displays portfolio projects with filtering capability
 */
import React, { useState } from 'react';
import { PROJECTS, PROJECT_CATEGORIES } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import './ProjectsSection.css';

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-head" style={{ textAlign: 'center' }}>
          <span className="section-label reveal">Portfolio</span>
          <h2 className="section-title reveal delay-1">My Projects</h2>
          <p className="section-sub reveal delay-2" style={{ margin: '0 auto' }}>
            A curated selection of what I've built. Each project tells a story of problem-solving.
          </p>
        </div>

        <div className="divider">
          <div className="divider-dot"></div>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs reveal">
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category.value}
              className={`filter-tab ${activeFilter === category.value ? 'active' : ''}`}
              data-filter={category.value}
              onClick={() => setActiveFilter(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
