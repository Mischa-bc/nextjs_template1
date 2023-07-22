'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:px-16 px-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className='flex justify-center items-center flex-col relative z-10'>
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          ACME
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className='flex flex-row justify-center items-center'
        >
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='relative w-full md:-mt-[20px] -mt-[12px]'
      >
        <div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]' />
        <div className='w-full flex sm:h-[500px] h-[350px] rounded-tl-[140px] relative'>
          <Image
            src="/cover.png"
            alt="hero cover"
            fill
            className='object-cover rounded-tl-[140px] rounded-[80px] relative'
          />
          <motion.h1 
            variants={textVariant(1.5)}
            className={`${styles.heroText} z-10 flex`}>
            Welcome to X where we do Y for you
          </motion.h1>
        </div> 
        <div className='flex justify-center py-4 px-6'>
          <Link href="#explore" className='mr-2 z-30'>
            <button className='bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded justify-center'>
              Get Started
            </button>
          </Link>
          <Link href="#" className="ml-2 px-4 py-2 font-semibold leading-6 justify-center text-green-700 hover:bg-green-700 hover:text-white rounded">
                  Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;