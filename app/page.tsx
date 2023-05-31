import About from '@/components/About';
import Hero from '@/components/Hero';
import WorkExperience from '@/components/WorkExperience';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Reece Donovan's Portfolio",
  description: 'A software development portfolio for Reece Donovan.',
};

export default function Home() {
  return (
    <div className='h-screen'>
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>
    </div>
  );
}
