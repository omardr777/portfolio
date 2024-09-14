import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience } from "../../types";

export const ExperienceCard = ({
  company_name,
  date,
  icon,
  iconBg,
  points,
  title,
}: Experience) => {
  return (
    <>
      <VerticalTimelineElement
        contentStyle={{
          background: "#1e1e1e",
          color: "#fff",
        }}
        date={date}
        iconStyle={{ background: iconBg }}
        icon={
          <div className="w-full h-full items-center flex justify-center ">
            <img
              src={icon}
              alt={company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        }
      >
        <div>
          <h3 className="text-white text-[24px] font-bold ">{title}</h3>
          <p className="text-secondary text-[1rem] font-semibold m-0">
            {company_name}
          </p>
        </div>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {points.map((point, i) => {
            return (
              <li
                key={`exp-point-${i}`}
                className="text-white-100 text-[14px] pl-1 tracking-wider "
              >
                {point}
              </li>
            );
          })}
        </ul>
      </VerticalTimelineElement>
    </>
  );
};
