import * as motion from '@/lib/motion';
import { Experience } from '@/typings';

import ExperienceCard from './ExperienceCard';

type Props = {
  experiences: Experience[];
};

export default function ExperienceSection({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-[calc(100dvh)] flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-20 md:top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl pl-3'>
        <span className='sr-only'>Section Title:</span>
        Experience
      </h3>

      <div
        className='w-full flex space-x-5 overflow-x-scroll p-5 pt-16 md:p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-primary/50 h-[calc(100dvh-7rem)] md:h-fit'
        role='list'
        tabIndex={0}
        aria-label='List of experiences'
      >
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
