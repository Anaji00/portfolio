import React, { useState } from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { ProjectCard } from './ProjectCard';
import { projects, projectCategories } from '../../data/projects';

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <SectionWrapper
      id="projects"
      number="01."
      title="Featured Projects"
      subtitle="Production systems, autonomous AI agents, machine learning architectures, and scalable web platforms."
    >
      {/* Category Filter Tabs */}
      <div
        className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {projectCategories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActiveCategory(category)}
              className={`font-mono text-xs px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#7effd4] ${
                isActive
                  ? 'bg-[#7effd4] text-[#050508] font-bold shadow-md shadow-[#7effd4]/20'
                  : 'bg-[#1c1c26] text-[#a0a6bd] border border-[rgba(255,255,255,0.08)] hover:text-white hover:border-[#7effd4]/40'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Projects;
