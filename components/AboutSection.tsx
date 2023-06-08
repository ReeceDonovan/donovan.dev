import * as motion from '@/lib/motion';
import { urlForImage } from '@/sanity/lib/image';
import { PageInfo } from '@/typings';

type Props = {
  info: PageInfo;
};

export default function AboutSection({ info }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      role='region'
      aria-label='About Section'
      className='flex flex-col relative h-[calc(100dvh)] text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h2 className='absolute top-20 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl pl-3'>
        About
      </h2>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.25 }}
        viewport={{ once: true }}
        src={urlForImage(info?.profilePicture).url()}
        alt={info?.name ? `${info.name}'s Headshot` : 'Headshot'}
        className='-mb-20 md:mb-0 mt-16 md:mt-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
      />

      <div className='space-y-9 px-0 md:px-10'>
        <h3 className='text-3xl md:text-4xl font-semibold'>
          Here is a{' '}
          <span className='underline decoration-primary/50'>little</span>{' '}
          background:
        </h3>

        <p className='text-sm md:text-base xl:text-lg'>
          {info?.backgroundInformation ?? 'Nothing to see here...'}
        </p>
      </div>
    </motion.div>
  );
}
