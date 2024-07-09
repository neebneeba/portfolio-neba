import { FC } from "react";
import { useTranslation } from "react-i18next";

const About: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex">
      <div className="flex w-1/3 bg-yellow-500 py-52"></div>
      <div className="flex w-2/3">
        <div className="my-auto -ml-40 max-w-[800px]">
          <h1 className="mb-2 font-oswald text-5xl font-bold">
            {t("about.title")}
          </h1>
          <p className="text-3xl mix-blend-difference">
            {t("about.paragraph")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
