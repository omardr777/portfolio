import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { Header } from "../Header";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { withSectionWrapper } from "../../hoc/SectionWrapper";

export const WorksC = () => {
  return (
    <>
      <Header text="Projects." subText="My work" />
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          This section features projects that demonstrate my technical skills
          and problem-solving abilities. Each project includes a summary and a
          link to the code repository. These projects highlight my experience
          with various technologies and my capability to tackle complex tasks
          effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap items-center justify-center gap-7">
        {projects.map((project, i) => {
          return <ProjectCard key={`project-${i}`} index={i} {...project} />;
        })}
      </div>
    </>
  );
};

export const Works = withSectionWrapper(WorksC, "works");
