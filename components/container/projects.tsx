'use client';

import Image from 'next/image';
import { ArrowRight, CodeXml, ExternalLink, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Project } from '@/types/portfolio';
import SectionTitle from '../shared/section-title';
import Link from 'next/link';

type Props = { projects: Project[]; githubUrl: string; contactEmail: string };

const Projects = ({ projects, githubUrl, contactEmail }: Props) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <section
        id="projects"
        className="px-6 sm:px-10 lg:px-14 py-12 lg:py-16 border-b border-line/80 scroll-mt-20"
      >
        <SectionTitle
          title="Projects"
          subtitle="Selected Work"
          rightElement={
            <Link
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center text-xs font-jakarta font-bold uppercase tracking-widest text-primary mt-3 md:mt-0"
            >
              View all code{' '}
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="bg-white/70 border border-line/80 group cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all"
              onClick={() => setActiveProject(project)}
            >
              <div className="relative aspect-3/2 overflow-hidden bg-neutral-200">
                <Image
                  unoptimized
                  src={project.thumbnail}
                  alt={`${project.name} project`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-fira text-[10px] text-muted">
                    {String(index + 1).padStart(2, '0')} / {project.domain}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-primary font-bold">
                    {project.source}
                  </span>
                </div>
                <h3 className="font-jakarta font-bold text-base uppercase text-ink mb-2">
                  {project.name}
                </h3>
                <p className="text-xs text-muted leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="font-fira text-[9px] bg-neutral-100 px-2 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {activeProject && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-white max-w-lg w-full p-8 border border-line shadow-2xl relative"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-muted hover:text-ink p-1"
              aria-label="Close project details"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-[10px] font-jakarta font-bold uppercase tracking-widest text-primary mb-1">
              {activeProject.domain} Case Study
            </div>
            <h3 className="text-xl font-jakarta font-bold uppercase text-ink mb-4">
              {activeProject.name}
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-5">
              {activeProject.description}
            </p>
            <div className="mb-5">
              <span className="font-bold text-muted uppercase text-[10px] tracking-wider block mb-2">
                Role
              </span>
              <p className="text-xs text-ink">{activeProject.role}</p>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {activeProject.techStack.map((tech) => (
                <span key={tech} className="font-fira text-[10px] bg-neutral-100 px-2 py-1">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-end gap-3 pt-4 border-t border-line/60">
              {activeProject.githubUrl && (
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 border text-xs font-bold uppercase"
                >
                  <CodeXml className="w-3.5 h-3.5" /> Code
                </a>
              )}
              {activeProject.demoUrl && (
                <a
                  href={activeProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 border text-xs font-bold uppercase"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Demo
                </a>
              )}
              <a
                href={`mailto:${contactEmail}`}
                className="px-5 py-2 bg-primary text-white text-xs font-jakarta font-bold uppercase tracking-widest"
              >
                Discuss Project
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
