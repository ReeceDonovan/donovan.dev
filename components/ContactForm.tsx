'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  contactEmail: string;
};

export default function ContactForm({ contactEmail: recipient }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const style =
    'contactInput text-center md:text-left placeholder:text-center md:placeholder-left';

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const emailBody = `${
      formData.name ? `Hi, my name is ${formData.name}. ` : ''
    }${formData.message} (Sent from ${formData.email})`;

    const mailto = `mailto:${recipient}?subject=${formData.subject}&body=${emailBody}`;

    window.location.href = mailto;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col space-y-2 w-fit mx-auto'
    >
      <label className='hidden' htmlFor='name'>
        Name
      </label>
      <input
        id='name'
        placeholder='Enter your name'
        className={style}
        type='text'
        {...register('name')}
      />

      <label className='hidden' htmlFor='email'>
        Email
      </label>
      <input
        id='email'
        placeholder='Enter your email'
        className={style}
        type='email'
        {...register('email', { required: 'Email is required' })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        placeholder='Subject'
        className={style}
        type='text'
        {...register('subject')}
      />

      <textarea
        placeholder='Message'
        className={style}
        {...register('message')}
      />

      <button
        type='submit'
        className='bg-primary/60 hover:bg-primary/80 py-3 px-10 rounded-md text-black font-bold text-lg'
      >
        Submit
      </button>
    </form>
  );
}
