import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import HeaderNavigation from '@components/nav/HeaderNavigation';

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
    <html data-theme='dark' lang='en' className='bg-dark'>
      <body className={`${inter.className} text-text tracking-wide flex-col flex w-full h-screen`}>
        <header className='bg-header'>
          <HeaderNavigation />
        </header>
        {children}
        <footer className='h-32'/>
      </body>
    </html>
  );
}
