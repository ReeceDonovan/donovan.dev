import Image from 'next/image';

import { urlForImage } from '@/sanity/lib/image';
import { Skill } from '@/typings';

interface SkillProps {
  skill: Skill;
}

export default function SkillItem({ skill }: SkillProps) {
  const progress = skill?.progress ?? 0;
  const skillLogoAltText = skill?.title ? `${skill.title} Logo` : 'Logo';
  const skillLogoUrl = urlForImage(skill?.image)
    .size(256, 256)
    .fit('min')
    .pad(10)
    .url();

  return (
    <figure className='group relative flex cursor-pointer w-fit'>
      <Image
        src={skillLogoUrl}
        alt={skillLogoAltText}
        width={256}
        height={256}
        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-32 md:h-32 xl:w-40 xl:h-40 filter group-hover:grayscale transition duration-300 ease-in-out my-2'
      />

      <figcaption className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-32 md:h-32 xl:w-40 xl:h-40 rounded-full z-0 max-h-full max-w-full my-2'>
        <div className='flex items-center justify-center h-full w-full'>
          <p className='text-3xl font-bold text-black opacity-100 min-w-24'>
            {progress}%
          </p>
          <span className='sr-only'>
            {skill?.title} skill level is {progress} percent
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
