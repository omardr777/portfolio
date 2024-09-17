import { Tilt } from "react-tilt";
import { Project } from "../../types";
import { externalLink, github } from "../../assets";

interface IProjectCard extends Project {
  index: number;
}

export const ProjectCard = ({
  image,
  name,
  source_code_link,
  description,
  tags,
  view_link,
}: IProjectCard) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="animate-fade-in bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[550px] flex flex-col justify-between"
    >
      <div>
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
            {view_link && (
              <div
                onClick={() => window.open(view_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={externalLink}
                  alt="external link"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
};
