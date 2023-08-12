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
    <html lang='en'>
      <body className={`${inter.className} bg-dark text-text tracking-wide flex-col flex h-screen w-screen`}>
        <header className='bg-header'>
          <HeaderNavigation />
        </header>
        {children}
        <footer className='h-32'></footer>
      </body>
    </html>
  );
}
