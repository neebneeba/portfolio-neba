import { FC } from "react";

const Contact: FC = () => {
  return (
    <div className="flex flex-col space-y-5 border-b-4 border-yellow-500 pb-20">
      <div className="mb-20 flex before:block before:h-1 before:w-[40%] before:bg-yellow-500 after:block after:h-1 after:w-[40%] after:bg-yellow-500">
        <div
          id="contact"
          className="mx-auto w-[20%] -translate-y-8 text-center font-oswald text-5xl font-bold"
        >
          Contact Me
        </div>
      </div>
      <div className="">asdad</div>
    </div>
  );
};

export default Contact;
