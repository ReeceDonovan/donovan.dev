'use client';

import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import { urlForImage } from '@/sanity/lib/image';
import { PageInfo } from '@/typings';

import BackgroundCircles from './BackgroundCircles';

type Props = {
  pageInfo: PageInfo;
};

export default function HeroSection({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `I'm ${pageInfo?.name ?? 'Me'}`,
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
    <div className='h-[calc(100dvh)] flex flex-col space-y-9 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        src={urlForImage(pageInfo?.heroImage).url()}
        alt={
          pageInfo?.name
            ? `${pageInfo.name}'s Profile Picture`
            : 'Profile Picture'
        }
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        width={128}
        height={128}
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-3 tracking-[10px] md:tracking-[15px]'>
          {pageInfo?.role ?? 'Software Developer'}
        </h2>
        <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold px-5'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F92E99' />
        </h1>

        <div className='pt-5'>
          <a href='#about'>
            <button className='heroButton'>About</button>
          </a>

          <a href='#experience'>
            <button className='heroButton'>Experience</button>
          </a>

          <a href='#skills'>
            <button className='heroButton'>Skills</button>
          </a>

          <a href='#projects'>
            <button className='heroButton'>Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
}
