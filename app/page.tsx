'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import AboutMe from '@/components/container/about-me';
import portfolio from '@/data/portfolio-default.json';
import Services from '@/components/container/services';
import Experience from '@/components/container/experience';
import FreelanceExperience from '@/components/container/freelance-experience';
import Projects from '@/components/container/projects';
import Reviews from '@/components/container/reviews';

const NAVIGATION_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#company-experience', label: 'Experience' },
  { href: '#freelance-experience', label: 'Freelance' },
  { href: '#projects', label: 'Projects' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Get in Touch', highlighted: true },
];

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-canvas text-ink antialiased font-sans selection:bg-primary selection:text-white">
        <main className="max-w-310 mx-auto bg-surface shadow-2xl md:border md:border-line/80 overflow-hidden relative">
          <Header
            fullname="Truong Nguyen"
            title="Full Stack Engineer"
            sign="CWT"
            navigationLinks={NAVIGATION_LINKS}
          />
          <AboutMe
            firstName={portfolio.profile.firstName}
            lastName={portfolio.profile.lastName}
            roles={[portfolio.profile.title, 'Cloud & Distributed Systems Architect']}
            introduction={portfolio.profile.introduction}
            awards={portfolio.highlight.awards.split(', ')}
            avatar={{
              src: portfolio.profile.avatar,
              alt: `${portfolio.profile.firstName} ${portfolio.profile.lastName} - ${portfolio.profile.title}`,
            }}
          />
          <Services services={portfolio.services} />
          <Experience skills={portfolio.companySkills} experiences={portfolio.companyExperiences} />
          <FreelanceExperience
            skills={portfolio.freelanceSkills}
            impact={portfolio.freelanceImpact}
          />
          <Projects
            projects={portfolio.projects}
            githubUrl={portfolio.socialLinks.github}
            contactEmail={portfolio.profile.email}
          />
          <Reviews reviews={portfolio.reviews} />

          <Footer
            email={portfolio.profile.email}
            phone={portfolio.profile.phone}
            github={portfolio.socialLinks.github}
            linkedin={portfolio.socialLinks.linkedin}
            youtube={portfolio.socialLinks.youtube}
          />
        </main>
      </div>
    </>
  );
}
