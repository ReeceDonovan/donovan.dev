import * as motion from '@/lib/motion';
import Image from 'next/image';

export default function Projects() {
  // Dummy data for development purposes
  const projects = [1, 2, 3, 4, 5];

  {
    /* TODO: Populate with real dynamic data */
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project, i) => (
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            {/* TODO: Replace with actual project image */}
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.25 }}
              viewport={{ once: true }}
              src='https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/2147532147/images/e0805b-f12-37b-0e82-8c831f6b7d1_image_5_.png'
              alt='Website Project Image'
            />

            <div className=' space-y-10 px-0 md:px-10 max-w-6xl'>
              {/* TODO: Replace with actual project title */}
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                  Case Study {i + 1} of {projects.length}:
                </span>{' '}
                NextJS Project
              </h4>

              {/* TODO: Remove dummy project summary */}
              <p className='text-lg text-center md:text-left'>
                Ea ex eiusmod enim consectetur pariatur ex cillum consequat
                commodo consequat proident dolor dolore. Pariatur occaecat
                cupidatat in proident esse est do ad non tempor mollit. Id
                pariatur et proident consectetur ex anim laboris. Ullamco sunt
                dolor cillum ipsum reprehenderit labore minim aliquip duis
                proident. Consequat sit nulla fugiat incididunt fugiat mollit
                consequat amet aliqua minim pariatur. Irure esse fugiat
                voluptate ipsum qui eu irure do deserunt laboris labore ad
                irure.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* TODO: Customize the aesthetic of this skewed bar visual element */}
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  );
}
