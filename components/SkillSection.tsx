import * as motion from '@/lib/motion';
import { Skill } from '@/typings';

import SkillItem from './SkillItem';

type Props = {
  skills: Skill[];
};

export default function SkillSection({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-[calc(100dvh)] justify-center xl:space-y-0 mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill for current experience level
      </h3>

      <div className='grid grid-cols-4 gap-5 px-2'>
        {skills
          ?.sort((a, b) => b.progress - a.progress)
          .map((skill) => (
            <SkillItem key={skill._id} skill={skill} />
          ))}
      </div>
    </motion.div>
  );
}
