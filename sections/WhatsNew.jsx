'use client';

import { motion } from "framer-motion";
import { TitleText, TypingText } from "@/components/CustomText";
import { rollIn, staggerContainer, fadeIn } from "@/utils/motion";
import styles from "@/styles";
import { newFeatures } from "@/constants";
import NewFeatures from "@/components/NewFreatures";
import Image from "next/image";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| What's new?" />
        <TitleText title={<>What's new about Acme?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={rollIn('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image 
          src='/whats-new.png'
          alt="whats-new"
          fill
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;