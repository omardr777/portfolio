import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { experiences } from "../../constants";
import { ExperienceCard } from "./ExperienceCard";
import { styles } from "../../style";
import { textVariant } from "../../utils/motion";
import { withSectionWrapper } from "../../hoc/SectionWrapper";

const ExperienceC = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, i) => {
            return <ExperienceCard key={i} {...exp} />;
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export const Experience = withSectionWrapper(ExperienceC, "experience");
