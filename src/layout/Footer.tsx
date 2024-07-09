import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="mt-10 flex justify-center bg-black bg-opacity-60 py-5 text-white">
      Copyright &copy; {new Date().getFullYear()}; Designed by&nbsp;
      <strong>neba0317</strong>
    </div>
  );
};

export default Footer;
