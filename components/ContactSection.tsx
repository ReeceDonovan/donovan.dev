'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { PageInfo } from '@/typings';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

export default function ContactSection({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const emailBody = `${
      formData.name ? `Hi, my name is ${formData.name}. ` : ''
    }${formData.message} (Sent from ${formData.email})`;

    window.location.href = `mailto:${pageInfo?.email}?subject=${formData.subject}&body=${emailBody}`;
  };

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
            <p className='text-base md:text-2xl'>{pageInfo?.email}</p>
          </div>

          <div className='flex items-center space-x-5 justify-center -ml-4'>
            <MapPinIcon className='text-primary h-7 w-7 animate-pulse flex-initial' />
            <p className='text-base md:text-2xl'>{pageInfo?.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto'
        >
          <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 text-center md:text-left placeholder:text-center md:placeholder-left'>
            <input
              placeholder='Name'
              className='contactInput text-center md:text-left placeholder:text-center md:placeholder-left'
              type='text'
              {...register('name')}
            />
            <input
              placeholder='Email'
              className='contactInput text-center md:text-left placeholder:text-center md:placeholder-left'
              type='email'
              {...register('email', { required: true })}
            />
          </div>

          <input
            placeholder='Subject'
            className='contactInput text-center md:text-left placeholder:text-center md:placeholder-left'
            type='text'
            {...register('subject')}
          />

          <textarea
            placeholder='Message'
            className='contactInput text-center md:text-left placeholder:text-center md:placeholder-left'
            {...register('message')}
          />

          <button
            type='submit'
            className='bg-primary/60 hover:bg-primary/80 py-3 px-10 rounded-md text-black font-bold text-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
