import { styles } from "../style";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
interface IHeader {
  subText: string;
  text: string;
  id?: string;
  displayAnimation?: boolean;
}
export const Header = ({ subText, text, id, displayAnimation }: IHeader) => {
  return displayAnimation ? (
    <motion.div variants={textVariant(0.1)} id={id}>
      <p className={styles.sectionSubText}>{subText}</p>
      <h2 className={styles.sectionHeadText}>{text}</h2>
    </motion.div>
  ) : (
    <div>
      <p className={styles.sectionSubText}>{subText}</p>
      <h2 className={styles.sectionHeadText}>{text}</h2>
    </div>
  );
};
