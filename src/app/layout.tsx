import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
      <body className={`${inter.className} bg-dark text-text tracking-wide w-screen flex flex-row items-center h-screen justify-center`}>
        {children}
      </body>
    </html>
  );
}
