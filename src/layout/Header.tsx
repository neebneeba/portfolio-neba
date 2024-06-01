import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="container mb-20">
      <div className="flex flex-row justify-center space-x-20 py-5">
        <a href="" className="font-lgxw text-2xl font-semibold">
          Home
        </a>
        <a href="" className="font-lgxw text-2xl font-semibold">
          About
        </a>
        <a href="" className="font-lgxw text-2xl font-semibold">
          Projects
        </a>
      </div>
    </div>
  );
};

export default Header;
