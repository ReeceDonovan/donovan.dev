import * as motion from '@/lib/motion';

import Image from 'next/image';

// HubSpot logo: https://yt3.googleusercontent.com/-83g-66tjP6_ZN8OUE6Pacd7jRNi2kKOy5IImrqMXWXtxOHrLdkVVvBe1ZWLjQbDl4XTpsuuhJ4=s0
// UCC logo: https://www.ucc.ie/en/media/discoverucc/timeline/8HeraldicCrest.jpg

export default function ExperienceCard() {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      {/* TODO: Refactor motion.img to utilize NextJS Image features */}
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        /* TODO: Replace HubSpot logo image URL with self-hosted URL */
        src='https://yt3.googleusercontent.com/-83g-66tjP6_ZN8OUE6Pacd7jRNi2kKOy5IImrqMXWXtxOHrLdkVVvBe1ZWLjQbDl4XTpsuuhJ4=s0'
        alt='HubSpot logo'
      />

      {/* TODO: Populate with dynamic data */}
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Software Engineer</h4>
        <p className='font-bold text-2xl mt-1'>HubSpot</p>

        <div className='flex space-x-2 my-2'>
          {/* TODO: Replace "Tech used" */}
          <Image
            width={40}
            height={40}
            className='h-10 w-10 rounded-full'
            src='https://cdn.worldvectorlogo.com/logos/next-js.svg'
            alt='NextJS logo'
          />

          {/* TODO: Replace "Tech used" */}
          <Image
            width={40}
            height={40}
            className='h-10 w-10 rounded-full'
            alt='TypeScript logo'
            src='https://cdn.worldvectorlogo.com/logos/typescript.svg'
          />

          {/* TODO: Replace "Tech used" */}
          <Image
            width={40}
            height={40}
            className='h-10 w-10 rounded-full'
            src='https://cdn.worldvectorlogo.com/logos/react-2.svg'
            alt='React logo'
          />
        </div>

        <p className='uppercase py-5 text-gray-300'>Started... - Ended...</p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          {/* TODO: Replace with dynamic data */}
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}
