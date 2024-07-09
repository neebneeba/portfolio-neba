import { FC } from "react";
import { useTranslation } from "react-i18next";

const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-10 flex justify-center bg-black bg-opacity-60 py-5 text-white">
      &copy; {new Date().getFullYear()}; {t("designedBy")}&nbsp;
      <strong>neba0317</strong>
    </div>
  );
};

export default Footer;
