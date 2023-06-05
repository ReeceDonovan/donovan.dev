import Image from 'next/image';

import * as motion from '@/lib/motion';
import { urlForImage } from '@/sanity/lib/image';
import { Project } from '@/typings';
import React from 'react';

type Props = {
  projects: Project[];
};

export default function ProjectSection({ projects }: Props) {
  if (!projects || projects.length === 0)
    return (
      <div
        role='contentinfo'
        aria-label='No projects'
        className='h-[calc(100dvh)] relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
      >
        <h3 className='absolute top-20 md:top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl'>
          Projects
        </h3>
        <h4 className='text-4xl font-semibold text-center'>
          <span className='underline decoration-primary/50 text-coolGray-400'>
            No projects to display
          </span>
        </h4>
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-[calc(100dvh)] relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div
        role='contentinfo'
        aria-label='Projects list'
        className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-primary/70'
      >
        {projects.map((project, idx) => {
          const projectTitle = project?.title ?? 'Project Title';
          const projectImage = urlForImage(project?.image).url();
          const projectImageAltText = project?.title
            ? `${project.title} Image`
            : 'Project Image';
          const projectSummary = project?.summary ?? 'Nothing to see here...';

          return (
            <React.Fragment key={project?._id}>
              <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                <motion.img
                  initial={{ y: -300, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.25 }}
                  viewport={{ once: true }}
                  src={projectImage}
                  alt={projectImageAltText}
                />

                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                  <h4 className='text-4xl font-semibold text-center'>
                    <span className='underline decoration-primary/50'>
                      Project {idx + 1} of {projects.length}:
                    </span>{' '}
                    {projectTitle}
                  </h4>

                  <div className='flex items-center space-x-2 justify-center'>
                    {project?.technologies?.map((tech) => {
                      const techLogoUrl = urlForImage(tech?.image).url() ?? '';
                      const techLogoAltText = tech?.title
                        ? `${tech.title} Logo`
                        : 'Technology Logo';

                      return (
                        <Image
                          key={tech._id}
                          width={40}
                          height={40}
                          className='h-10 w-10 rounded-full'
                          src={techLogoUrl}
                          alt={techLogoAltText}
                        />
                      );
                    })}
                  </div>

                  <p className='text-lg text-center md:text-left'>
                    {projectSummary}
                  </p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className='w-full absolute top-[30%] bg-primary/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  );
}
