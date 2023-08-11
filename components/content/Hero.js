'use client';

import Image from "next/image";
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <div className="w-full flex justify-between flex-col-reverse lg:flex-row items-center">
      <motion.div
        className={
          "flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8"
        }
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: .5 }}
      >
        <h1 className="font-bold text-3xl lg:text-5xl text-center lg:text-start tracking-tight mb-3 text-white mx-auto lg:mx-0">
          Warren Au
        </h1>

        <h2 className="flex items-center gap-2 text-1xl lg:text-1xl text-gray-200 mb-8 mx-auto lg:mx-0">
          <span className="font-semibold">JavaScript</span>Developer
        </h2>
      </motion.div>

      <motion.div
        className={"w-[80px] sm:w-[176px] relative mb-6 lg:mb-0"}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: .6 }}
      >
        <Image
          alt="profile picture"
          height={176}
          width={176}
          src="/next.svg"
          sizes="30vw"
          priority
          className="rounded-[8px] filter grayscale hover:grayscale-0 transition ease"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
