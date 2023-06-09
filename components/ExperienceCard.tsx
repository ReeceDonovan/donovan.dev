import Image from 'next/image';

import * as motion from '@/lib/motion';
import { urlForImage } from '@/sanity/lib/image';
import { Experience } from '@/typings';

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article
      aria-label='Experience Card'
      className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[calc(100dvw-5rem)] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'
    >
      <figure>
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.25 }}
          viewport={{ once: true }}
          className='w-28 h-28 md:w-32 md:h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center -mb-3 md:mb-0 -mt-5 md:mt-0'
          src={urlForImage(experience?.companyImage).url() ?? ''}
          alt={
            experience?.company
              ? `${experience.company} Company Logo`
              : 'Company Logo'
          }
        />
        <figcaption className='sr-only'>{experience?.company} Logo</figcaption>
      </figure>

      <div className='px-0 md:px-10 text-center md:text-left'>
        <h4 className='text-xl md:text-4xl font-light'>
          {experience?.jobTitle}
        </h4>
        <p className='font-bold text-base md:text-2xl mt-1'>
          {experience?.company}
        </p>

        <p className='uppercase py-3 md:py-5 text-gray-300 hover:text-primary/60 transition-all duration-300 text-base'>
          <time dateTime={experience?.dateStarted}>
            {new Date(experience?.dateStarted).toLocaleDateString('en-IE')}
          </time>{' '}
          -{' '}
          {experience.isCurrentPosition ? (
            'Present'
          ) : (
            <time dateTime={experience?.dateEnded}>
              {new Date(experience?.dateEnded).toLocaleDateString('en-IE')}
            </time>
          )}
        </p>

        <div className='flex flex-wrap justify-center md:justify-start mb-2'>
          {experience?.technologies?.map((tech) => (
            <Image
              key={tech._id}
              width={40}
              height={40}
              className='h-8 w-8 md:h-11 md:w-11 rounded-full p-0.5 mr-2 md:mr-4 mb-1'
              src={
                urlForImage(tech?.image)
                  .size(128, 128)
                  .fit('min')
                  .quality(3)
                  .blur(10)
                  .url() ?? ''
              }
              alt={tech?.title ? `${tech.title} Logo` : 'Technology Logo'}
            />
          ))}
        </div>

        <ul className='list-disc space-y-2 md:space-y-4 ml-5 text-base md:text-lg text-left mt-5'>
          {experience?.points?.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
