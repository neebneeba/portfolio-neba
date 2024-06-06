import { FC } from "react";

const ExperienceItem: FC<{
  date: string;
  title: string;
  subtitle: string;
  paragraph: string;
}> = (props) => {
  return (
    <div className="grid grid-cols-4 gap-20">
      <div className="col-span-1 flex flex-col space-y-5">
        <div className="ml-auto flex space-x-10">
          <div className="year-tag flex bg-stone-500 before:border-l-stone-500">
            <h3 className="m-auto text-3xl font-bold">{props.date}</h3>
          </div>
          <div className="h-10 w-10 rounded-full bg-yellow-300 shadow-lg shadow-orange-400"></div>
        </div>
        <div className="ml-auto h-full w-10 before:mx-auto before:block before:h-full before:w-1 before:rounded before:bg-white"></div>
      </div>
      <div className="col-span-3 flex flex-col space-y-5">
        <h2 className="font-oswald text-5xl text-white">{props.title}</h2>
        <h5 className="text-3xl text-white">{props.subtitle}</h5>
        <p className="text-xl">{props.paragraph}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
