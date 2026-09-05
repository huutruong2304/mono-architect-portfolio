'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type RevealDirection = 'up' | 'left' | 'right';

export type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  once?: boolean;
};

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
}: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      element.dataset.visible = 'true';
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.visible = 'true';
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          element.dataset.visible = 'false';
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -48px',
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal scroll-reveal-${direction} ${className}`}
      data-visible="false"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
