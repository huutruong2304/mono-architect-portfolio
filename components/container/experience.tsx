import { CodeXml, Palette, Server, type LucideIcon } from 'lucide-react';
import type { SkillGroup, WorkExperience } from '@/types/portfolio';
import SectionTitle from '../shared/section-title';

type Props = {
  skills: SkillGroup[];
  experiences: WorkExperience[];
};

const SKILL_ICONS: Record<string, LucideIcon> = {
  frontend: CodeXml,
  'ui-styling': Palette,
  'backend-api': Server,
};

const Experience = ({ skills, experiences }: Props) => {
  const skillItems = skills.flatMap((group) =>
    group.items.map((skill) => ({ ...skill, type: group.type })),
  );

  return (
    <section
      id="company-experience"
      className="px-6 sm:px-10 lg:px-14 py-12 lg:py-16 border-b border-line/80 scroll-mt-20"
    >
      <SectionTitle title="Work Experience" subtitle="Career Track" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="font-jakarta font-extrabold text-xs sm:text-sm tracking-widest uppercase text-ink mb-8">
            Skills & Tech Stack
          </h2>
          <div className="space-y-5">
            {skillItems.map((skill) => {
              const SkillIcon = SKILL_ICONS[skill.type] ?? CodeXml;
              return (
                <div key={`${skill.type}-${skill.name}`} className="group">
                  <div className="flex items-center justify-between text-xs font-jakarta font-bold uppercase tracking-wider mb-1.5">
                    <div className="flex items-center space-x-2.5 text-ink">
                      <SkillIcon className="w-4 h-4 text-muted stroke-[1.75]" />
                      <span>{skill.name}</span>
                    </div>
                    <span className="font-fira text-muted text-[11px]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-line/80 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-6 lg:border-l lg:border-line/80">
          <div className="flex items-end justify-between mb-8">
            <h3 className="font-jakarta font-extrabold text-xs sm:text-sm tracking-widest uppercase text-ink">
              Experience Timeline
            </h3>
          </div>
          <div className="space-y-7">
            {experiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.position}`}
                className="relative pl-5 border-l-2 border-line"
              >
                <div className="absolute -left-1.25 top-1 w-2 h-2 rounded-full bg-primary" />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-jakarta font-bold text-sm uppercase text-ink">
                      {experience.position}
                    </h3>
                    <p className="text-xs text-primary font-semibold">{experience.company}</p>
                  </div>
                  {(experience.startDate || experience.endDate) && (
                    <span className="font-fira text-[10px] text-muted whitespace-nowrap">
                      {[experience.startDate, experience.endDate].filter(Boolean).join(' — ')}
                    </span>
                  )}
                </div>
                <ul className="space-y-1 text-xs text-muted leading-relaxed">
                  {experience.description.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
