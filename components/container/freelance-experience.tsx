import { Cloud, CodeXml, Cpu, Database, Palette, Server, type LucideIcon } from 'lucide-react';
import type { FreelanceImpact, SkillGroup } from '@/types/portfolio';
import SectionTitle from '../shared/section-title';

type Props = {
  skills: SkillGroup[];
  impact: FreelanceImpact;
};

const SKILL_ICONS: Record<string, LucideIcon> = {
  frontend: CodeXml,
  'ui-styling': Palette,
  'backend-api': Server,
  database: Database,
  cloud: Cloud,
  architecture: Cpu,
};

const FreelanceExperience = ({ skills, impact }: Props) => {
  const skillItems = skills.flatMap((group) =>
    group.items.map((skill) => ({ ...skill, type: group.type })),
  );

  return (
    <section
      id="freelance-experience"
      className="px-6 sm:px-10 lg:px-14 py-12 lg:py-16 border-b border-line/80 scroll-mt-20"
    >
      <SectionTitle title="Freelance Experience" subtitle="Career Track" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h2 className="font-jakarta font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase text-ink mb-8">
              Skills & Tech Stack
            </h2>
            <div className="space-y-6">
              {skillItems.map((skill) => {
                const SkillIcon = SKILL_ICONS[skill.type] ?? CodeXml;
                return (
                  <div key={`${skill.type}-${skill.name}`}>
                    <div className="flex items-center justify-between gap-4 text-xs font-jakarta font-bold uppercase tracking-wider mb-1.5">
                      <div className="flex items-center space-x-2.5 min-w-0 text-ink">
                        <SkillIcon className="w-4 h-4 shrink-0 text-muted stroke-[1.75]" />
                        <span className="truncate">{skill.name}</span>
                      </div>
                      <span className="font-fira text-muted text-[11px] shrink-0">
                        {skill.level}%
                      </span>
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
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between lg:pl-6 lg:border-l lg:border-line/80">
          <div>
            <h2 className="font-jakarta font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase text-ink mb-8">
              Engineering Impact & Record
            </h2>

            <div className="grid grid-cols-3 gap-4 pb-8 mb-6 border-b border-line/60">
              {impact.metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`${index === 0 ? 'pr-2' : 'px-2 sm:px-4'} ${index < impact.metrics.length - 1 ? 'border-r border-line/60' : ''}`}
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-jakarta font-light tracking-tight text-ink whitespace-nowrap">
                    {metric.value}
                    <span className="text-primary font-normal">{metric.suffix}</span>
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-jakarta font-bold uppercase tracking-[0.18em] text-muted mt-1.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <blockquote className="bg-white/60 border border-line/90 p-6 rounded-none relative">
            <div className="flex items-start space-x-4">
              <div className="text-primary font-playfair text-5xl leading-none select-none font-bold -mt-2">
                “
              </div>
              <div className="flex-1">
                <p className="text-xs sm:text-sm text-ink font-medium leading-relaxed italic">
                  {impact.quote.content}
                </p>
                <footer className="text-[10px] font-jakarta font-bold uppercase tracking-[0.25em] text-primary mt-3">
                  {impact.quote.author}
                  {impact.quote.source ? ` — ${impact.quote.source}` : ''}
                </footer>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default FreelanceExperience;
