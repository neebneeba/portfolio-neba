import { FC, useId } from "react";
import { useTranslation } from "react-i18next";

// Components
import ProjectItem from "../../components/ProjectItem";

const projects: Array<{
  name: string;
  thumb: string;
  description: string;
}> = [
  {
    name: "Egazar",
    thumb: "images/egazar.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit aspernatur eligendi consectetur quia obcaecati illum asperiores! Cum, iure ipsum?",
  },
  {
    name: "Tavanbogd Capital",
    thumb: "images/tavanbogdcapital.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit aspernatur eligendi consectetur quia obcaecati illum asperiores! Cum, iure ipsum?",
  },
  {
    name: "Telemarketing",
    thumb: "images/telemarketing.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit aspernatur eligendi consectetur quia obcaecati illum asperiores! Cum, iure ipsum?",
  },
];

const Projects: FC = () => {
  const { t } = useTranslation();

  return (
    <div id="projects" className="container flex flex-col space-y-10">
      <h1 className="mx-auto font-oswald text-5xl font-bold">
        {t("sections.projects")}
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {projects.map((item) => (
          <ProjectItem
            key={useId()}
            name={item.name}
            thumb={item.thumb}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
