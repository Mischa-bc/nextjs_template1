'use client';

import { motion } from 'framer-motion';
import styles from '@/styles';
import Link from 'next/link';
import { fadeIn,staggerContainer } from '@/utils/motion';
import { TypingText } from '@/components/CustomText';
import Image from 'next/image';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Acme" textStyles='text-center' />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-green-900'
      >
        <span>Acme</span> is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras <span className="font-extrabold text-green-800">commodo</span> lobortis sem sed pulvinar. Phasellus viverra libero eu erat tempor, eget <span className="font-extrabold text-green-800">mollis </span> arcu consequat. Nunc felis ante, molestie sed lorem id, sodales venenatis neque. Sed scelerisque sollicitudin risus, et <span className="font-extrabold text-green-800">dapibus</span> neque mattis egestas. Morbi non gravida augue. Nam condimentum volutpat pretium. Keep scrolling to learn more.
      </motion.p>

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
      >
        <Image
          src='/arrow-down.svg'
          alt='arrow down'
          width={27}
          height={42}
          className='object-contain mt-[28px] filter brightness-0'
        />
      </motion.div>

    </motion.div>
  </section>
);

export default About;