import { Metadata } from 'next';

import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: "Reece Donovan's Portfolio",
  description: 'A software development portfolio for Reece Donovan.',
};

/* TODO: Rename the homepage section components.e.g. "Hero.tsx" -> "HeroSection.tsx" */
export default function Home() {
  return (
    <>
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      {/* TODO: Rename the "ContactMe" component */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <a href='#hero'>
        <footer className='sticky bottom-0 w-full'>
          <div className='flex items-center justify-center h-14'>
            <ArrowUpCircleIcon className='h-10 w-10 text-gray-500 hover:text-gray-700' />
          </div>
        </footer>
      </a>
    </>
  );
}
