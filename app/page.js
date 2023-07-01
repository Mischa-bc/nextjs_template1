import Link from 'next/link';
import Navbar from '../components/Navbar';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Explore from '@/sections/Explore';

export default function Home() {
  return (
    <div className="bg-primary-black">
      <Navbar />
      <Hero />
      <div className='relative'>
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div  className='relative'>
        <GetStarted />
      </div>
    </div>
  )
}
