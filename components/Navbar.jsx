'use client';

import Link from 'next/link';
import Image from 'next/image';
import NavItem from './NavItem';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import styles from '../styles';
import { useState } from 'react';

const menu_list = [
  {text: "Home", href: "/"},
  {text: "About Us", href: "/about"},
  {text: "Contact", href: "/contact"},
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className={`${styles.xPaddings} py-8 relative z-30`}
    >
      <div className='absolute w-[50%] inset-0 gradient-01' />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <Link href='/' className='z-10'>
          <Image 
            src='/headset.svg'
            alt='logo'
            width={24}
            height={24}
            className='w-[24px] h-[24px] object-contain'
          />
        </Link>
        <h2 className='font-extrabold text-[24px] leading-[30px] text-white'>
          TITLE
        </h2>

        <div onClick={() => setNavActive(!navActive)} className='flex-col cursor-pointer'
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} `}>
          {menu_list.map((menu, idx) => (
            <div onClick={() => {
              setActiveIdx(idx);
              setNavActive(false);
            }}
            key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </div> 
    </motion.nav>
  );
}

export default Navbar;
