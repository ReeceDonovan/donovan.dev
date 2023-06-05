import { Metadata } from 'next';
import { groq } from 'next-sanity';

import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectSection from '@/components/ProjectSection';
import SkillSection from '@/components/SkillSection';
import ExperienceSection from '@/components/ExperienceSection';
import { client } from '@/sanity/lib/client';
import { Experience, PageInfo, Project, Skill, Social } from '@/typings';
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: "Reece Donovan's Portfolio",
  description: 'A software development portfolio for Reece Donovan.',
};

export default async function Home() {
  const experienceQuery = groq`*[_type == "experience"] | order(dateEnded desc, isCurrentPosition desc) {..., technologies[]->}`;
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
    <main className='h-[calc(100dvh)] snap-y snap-mandatory z-0 overflow-x-hidden overflow-y-scroll scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary/70'>
      <Header socials={socials} />
      <section id='hero' className='snap-start'>
        <HeroSection pageInfo={pageInfo} />
      </section>

      <section id='about' className='snap-center'>
        <AboutSection pageInfo={pageInfo} />
      </section>

      <section id='experience' className='snap-center'>
        <ExperienceSection experiences={experiences} />
      </section>

      <section id='skills' className='snap-start'>
        <SkillSection skills={skills} />
      </section>

      <section id='projects' className='snap-start'>
        <ProjectSection projects={projects} />
      </section>

      <section id='contact' className='snap-start'>
        <ContactSection pageInfo={pageInfo} />
      </section>

      <a href='#hero'>
        <footer className='sticky bottom-0 w-full'>
          <div className='flex items-center justify-center h-12'>
            <ArrowUpCircleIcon className='h-10 w-10 text-gray-500 hover:text-gray-700' />
          </div>
        </footer>
      </a>
    </main>
  );
}
