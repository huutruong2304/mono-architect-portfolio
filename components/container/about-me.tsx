import Image from 'next/image';

export type AboutMeProps = {
  firstName: string;
  lastName: string;
  roles: string[];
  introduction: string;
  awards: string[];
  avatar: {
    src: string;
    alt: string;
  };
};

const AboutMe = ({ firstName, lastName, roles, introduction, awards, avatar }: AboutMeProps) => {
  return (
    <section
      id="home"
      className="px-6 sm:px-10 lg:px-14 pt-10 sm:pt-14 pb-12 lg:pb-16 border-b border-line/80 relative scroll-mt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center" id="about">
        {/* Left Column: Heading & Role */}
        <div className="lg:col-span-7 flex flex-col justify-between z-10">
          <div className="mb-6 select-none">
            <h1 className="hero-title font-bebas uppercase tracking-tight font-bold text-ink flex flex-col">
              <span className="block">{firstName}</span>
              <span className="block -mt-1 sm:-mt-2">{lastName}</span>
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-primary font-jakarta text-xs sm:text-[13px] font-bold tracking-widest uppercase mb-6">
            {roles.map((role, index) => (
              <span key={role} className="contents">
                {index > 0 && <span className="text-muted">•</span>}
                <span>{role}</span>
              </span>
            ))}
          </div>

          <p className="text-muted text-base sm:text-lg max-w-lg font-normal leading-relaxed mb-8">
            {introduction}
          </p>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-0.75 bg-primary"></div>
            <div className="font-fira text-[11px] text-muted tracking-wider">
              {awards.join(' / ')}
            </div>
          </div>
        </div>

        {/* Right Column: Visual Portrait with Emerald Circle Backdrop */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center">
          <div className="relative w-72 h-80 sm:w-88 sm:h-96 md:w-95 md:h-107.5 flex items-center justify-center">
            <Image
              unoptimized
              src={avatar.src}
              alt={avatar.alt}
              className="relative z-10 w-auto h-full object-cover object-top grayscale contrast-125 brightness-95 filter drop-shadow-xl select-none pointer-events-none"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
              width={900}
              height={900}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
