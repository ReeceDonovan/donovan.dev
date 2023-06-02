import * as motion from '@/lib/motion';
import { urlForImage } from '@/sanity/lib/image';
import { Skill } from '@/typings';

interface SkillProps {
  // Determines if the skill should animate from the left or right.
  // If true, it animates from left. If false or undefined, it animates from right.
  directionLeft?: boolean;
  skill: Skill;
}

export default function SkillItem({ directionLeft, skill }: SkillProps) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        src={urlForImage(skill?.image).url()}
        alt={skill?.title ? `${skill.title} Logo` : 'Logo'}
        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
      />

      <motion.div
        initial={{ x: directionLeft ? -200 : 200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'
      >
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>
            {skill?.progress ?? '0'}%
          </p>
        </div>
      </motion.div>
    </div>
  );
}
