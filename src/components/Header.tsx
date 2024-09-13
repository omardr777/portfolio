import { styles } from "../style";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
interface IHeader {
  subText: string;
  text: string;
  id?: string;
}
export const Header = ({ subText, text, id }: IHeader) => {
  return (
    <motion.div variants={textVariant()} id={id}>
      <p className={styles.sectionSubText}>{subText}</p>
      <h2 className={styles.sectionHeadText}>{text}</h2>
    </motion.div>
  );
};
