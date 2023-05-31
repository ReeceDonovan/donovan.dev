import Header from '@/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
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
        <div className='h-screen snap-y snap-mandatory z-0 overflow-y-scroll'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
