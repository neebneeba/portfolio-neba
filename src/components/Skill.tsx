import { FC, useId } from "react";

const Skill: FC<{ icon: Array<string>; title: string }> = (props) => {
  return (
    <div className="flex flex-col space-y-2 rounded-lg bg-gradient-to-tr from-stone-700 to-slate-700 py-8 transition-all duration-200 hover:scale-105 sm:py-24 xl:py-32">
      <div className="mx-auto flex space-x-2">
        {props.icon.map((item) => (
          <img
            src={item}
            key={useId()}
            className="h-5 w-5 md:h-10 md:w-10 lg:h-20 lg:w-20"
          />
        ))}
      </div>
      <h5 className="mx-auto font-oswald text-xs font-semibold md:text-base md:font-bold">
        {props.title}
      </h5>
    </div>
  );
};

export default Skill;
