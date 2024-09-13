import Tilt from "react-parallax-tilt";
import { Project } from "../../types";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { github } from "../../assets";

interface IProjectCard extends Project {
  index: number;
}

export const ProjectCard = ({
  index,
  image,
  name,
  source_code_link,
  description,
  tags,
}: IProjectCard) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full   backdrop-blur-md">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="size-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="black-gradient size-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                src={github}
                alt="github"
                className="size-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[1.5rem]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
