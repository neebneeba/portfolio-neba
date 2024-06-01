import { FC } from "react";

const About: FC = () => {
  return (
    <div className="flex">
      <div className="flex w-1/3 bg-yellow-500 py-52"></div>
      <div className="flex w-2/3">
        <div className="my-auto -ml-40 max-w-[800px]">
          <h1 className="font-oswald mb-2 text-5xl font-bold">About</h1>
          <p className="text-3xl mix-blend-difference">
            - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
            nisi ratione, odit enim molestias eius alias repellat,
            necessitatibus ut voluptates in quia dicta cupiditate iure
            asperiores aut voluptate dolore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
