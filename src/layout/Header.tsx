import { FC } from "react";

// Components
import Language from "../components/Language";

const Header: FC = () => {
  return (
    <div className="container mb-20 flex justify-between py-5">
      <div className="my-auto flex flex-row space-x-20">
        <a href="" className="font-lgxw text-2xl font-semibold">
          Home
        </a>
        <a href="#skills" className="font-lgxw text-2xl font-semibold">
          Skills
        </a>
        <a href="#experience" className="font-lgxw text-2xl font-semibold">
          Experience
        </a>
        <a href="#projects" className="font-lgxw text-2xl font-semibold">
          Projects
        </a>
      </div>
      <Language />
    </div>
  );
};

export default Header;
