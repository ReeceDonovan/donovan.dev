import { Metadata } from 'next';
import { groq } from 'next-sanity';

import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import ExperienceSection from '@/components/ExperienceSection';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectSection from '@/components/ProjectSection';
import SkillSection from '@/components/SkillSection';
import { sanityClient } from '@/sanity/lib/client';
import { Experience, PageInfo, Project, Skill, Social } from '@/typings';
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';

const metadataValues = {
  title: 'Reece Donovan - Software Engineer & Computer Science Graduate',
  description:
    "Explore Reece Donovan's portfolio: a Computer Science graduate from University College Cork with software engineering experience at HubSpot. Check out his projects, learn about his experiences, and get insights into his journey in the tech industry.",
  keywords:
    'Reece Donovan, Reece, Donovan, Computer Science, CK401, UCC, University College Cork, Cork City, County Cork, Cork, Corcaigh, Ireland, Republic of Ireland, Eire, HubSpot, Software Engineering, Software, Engineer, Portfolio, Software Development, Software, Developer, Next.js, TypeScript, TailwindCSS, Sanity.io, Vercel, Photographer, reecedonovan99, 1999',
  author: 'Reece Donovan',
  image:
    'https://cdn.sanity.io/images/jjbf7m3u/production/c2fc5a4719c5fa6aa2f524717d602b06465eb2e9-1873x2498.jpg',
  url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  site_name: "Reece Donovan's Portfolio",
};

export const metadata: Metadata = {
  title: metadataValues.title,
  description: metadataValues.description,
  authors: [{ name: 'Reece Donovan', url: 'https://github.com/ReeceDonovan/' }],
  keywords: metadataValues.keywords,
  colorScheme: 'dark',
  // Open Graph protocol metadata
  openGraph: {
    title: metadataValues.title,
    description: metadataValues.description,
    url: metadataValues.url,
    siteName: metadataValues.site_name,
    type: 'website',
    locale: 'en_IE',
  },
};

export default async function Home() {
  const experienceQuery = groq`*[_type == "experience"] | order(dateEnded desc, isCurrentPosition desc) {..., technologies[]->}`;
  const pageInfoQuery = groq`*[_type == "pageInfo"][0]`;
  const projectsQuery = groq`*[_type == "project"] {..., technologies[]->}`;
  const skillsQuery = groq`*[_type == "skill"]`;
  const socialsQuery = groq`*[_type == "social"]`;

  const experiences: Experience[] = await sanityClient.fetch(experienceQuery);

  const pageInfo: PageInfo = await sanityClient.fetch(pageInfoQuery);

  const projects: Project[] = await sanityClient.fetch(projectsQuery);

  const skills: Skill[] = await sanityClient.fetch(skillsQuery);

  const socials: Social[] = await sanityClient.fetch(socialsQuery);

  return (
    <main
      role='main'
      className='h-[calc(100dvh)] snap-y snap-mandatory z-0 overflow-x-hidden overflow-y-scroll scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary/60'
    >
      <Header socials={socials} />

      <section id='hero' className='snap-start'>
        <HeroSection info={pageInfo} />
      </section>

      <section id='about' className='snap-center'>
        <AboutSection info={pageInfo} />
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
        <ContactSection info={pageInfo} />
      </section>

      <a href='#hero' tabIndex={0} aria-label='Back to top'>
        <footer className='sticky bottom-0 w-full'>
          <div className='flex items-center justify-center h-12'>
            <ArrowUpCircleIcon
              className='h-10 w-10 text-gray-500 hover:text-gray-700'
              aria-label='Arrow pointing up'
            />
          </div>
        </footer>
      </a>
    </main>
  );
}
