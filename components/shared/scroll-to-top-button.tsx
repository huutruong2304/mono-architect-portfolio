'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 320);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={[
        'fixed right-5 bottom-5 sm:right-8 sm:bottom-8 z-50',
        'w-11 h-11 rounded-none',
        'bg-ink text-white border border-line/80 shadow-lg',
        'flex items-center justify-center',
        'transition-all duration-300 motion-reduce:transition-none',
        'hover:bg-primary hover:border-primary hover:-translate-y-0.5',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-3 pointer-events-none',
      ].join(' ')}
    >
      <ArrowUp className="w-4 h-4 stroke-2" aria-hidden="true" />
    </button>
  );
};

export default ScrollToTopButton;
