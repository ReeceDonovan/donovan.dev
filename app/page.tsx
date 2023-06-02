import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import { Metadata } from 'next';

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
    </>
  );
}
