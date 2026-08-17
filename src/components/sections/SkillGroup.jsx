import React from 'react';
import { Card } from '../ui/Card';
import { useReveal } from '../../hooks/useReveal';

export function SkillGroup({ group, index = 0 }) {
  const [ref, isRevealed] = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <Card
        interactive={false}
        className="p-6 h-full flex flex-col justify-between hover:border-[#7effd4]/30 transition-colors"
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-syne text-base md:text-lg font-bold text-white tracking-wide">
              {group.label}
            </h3>
            <span className="w-2 h-2 rounded-full bg-[#7effd4]/60" aria-hidden="true" />
          </div>

          {group.description && (
            <p className="font-mono text-xs text-[#a0a6bd] mb-4">
              {group.description}
            </p>
          )}

          <div className="flex flex-wrap gap-2 pt-2">
            {group.items.map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs text-[#e8e8f0] bg-[#111118] border border-[rgba(255,255,255,0.08)] rounded-md px-3 py-1.5 hover:border-[#7effd4]/50 hover:text-[#7effd4] hover:bg-[#161622] transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default SkillGroup;
