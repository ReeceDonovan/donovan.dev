import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className='h-screen'>
      {/* Hero */}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>
    </div>
  );
}
