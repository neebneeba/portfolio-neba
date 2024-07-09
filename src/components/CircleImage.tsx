import { FC } from "react";

const CircleImage: FC<{ size: number }> = (props) => {
  return (
    <div
      className="inline-block aspect-square shrink-0 overflow-hidden rounded-full bg-white"
      style={{
        height: props.size + "px",
      }}
    >
      <img
        src="images/me-without-background.png"
        className="h-full w-full object-contain"
        alt="Circle Image"
      />
    </div>
  );
};

export default CircleImage;
