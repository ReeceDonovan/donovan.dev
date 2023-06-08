import ContactForm from './ContactForm';
import { PageInfo } from '@/typings';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';

type Props = {
  info: PageInfo;
};

export default function ContactSection({ info }: Props) {
  return (
    <div className='h-[calc(100dvh)] relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 md:top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl pl-3'>
        Contact
      </h3>

      <div className='flex flex-col space-y-9 max-w-[calc(100dvw-5rem)] mt-16 '>
        <h4 className='text-xl md:text-4xl font-semibold text-center mx-auto md:w-4/5'>
          I&apos;m always up for a chat, whether it be about a new project or
          just to say hi.
          <br />
          <span className='underline decoration-primary/50'>Lets Talk.</span>
        </h4>

        <div className='space-y-4'>
          <div className='flex items-center space-x-5 justify-center -ml-4'>
            <EnvelopeIcon className='text-primary h-7 w-7 animate-pulse flex-initial' />
            <p className='text-base md:text-2xl'>{info?.email}</p>
          </div>

          <div className='flex items-center space-x-5 justify-center -ml-4'>
            <MapPinIcon className='text-primary h-7 w-7 animate-pulse flex-initial' />
            <p className='text-base md:text-2xl'>{info?.address}</p>
          </div>
        </div>

        <ContactForm contactEmail={info?.email} />
      </div>
    </div>
  );
}
