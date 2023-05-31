import { SocialIcon } from 'react-social-icons';
import * as motion from '@/lib/motion';

export default function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      {/* TODO: Make social icons dynamically generated */}
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.25 }}
        className='flex flex-row items-center'
      >
        {/* Social Icons */}
        <SocialIcon
          network='github'
          url='https://github.com/ReeceDonovan'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          network='github'
          url='https://github.com/ReeceDonovan'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          network='github'
          url='https://github.com/ReeceDonovan'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>

      {/* Contact Icons */}
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.25 }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'
      >
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          Contact Me
        </p>
      </motion.div>
    </header>
  );
}
