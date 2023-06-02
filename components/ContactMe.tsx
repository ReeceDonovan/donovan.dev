import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

export default function ContactMe() {
  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I&apos;m always up for a chat, whether it be about a new project or
          just to say hi.{' '}
          <span className='underline decoration-[#F7AB0A]/50'>Lets Talk.</span>
        </h4>

        {/* TODO: Populate with real contact info */}
        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            {/* TODO: Remove dummy phone number */}
            <p className='text-2xl'>+1234567890</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            {/* TODO: Remove dummy email address */}
            <p className='text-2xl'>johndoe@gmail.com</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            {/* TODO: Remove dummy address */}
            <p className='text-2xl'>1234 Main St, City, State 12345</p>
          </div>
        </div>
        {/* TODO: Create a form */}
      </div>
    </div>
  );
}
