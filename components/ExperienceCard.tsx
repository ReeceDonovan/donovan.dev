import Image from 'next/image';

import * as motion from '@/lib/motion';
import { urlForImage } from '@/sanity/lib/image';
import { Experience } from '@/typings';

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src={urlForImage(experience?.companyImage).url() ?? ''}
        alt={
          experience?.company ? `${experience.company} Logo` : 'Company Logo'
        }
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
        <p className='font-bold text-2xl mt-1'>{experience?.company}</p>

        <div className='flex space-x-2 my-2'>
          {experience?.technologies?.map((tech) => (
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

        <p className='uppercase py-5 text-gray-300'>
          {new Date(experience?.dateStarted).toLocaleDateString('en-IE')} -{' '}
          {experience.isCurrentPosition
            ? 'Present'
            : new Date(experience?.dateEnded).toLocaleDateString('en-IE')}
        </p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          {experience?.points?.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
