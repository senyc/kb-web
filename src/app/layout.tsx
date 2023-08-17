import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import HeaderNavigation from '@components/header/HeaderNavigation';

import './globals.css';

const inter = Inter({
  weight: ['300', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Kyler Bomhof',
  description: 'My website',
  keywords: ['Kyler Bomhof', 'senyc']
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html data-theme='dark' lang='en' className='bg-dark h-full'>
      <body className={`${inter.className} text-text tracking-wide flex-col flex w-full h-full`}>
        <header className='bg-header'>
          <HeaderNavigation />
        </header>
        <main className='flex-grow'>
          {children}
        </main>
        <footer className='h-32 min-h-[8rem]' />
      </body>
    </html>
  );
}
