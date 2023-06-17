import Link from 'next/link';
import Navbar from '../components/Navbar';
import Hero from '@/sections/Hero';

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  )
}
