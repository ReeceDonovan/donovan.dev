import Image from 'next/image';

import { urlForImage } from '@/sanity/lib/image';
import { Skill } from '@/typings';

interface SkillProps {
  skill: Skill;
}

export default function SkillItem({ skill }: SkillProps) {
  return (
    <div className='group relative flex cursor-pointer w-fit'>
      <Image
        src={urlForImage(skill?.image).size(256, 256).fit('min').pad(10).url()}
        alt={skill?.title ? `${skill.title} Logo` : 'Logo'}
        width={128}
        height={128}
        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out '
      />

      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 max-h-full max-w-full'>
        <div className='flex items-center justify-center h-full w-full'>
          <p className='text-3xl font-bold text-black opacity-100 min-w-24'>
            {skill?.progress ?? '0'}%
          </p>
        </div>
      </div>
    </div>
  );
}
