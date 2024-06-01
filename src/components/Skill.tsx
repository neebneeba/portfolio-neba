import { FC, useId } from "react";

const Skill: FC<{ icon: Array<string>; title: string }> = (props) => {
  return (
    <div className="flex flex-col space-y-2 rounded-lg bg-gradient-to-tr from-stone-700 to-slate-700 py-32 transition-all duration-200 hover:scale-105">
      <div className="m-auto flex space-x-2">
        {props.icon.map((item) => (
          <img src={item} key={useId()} />
        ))}
      </div>
      <h5 className="font-oswald mx-auto font-bold">{props.title}</h5>
    </div>
  );
};

export default Skill;
