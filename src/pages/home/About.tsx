import { FC } from "react";
import { useTranslation } from "react-i18next";

const About: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex">
      <div className="flex w-1/2 bg-yellow-500 py-24 sm:w-2/5 md:w-1/3 md:py-32 lg:py-52"></div>
      <div className="flex w-1/2 pr-5 sm:w-3/5 md:w-2/3">
        <div className="my-auto -ml-40 max-w-[800px]">
          <h1 className="mb-2 font-oswald text-2xl font-bold md:text-5xl">
            {t("about.title")}
          </h1>
          <p className="text-justify mix-blend-difference md:text-left md:text-lg lg:text-3xl">
            {t("about.paragraph")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
