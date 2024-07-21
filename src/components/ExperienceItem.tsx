import { FC } from "react";

const ExperienceItem: FC<{
  date: string;
  title: string;
  companyName: string;
  paragraph: string;
}> = (props) => {
  return (
    <div className="flex flex-col space-y-2 lg:col-span-3 lg:space-y-5">
      <h2 className="font-oswald text-2xl text-yellow-300 lg:text-5xl">
        {props.title}
      </h2>
      <div className="flex justify-start space-x-2 lg:space-x-5">
        <div className="my-auto inline-block h-min rounded border-2 border-blue-500 px-2 py-0.5 text-xs font-bold lg:text-3xl">
          {props.date}
        </div>
        <h5 className="my-auto text-lg text-cyan-400 lg:text-3xl">
          {props.companyName}
        </h5>
      </div>
      <p className="border-l-2 pl-2 text-justify text-xs lg:pl-5 lg:text-3xl">
        {props.paragraph}
      </p>
    </div>
  );
};

export default ExperienceItem;
