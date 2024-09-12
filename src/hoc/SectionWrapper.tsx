import { motion } from "framer-motion";
import { FC } from "react";
import { staggerContainer } from "../utils/motion";
import { styles } from "../style";

export const withSectionWrapper = (Component: FC, idName: string) => {
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span id={idName} className="hash-span">
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
};
