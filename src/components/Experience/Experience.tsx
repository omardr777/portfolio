import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../constants";
import { ExperienceCard } from "./ExperienceCard";
import { withSectionWrapper } from "../../hoc/SectionWrapper";
import { Header } from "../Header";

const ExperienceC = () => {
  return (
    <>
      <Header text="Overview." subText="introduction" id="work" />
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
