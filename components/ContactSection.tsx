/* TODO: !IMPORTANT! The form hooks must be client-side rendered, resulting in SEO not capturing the non-interactive contact details.
 * Separate the "ContactMe" section component into two separate components: "ContactInfo" and "ContactForm".
 * The "ContactInfo" component will be rendered server-side, allowing SEO to capture the contact details.
 * The "ContactForm" component will be rendered client-side, allowing the form hooks to function.
 */

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

// TODO: Consider integrating an email service like SendGrid to handle contact form submissions.
export default function ContactSection({ pageInfo }: Props) {
  // TODO: Consider adding form validation and error handling. e.g.: 'formState: { errors }'
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const emailBody = `${
      formData.name ? `Hi, my name is ${formData.name}. ` : ''
    }${formData.message} (Sent from ${formData.email})`;

    window.location.href = `mailto:${pageInfo?.email}?subject=${formData.subject}&body=${emailBody}`;
  };

  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I&apos;m always up for a chat, whether it be about a new project or
          just to say hi.
          <br />
          <span className='underline decoration-primary/50'>Lets Talk.</span>
        </h4>

        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-primary h-7 w-7 animate-pulse' />
            <p className='text-2xl'>{pageInfo?.email}</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-primary h-7 w-7 animate-pulse' />
            <p className='text-2xl'>{pageInfo?.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto'
        >
          <div className='flex space-x-2'>
            <input
              placeholder='Name'
              className='contactInput'
              type='text'
              {...register('name')}
            />
            <input
              placeholder='Email'
              className='contactInput'
              type='email'
              {...register('email', { required: true })}
            />
          </div>

          <input
            placeholder='Subject'
            className='contactInput'
            type='text'
            {...register('subject')}
          />

          <textarea
            placeholder='Message'
            className='contactInput'
            {...register('message')}
          />

          <button
            type='submit'
            className='bg-primary/60 hover:bg-primary/80 py-5 px-10 rounded-md text-black font-bold text-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
