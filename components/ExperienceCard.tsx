import Image from 'next/image';

import * as motion from '@/lib/motion';
import { urlForImage } from '@/sanity/lib/image';
import { Experience } from '@/typings';

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[calc(100dvw-5rem)] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25 }}
        viewport={{ once: true }}
        className='w-28 h-28 md:w-32 md:h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center -mb-3 md:mb-0 -mt-5 md:mt-0'
        src={urlForImage(experience?.companyImage).url() ?? ''}
        alt={
          experience?.company ? `${experience.company} Logo` : 'Company Logo'
        }
      />

      <div className='px-0 md:px-10 text-center md:text-left'>
        <h4 className='text-xl md:text-4xl font-light'>
          {experience?.jobTitle}
        </h4>
        <p className='font-bold text-base md:text-2xl mt-1'>
          {experience?.company}
        </p>

        <p className='uppercase py-3 md:py-5 text-gray-300 hover:text-primary/60 transition-all duration-300 text-base'>
          {new Date(experience?.dateStarted).toLocaleDateString('en-IE')} -{' '}
          {experience.isCurrentPosition
            ? 'Present'
            : new Date(experience?.dateEnded).toLocaleDateString('en-IE')}
        </p>

        <div className='flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4 mb-2'>
          {experience?.technologies?.map((tech) => (
            <Image
              key={tech._id}
              width={40}
              height={40}
              className='h-7 w-7 md:h-10 md:w-10 rounded-full p-0.5'
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
