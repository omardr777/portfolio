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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        voluptates voluptatibus molestiae nam repellat repudiandae optio, sed
        accusantium consequuntur reprehenderit consequatur saepe voluptate,
        neque quasi sint animi, sunt libero facilis.
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
