import { technologies } from "../constants";
import { withSectionWrapper } from "../hoc/SectionWrapper";
import { BallCanvas } from "./BallCanvas";

const TechC = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => {
        return (
          <div className="size-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        );
      })}
    </div>
  );
};

export const Tech = withSectionWrapper(TechC, "tech");
