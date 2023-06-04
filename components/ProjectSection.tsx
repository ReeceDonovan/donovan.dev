import Image from 'next/image';

import * as motion from '@/lib/motion';
import { urlForImage } from '@/sanity/lib/image';
import { Project } from '@/typings';

type Props = {
  projects: Project[];
};

export default function ProjectSection({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-primary/70'>
        {projects?.map((project, idx) => (
          <div
            key={project?._id}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.25 }}
              viewport={{ once: true }}
              src={urlForImage(project?.image).url()}
              alt={project?.title ? `${project.title} Image` : 'Project Image'}
            />

            <div className=' space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-primary/50'>
                  Project {idx + 1} of {projects.length}:
                </span>{' '}
                {project?.title ?? 'Project Title'}
              </h4>

              <div className='flex items-center space-x-2 justify-center'>
                {project?.technologies?.map((tech) => (
                  <Image
                    key={tech._id}
                    width={40}
                    height={40}
                    className='h-10 w-10 rounded-full'
                    src={urlForImage(tech?.image).url() ?? ''}
                    alt={tech?.title ? `${tech.title} Logo` : 'Technology Logo'}
                  />
                ))}
              </div>

              <p className='text-lg text-center md:text-left'>
                {project?.summary ?? 'Nothing to see here...'}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-primary/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  );
}
