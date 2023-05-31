import { SocialIcon } from 'react-social-icons';

export default function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      {/* TODO: Make social icons dynamically generated */}

      <div className='flex flex-row items-center'>
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
      </div>

      {/* Contact Icons */}
      <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          Contact Me
        </p>
      </div>
    </header>
  );
}
