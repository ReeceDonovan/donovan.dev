import * as motion from '@/lib/motion';
import { Skill } from '@/typings';

import SkillItem from './SkillItem';

type Props = {
  skills: Skill[];
};

export default function SkillSection({ skills }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-[calc(100dvh)] flex relative flex-col text-center items-center justify-center'
    >
      <h3 className='absolute top-20 md:top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl pl-3'>
        Skills
      </h3>
      <h3 className='absolute top-28 mt-1 md:top-36 uppercase tracking-[3px] text-gray-500 text-xs md:text-sm'>
        Hover over a skill for current experience level
      </h3>

      <div className='overflow-x-hidden h-[calc(100dvh*0.6)] w-[calc(100dvw-5rem)] md:w-[600px] xl:w-[900px] mt-12 py-5 md:p-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-primary/50'>
        <div
          aria-labelledby='skills'
          role='list'
          className='flex flex-row flex-wrap flex-shrink-0 justify-evenly items-center space-x-2 py-2 w-fit self-center'
        >
          {skills
            ?.sort((a, b) => b.progress - a.progress)
            .map((skill) => (
              <SkillItem key={skill._id} skill={skill} />
            ))}
        </div>
      </div>
    </motion.section>
  );
}
