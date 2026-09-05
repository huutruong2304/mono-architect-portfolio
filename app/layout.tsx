import type { Metadata } from 'next';
import {
  Bebas_Neue,
  Fira_Code,
  Inter,
  Playfair_Display,
  Plus_Jakarta_Sans,
} from 'next/font/google';
import ScrollToTopButton from '@/components/shared/scroll-to-top-button';
import ToastProvider from '@/components/shared/toast-provider';
import './globals.css';

const bebasNeue = Bebas_Neue({
  variable: '--font-bebas-neue',
  weight: '400',
  subsets: ['latin'],
});

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter-family',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin', 'vietnamese'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin', 'vietnamese'],
});

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'vietnamese'],
});

export const metadata: Metadata = {
  title: 'Mono Architect Portfolio',
  description: 'Mono Architect Portfolio',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${firaCode.variable} ${inter.variable} ${plusJakartaSans.variable} ${playfairDisplay.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ScrollToTopButton />
        <ToastProvider />
      </body>
    </html>
  );
}
