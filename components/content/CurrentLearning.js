"use client";

import { motion } from "framer-motion";
import AllFavTechs from "../icons/AllFavTech";

const CurrentLearning = () => {
  return (
    <motion.div
      className={
        "flex flex-col justify-center items-center lg:items-start mb-5 mx-auto lg:mx-0"
      }
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: .5 }}
    >
      <div className="flex flex-col justify-center items-center lg:items-start">
        <AllFavTechs />
      </div>
    </motion.div>
  );
};

export default CurrentLearning;