'use client';

import {
  Mail,
  GitBranch,
  BriefcaseBusiness,
  Video,
  Phone,
  ExternalLink,
  type LucideIcon,
} from 'lucide-react';
import toast from 'react-hot-toast';
import ContactForm from '../container/contact-form';
import SectionTitle from '../shared/section-title';

type Props = {
  email: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  youtube?: string;
};

const Footer = ({ email, github, linkedin, youtube, phone }: Props) => {
  const contactItems: {
    label: string;
    value?: string;
    href?: string;
    icon: LucideIcon;
    copy?: boolean;
    external?: boolean;
  }[] = [
    { label: 'Email', value: email, href: `mailto:${email}`, icon: Mail, copy: true },
    { label: 'GitHub', value: github, href: github, icon: GitBranch, external: true },
    {
      label: 'LinkedIn',
      value: linkedin,
      href: linkedin,
      icon: BriefcaseBusiness,
      external: true,
    },
    { label: 'YouTube', value: youtube, href: youtube, icon: Video, external: true },
    { label: 'Phone', value: phone, href: `tel:${phone}`, icon: Phone },
  ];

  const handleCopyEmail = (email: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email);
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = email;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      textArea.remove();
    }
    toast.success('Email address copied to clipboard!');
  };

  return (
    <footer id="contact" className="px-6 sm:px-10 lg:px-14 py-12 lg:py-16 bg-white/40 scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Direct Links & Copy Helpers */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <SectionTitle
              title="Let's Build Together"
              subtitle="Start an Initiative"
              border={false}
            />

            <div className="w-10 h-0.5 bg-primary my-4" />
            <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
              Whether you need to scale high-concurrency cloud infrastructure, build a full-stack
              web platform, or consult on software architecture, feel free to drop a message.
            </p>
          </div>

          <div className="space-y-4 pt-2 text-xs">
            {contactItems.map(
              ({ label, value, href, icon: Icon, copy, external }) =>
                !!value && (
                  <div key={label} className="flex items-start space-x-3 group">
                    <div className="p-2 rounded-sm bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-jakarta font-bold uppercase tracking-widest text-muted">
                        {label}
                      </div>
                      {copy ? (
                        <button
                          type="button"
                          onClick={() => handleCopyEmail(value)}
                          className="text-left text-ink font-fira text-[11px] font-medium group-hover:text-primary transition-colors cursor-pointer"
                        >
                          {value}
                        </button>
                      ) : (
                        <a
                          href={href}
                          target={external ? '_blank' : undefined}
                          rel={external ? 'noreferrer' : undefined}
                          className="text-ink font-fira text-[11px] font-medium group-hover:text-primary transition-colors inline-flex items-center"
                        >
                          {value.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                          {external && <ExternalLink className="w-3 h-3 ml-1" />}
                        </a>
                      )}
                    </div>
                  </div>
                ),
            )}
          </div>
        </div>

        {/* Right Column: Interactive Inquiry Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-line/60   text-sm font-fira text-muted">
        <div>© 2026 Truong Nguyen. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
