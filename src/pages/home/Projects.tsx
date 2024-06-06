import { FC } from "react";

// Components
import ProjectItem from "../../components/ProjectItem";

const Projects: FC = () => {
  return (
    <div id="projects" className="container flex flex-col space-y-10">
      <h1 className="mx-auto font-oswald text-5xl font-bold">Projects</h1>
      <div className="grid grid-cols-3 gap-5">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
};

export default Projects;
