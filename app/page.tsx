import { Metadata } from 'next';
import { groq } from 'next-sanity';

import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import { client } from '@/sanity/lib/client';
import { Experience, PageInfo, Project, Skill, Social } from '@/typings';
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: "Reece Donovan's Portfolio",
  description: 'A software development portfolio for Reece Donovan.',
};

/* TODO: Rename the homepage section components.e.g. "Hero.tsx" -> "HeroSection.tsx" */
export default async function Home() {
  const experienceQuery = groq`*[_type == "experience"] {..., technologies[]->}`;
  const pageInfoQuery = groq`*[_type == "pageInfo"][0]`;
  const projectsQuery = groq`*[_type == "project"] {..., technologies[]->}`;
  const skillsQuery = groq`*[_type == "skill"]`;
  const socialsQuery = groq`*[_type == "social"]`;

  const experiences: Experience[] = await client.fetch(experienceQuery);

  const pageInfo: PageInfo = await client.fetch(pageInfoQuery);

  const projects: Project[] = await client.fetch(projectsQuery);

  const skills: Skill[] = await client.fetch(skillsQuery);

  const socials: Social[] = await client.fetch(socialsQuery);

  return (
    <div className='h-screen snap-y snap-mandatory z-0 overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/70'>
      <Header socials={socials} />
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      <section id='skills' className='snap-start'>
        <Skills skills={skills} />
      </section>

      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
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
    </div>
  );
}
