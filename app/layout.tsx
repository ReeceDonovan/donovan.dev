import './globals.css';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Reece Donovan',
  description: 'A personal website for Reece Donovan.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='absolute inset-0'>{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
