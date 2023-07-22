'use client';

import { motion } from "framer-motion";
import styles from "@/styles";
import { footerVariants } from "@/utils/motion";
import Image from "next/image";
import { socials } from "@/constants";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-green-700">
          Enter Acme
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#007D56] rounded-[32px] gap-[12px]">
          <Image 
            src="/headset.svg"
            alt="headset"
            height={24}
            width={24}
            className="object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Enter Acme
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-green-700">
            ACME
          </h4>
          <p className="font-normal text-[14px] text-green-700 opacity-50">
          Copyright © 2022 - 2023 Acme. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <Image 
                key={social.name}
                src={social.url}
                alt={social.name}
                height={24}
                width={24}
                className="object-contain cursor-pointer filter brightness-0"
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  </motion.footer>
);

export default Footer;
