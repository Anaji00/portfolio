import React from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Card } from '../ui/Card';
import { siteConfig } from '../../data/siteConfig';
import { useReveal } from '../../hooks/useReveal';

export function About() {
  const [ref, isRevealed] = useReveal(0.1);

  return (
    <SectionWrapper
      id="about"
      number="03."
      title="Background & Philosophy"
      subtitle="The journey from curiosity to architecting production AI systems."
    >
      <div
        ref={ref}
        className={`grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start transition-all duration-700 ${
          isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Narrative Biography */}
        <div className="lg:col-span-2 space-y-5 font-mono text-sm md:text-base text-[#a0a6bd] leading-relaxed">
          {siteConfig.about.paragraphs.map((p, idx) => (
            <p
              key={idx}
              dangerouslySetInnerHTML={{ __html: p }}
              className="[&>strong]:text-white [&>strong]:font-semibold [&>em]:text-[#7effd4] [&>em]:not-italic"
            />
          ))}
        </div>

        {/* Highlight Stats / Metrics Sidebar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {siteConfig.stats.map((stat, idx) => (
            <Card
              key={idx}
              interactive={false}
              className="p-5 border-[rgba(255,255,255,0.08)] bg-[#1c1c26]/80 hover:border-[#7effd4]/30 transition-colors"
            >
              <span className="block font-syne text-2xl md:text-3xl font-extrabold text-[#7effd4] tracking-tight mb-1">
                {stat.value}
              </span>
              <span className="block font-mono text-xs font-semibold uppercase tracking-wider text-white">
                {stat.label}
              </span>
              {stat.detail && (
                <span className="block font-mono text-[0.72rem] text-[#a0a6bd] mt-1">
                  {stat.detail}
                </span>
              )}
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default About;
