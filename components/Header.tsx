import { SocialIcon } from 'react-social-icons';

import * as motion from '@/lib/motion';
import { Social } from '@/typings';

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.25 }}
        className='flex flex-row items-center'
      >
        {/* Social Icons */}
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor='gray'
            bgColor='transparent'
          />
        ))}
      </motion.div>

      {/* Contact Icon */}
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.25 }}
        className='flex flex-row items-center text-gray-300 cursor-default'
      >
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
          url='#contact'
        />
        <a href='#contact'>
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
            Contact Me
          </p>
        </a>
      </motion.div>
    </header>
  );
}
