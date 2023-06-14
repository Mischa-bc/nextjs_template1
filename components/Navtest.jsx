'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import { useState } from 'react';

const menu_list = [
  {text: "Home", href: "/"},
  {text: "About Us", href: "/about"},
  {text: "Contact", href: "/contact"},
];

const Navtest = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return(
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className={`${styles.xPaddings} py-8 relative `}
    >
    <div className='absolute w-[50%] inset-0 gradient-01' />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <Link href="/">NAVTEST LINK</Link>
      </div>
    </motion.nav>
  )
}

export default Navtest;