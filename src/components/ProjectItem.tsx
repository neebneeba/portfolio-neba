import { FC } from "react";
import { Link } from "react-router-dom";

const ProjectItem: FC<{
  name: string;
  thumb: string;
  description: string;
}> = (props) => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="relative h-96 overflow-hidden rounded-lg bg-stone-700">
        <Link
          to={"/project-detail"}
          className="absolute flex h-full w-full cursor-pointer bg-black/70 opacity-0 transition duration-200 hover:opacity-100"
        >
          <p className="m-auto text-center text-white">{props.description}</p>
        </Link>
        <img
          src={props.thumb}
          alt={props.thumb}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <Link
        to={"/project-detail"}
        className="mx-auto text-3xl transition duration-200 hover:text-blue-500"
      >
        {props.name}
      </Link>
    </div>
  );
};

export default ProjectItem;
