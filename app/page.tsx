import About from '@/components/About';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className='h-screen'>
      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>
    </div>
  );
}
