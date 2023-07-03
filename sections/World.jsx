'use client';

import { motion } from "framer-motion";
import styles from "@/styles";
import { TitleText, TypingText } from "@/components/CustomText";
import { fadeIn, staggerContainer } from "@/utils/motion";
import Image from "next/image";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Acme Global" textStyles='text-center' />
      <TitleText title={( <>Stay connected worldwide</> )} textStyles='text-center' />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex h-[550px]"
      >
        <Image 
          src='/map.png'
          alt="map"
          fill
          className="object-cover"
        />

        <div className="absolute bottom-20 right-20 p-[6px] rounded-full bg-[#5D6680]">
          <Image 
            src='/people-01.png'
            alt="people"
            width={70}
            height={70}
          />
        </div>
        <div className="absolute top-10 left-10 p-[6px] rounded-full bg-[#5D6680]">
        <Image 
            src='/people-02.png'
            alt="people"
            width={70}
            height={70}
          />
        </div>
        <div className="absolute top-1/2 left-[45%] p-[6px] rounded-full bg-[#5D6680]">
          <Image 
            src='/people-03.png'
            alt="people"
            width={70}
            height={70}
          />
        </div>

      </motion.div>
    </motion.div>
  </section>
);

export default World;