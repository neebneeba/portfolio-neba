import { FC } from "react";
import { Link } from "react-router-dom";

const ProjectItem: FC<{
  name: string;
  thumb: string;
  description: string;
}> = (props) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="aspect-video relative overflow-hidden rounded-lg bg-stone-700">
        <Link
          to={"/project-detail"}
          className="absolute flex h-full w-full cursor-pointer bg-black/70 opacity-0 transition duration-200 hover:opacity-100"
        >
          <p className="m-auto text-center text-sm text-white lg:text-base">
            {props.description}
          </p>
        </Link>
        <img
          src={props.thumb}
          alt={props.thumb}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <Link
        to={"/project-detail"}
        className="mx-auto transition duration-200 hover:text-blue-500 sm:text-xl lg:text-3xl"
      >
        {props.name}
      </Link>
    </div>
  );
};

export default ProjectItem;
