import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import HeaderNavigation from '@components/header/HeaderNavigation';
import './globals.css';

const inter = Inter({
  weight: ['300', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Kyler Bomhof',
  description: 'Kyler is passionate about software architecture and constructing applications such that they are testable, and actually tested.',
  keywords: ['Kyler Bomhof', 'senyc', 'full-stack']
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang='en' data-theme='dark' className='dark h-full'>
      <body className={`${inter.className} bg-white dark:bg-dark-bg text-light-text dark:text-dark-text tracking-wide flex-col flex w-full h-full`}>
        <header className='bg-light-header dark:bg-dark-header'>
          <HeaderNavigation />
        </header>
        <main className='dark:text-dark-text flex-grow'>
          {children}
          <Analytics />
        </main>
        <footer className='h-32 min-h-[8rem]' />
      </body>
    </html>
  );
}
