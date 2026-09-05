'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export type NavigationLink = {
  href: string;
  label: string;
  highlighted?: boolean;
};

type Props = {
  navigationLinks: NavigationLink[];
  fullname: string;
  title: string;
  sign?: string;
};

const Header = ({ fullname, title, sign, navigationLinks }: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md px-6 sm:px-10 lg:px-14 py-5 flex items-center justify-between border-b border-line/70">
        {/* Brand Logo & Name */}
        <Link href="#home" className="group flex items-center space-x-3" title={fullname}>
          {!!sign && (
            <div className="w-12 h-9 rounded-sm bg-ink text-white flex items-center justify-center font-playfair font-bold text-sm tracking-wider group-hover:bg-primary transition-colors shadow-sm">
              <span>{sign}</span>
            </div>
          )}

          <div className="flex flex-col">
            <span className="font-jakarta font-extrabold text-sm tracking-widest uppercase text-ink group-hover:text-primary transition-colors leading-none">
              {fullname}
            </span>
            <span className="text-[9px] font-fira tracking-wider text-muted uppercase mt-1">
              {title}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs font-jakarta font-bold tracking-wider uppercase text-muted">
          {navigationLinks.map(({ href, label, highlighted }) => (
            <Link
              key={href}
              href={href}
              className={
                highlighted
                  ? 'px-4 py-2 bg-primary text-white rounded-none hover:bg-primary-hover transition-colors tracking-widest shadow-sm'
                  : 'hover:text-primary transition-colors'
              }
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-ink hover:text-primary transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-b border-line px-6 py-5 flex flex-col space-y-4 text-xs font-jakarta font-bold uppercase tracking-wider text-ink animate-in slide-in-from-top-2 duration-200">
          {navigationLinks.map(({ href, label, highlighted }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className={
                highlighted
                  ? 'text-center py-2.5 bg-primary text-white hover:bg-primary-hover transition-colors'
                  : 'hover:text-primary py-1'
              }
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
