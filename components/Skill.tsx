import * as motion from '@/lib/motion';

interface SkillProps {
  // Determines if the skill should animate from the left or right.
  // If true, it animates from left. If false or undefined, it animates from right.
  directionLeft?: boolean;
}

export default function Skill({ directionLeft }: SkillProps) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        /* TODO: Replace external image URL with self-hosted image URL */
        src='https://cdn.worldvectorlogo.com/logos/typescript.svg'
        alt='TypeScript Logo'
        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
      />

      <motion.div
        initial={{ x: directionLeft ? -200 : 200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'
      >
        <div className='flex items-center justify-center h-full'>
          {/* TODO: Populate with real dynamic data */}
          <p className='text-3xl font-bold text-black opacity-100'>100%</p>
        </div>
      </motion.div>
    </div>
  );
}
