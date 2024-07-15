import { FC } from "react";

const CircleImage: FC = () => {
  return (
    <div className="inline-block aspect-square h-52 w-52 shrink-0 overflow-hidden rounded-full bg-white md:h-96 md:w-96">
      <img
        src="images/me-without-background.png"
        className="h-full w-full object-contain"
        alt="Circle Image"
      />
    </div>
  );
};

export default CircleImage;
