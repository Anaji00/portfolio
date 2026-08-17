import React from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiPypi } from 'react-icons/si';
import { useReveal } from '../../hooks/useReveal';

export function ProjectCard({ project, index = 0 }) {
  const [ref, isRevealed] = useReveal(0.1);

  const isPyPi = project.liveUrl && project.liveUrl.includes('pypi.org');

  return (
    <article
      ref={ref}
      className={`h-full transition-all duration-500 ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 75}ms` }}
    >
      <Card
        featured={project.featured}
        className="h-full flex flex-col p-6 md:p-7 justify-between group"
      >
        <div>
          {/* Header Badges & Actions */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2 flex-wrap">
              {project.featured && (
                <Badge variant="featured">
                  {project.badge || 'Featured'}
                </Badge>
              )}
              {project.category && (
                <Badge variant="neutral">
                  {project.category}
                </Badge>
              )}
            </div>

            {/* Quick action icons in top corner */}
            <div className="flex items-center gap-2">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
                  className="text-[#a0a6bd] hover:text-[#7effd4] transition-colors p-1"
                >
                  <FaGithub className="text-base" aria-hidden="true" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit live deployment or package for ${project.title}`}
                  className="text-[#a0a6bd] hover:text-[#7effd4] transition-colors p-1"
                >
                  {isPyPi ? (
                    <SiPypi className="text-base" aria-hidden="true" />
                  ) : (
                    <FaExternalLinkAlt className="text-sm" aria-hidden="true" />
                  )}
                </a>
              )}
            </div>
          </div>

          {/* Project Title & Subtitle */}
          <h3 className="font-syne text-xl font-bold text-white group-hover:text-[#7effd4] transition-colors duration-200 mb-1">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-[#5b9cf6] font-medium mb-3">
            {project.subtitle}
          </p>

          {/* Project Description */}
          <p className="font-mono text-xs md:text-sm text-[#a0a6bd] leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Footer: Tags & Action Button */}
        <div>
          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-5" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="tag">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Bottom Action Link */}
          <div className="pt-3 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open repository for ${project.title}`}
                className="inline-flex items-center gap-2 font-mono text-xs font-medium text-[#7effd4] hover:underline underline-offset-4 transition-all"
              >
                <FaGithub aria-hidden="true" />
                <span>View Repository</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open package or live link for ${project.title}`}
                className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[#5b9cf6] hover:underline underline-offset-4 transition-all"
              >
                {isPyPi ? <SiPypi aria-hidden="true" /> : <FaExternalLinkAlt className="text-[0.7rem]" aria-hidden="true" />}
                <span>{isPyPi ? 'PyPI Registry' : 'Live Demo'}</span>
              </a>
            )}
          </div>
        </div>
      </Card>
    </article>
  );
}

export default ProjectCard;
