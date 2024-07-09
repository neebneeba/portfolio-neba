import { FC } from "react";
import { useTranslation } from "react-i18next";

// Components
import Language from "../components/Language";

const Header: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mb-20 flex justify-between py-5">
      <div className="my-auto flex flex-row space-x-20">
        <a href="" className="font-lgxw text-2xl font-semibold">
          {t("sections.home")}
        </a>
        <a href="#skills" className="font-lgxw text-2xl font-semibold">
          {t("sections.skills")}
        </a>
        <a href="#experience" className="font-lgxw text-2xl font-semibold">
          {t("sections.experience")}
        </a>
        <a href="#projects" className="font-lgxw text-2xl font-semibold">
          {t("sections.projects")}
        </a>
      </div>
      <Language />
    </div>
  );
};

export default Header;
