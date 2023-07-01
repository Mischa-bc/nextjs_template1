'use client';

import styles from "@/styles";
import { TitleText, TypingText } from "@/components/CustomText";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >

    </motion.div>
  </section>
)