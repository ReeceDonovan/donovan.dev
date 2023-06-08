'use client';

import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import { urlForImage } from '@/sanity/lib/image';
import { PageInfo } from '@/typings';

import BackgroundCircles from './BackgroundCircles';

type Props = {
  info: PageInfo;
};

export default function HeroSection({ info }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `I'm ${info?.name ?? 'Me'}`,
      'Code Writer',
      'Photo Taker',
      'Content Consumer',
      'Caffeine Drinker',
      'Jack of All Trades',
      '...Master of None',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      role='complementary'
      className='h-[calc(100dvh)] flex flex-col space-y-9 items-center justify-center text-center overflow-hidden'
    >
      <BackgroundCircles />
      <Image
        src={urlForImage(info?.heroImage).url()}
        alt={info?.name ? `${info.name}'s Profile Picture` : 'Profile Picture'}
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        width={128}
        height={128}
        priority={true}
      />
      <div className='z-20'>
        <h2 className='text-sm md:text-base uppercase text-gray-500 pb-3 tracking-[10px] md:tracking-[15px]'>
          {info?.role ?? 'Software Developer'}
        </h2>
        <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold px-5'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F92E99' />
        </h1>

        <div className='pt-5'>
          <a href='#about' tabIndex={0} aria-label='About'>
            <button className='heroButton'>About Me</button>
          </a>

          <a href='#experience' tabIndex={0} aria-label='Experience'>
            <button className='heroButton'>Experience and Work</button>
          </a>

          <a href='#skills' tabIndex={0} aria-label='Skills'>
            <button className='heroButton'>My Skills</button>
          </a>

          <a href='#projects' tabIndex={0} aria-label='Projects'>
            <button className='heroButton'>My Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
}
