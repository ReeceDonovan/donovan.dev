'use client';

import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import BackgroundCircles from './BackgroundCircles';

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Reece Donovan",
      'Hobbyist Photographer',
      'Caffeine Worshipper',
      'Jack of All Trades',
      '...Master of None',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      {/* TODO: Replace GitHub Avatar with a proper photo */}
      <Image
        src='https://avatars.githubusercontent.com/u/42524740?v=4'
        alt='Reece Donovan - GitHub Avatar'
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        width={128}
        height={128}
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Software Engineer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
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
