'use client';

import Link from 'next/link';
import Image from 'next/image';
import NavItem from './NavItem';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import styles from '../styles';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Disclosure, Menu, Transition } from '@headlessui/react';

const menu_list = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/', current: false },
  { name: 'Contact', href: '/', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className={`${styles.xPaddings} py-8 relative z-30`}
    >
      <div className='absolute w-[50%] inset-0 gradient-01' />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <Link href='/' className='z-30 opacity-50 hover:opacity-100'>
          <Image
            src='/headset.svg'
            alt='logo'
            width={30}
            height={30}
            className='object-contain'
          />
        </Link>
        <h2 className='font-extrabold text-[24px] leading-[30px] text-white'>
          TITLE
        </h2>
        <div className='hidden sm:flex space-x-4'>
          {menu_list.map((item) => (
            <Link href={item.href} className={classNames(
              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'rounded-md px-3 py-2 text-sm font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      <div>
          <button type='button' onClick={() => setIsOpen(!isOpen)} className='sm:hidden flex ml-auto items-center justify-end rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
            <span className='sr-only'>Open main menu</span>
            {isOpen ? (
              <XMarkIcon className="block h-6 w-6 " aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
          {isOpen && (

            <div className='space-y-1 px-2 pb-3 pt-2'>
              <div className='rounded-md ring-1 ring-black ring-opacity-5 overflow-hidden'>
                {menu_list.map((item) => (
                  <Link href={item.href} key={item.name} className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-4 py-2 text-sm'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar2;
