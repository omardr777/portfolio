import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { services } from "../constants";
import { ServiceCard } from "./ServiceCard";
import { withSectionWrapper } from "../hoc/SectionWrapper";
import { Header } from "./Header";

const AboutC = () => {
  return (
    <>
      <Header text="Overview." subText="introduction" />
      <motion.p
        variants={fadeIn("right", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m Omar Hejazi, a passionate software engineer with a strong interest
        in AI and building innovative solutions. I specialize in backend and
        frontend development, working with modern technologies like React,
        Next.js, NestJS, and Supabase. My recent focus has been on AI-driven
        projects, including developing intelligent assistants and implementing
        machine learning models. I enjoy solving complex challenges and
        constantly seek opportunities to deepen my knowledge in cutting-edge
        technologies.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, i) => {
          return <ServiceCard key={service.title} index={i} {...service} />;
        })}
      </div>
    </>
  );
};

export const About = withSectionWrapper(AboutC, "about");
