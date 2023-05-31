import * as motion from '@/lib/motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      {/* TODO: Replace Discord avatar with a proper photo */}
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.25 }}
        viewport={{ once: true }}
        src='https://cdn.discordapp.com/avatars/342150581554774018/ba118fcf51115a132accb1c66cdbfa1f.png?size=4096'
        alt='Reece Donovan - Discord Avatar'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a{' '}
          <span className='underline decoration-[#F7AB0A]/50'>little</span>{' '}
          background:
        </h4>

        {/* TODO: Replace with real introduction */}
        <p className='text-base'>
          Voluptate deserunt fugiat quis ex eiusmod aliquip nulla aute laborum
          cupidatat nostrud. Anim laboris adipisicing mollit adipisicing elit
          duis sunt aute duis. Irure consequat laboris esse tempor enim officia
          proident commodo anim. Lorem reprehenderit ea ut dolor. Sint occaecat
          nulla culpa et culpa deserunt laborum ex velit tempor cupidatat
          deserunt anim minim. Occaecat anim id commodo magna cupidatat anim
          velit officia duis do dolore. Voluptate occaecat dolor amet qui culpa
          officia ullamco exercitation tempor cupidatat proident incididunt.
          Ullamco dolor labore voluptate aliqua eiusmod amet do veniam labore
          nulla. Laborum occaecat dolore qui irure laboris commodo sunt
          voluptate consectetur irure exercitation proident sit cillum.
          Exercitation ullamco in non mollit veniam sit nulla velit aliquip
          veniam laboris in consequat ad. Ea aliquip ex et id eiusmod nostrud
          voluptate. Sint ex aute consectetur dolor duis sint ad do incididunt
          amet velit exercitation amet eu. Voluptate ullamco nulla amet labore
          et adipisicing do. Aute sint non qui sunt laboris laboris et velit
          incididunt eiusmod. Eiusmod ex ea enim in qui magna eiusmod
          adipisicing ea in ullamco culpa. Aute nostrud velit dolor consequat
          qui commodo et proident irure eiusmod laboris nisi tempor. Laborum
          labore pariatur consectetur enim. Do deserunt Lorem labore veniam sunt
          aliqua consectetur ut.
        </p>
      </div>
    </motion.div>
  );
}
