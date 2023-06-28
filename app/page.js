import Link from 'next/link';
import Navbar from '../components/Navbar';
import Hero from '@/sections/Hero';
import Example from '@/sections/Example';
import About from '@/sections/About';

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className='relative'>
        <About />
      </div>
    </div>
  )
}
