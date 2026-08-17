import React from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { SkillGroup } from './SkillGroup';
import { skillGroups } from '../../data/skills';

export function Skills() {
  return (
    <SectionWrapper
      id="skills"
      number="02."
      title="Technical Arsenal"
      subtitle="Proficiencies across programming languages, AI modeling architectures, distributed backends, and cloud platforms."
      altBg={true}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, index) => (
          <SkillGroup key={group.id} group={group} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Skills;
