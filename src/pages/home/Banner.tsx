import { FC } from "react";
import { useTranslation } from "react-i18next";

// Components
import CircleImage from "../../components/CircleImage";

const Banner: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row justify-center space-x-10">
      <div className="my-auto space-y-10 text-2xl">
        <strong className="text-4xl text-yellow-400">{t("name")}</strong>
        <br />
        {t("role")}
        <br />
        <a
          className="inline-block rounded border border-yellow-400 px-10 py-5 text-yellow-400 hover:border-yellow-100 hover:text-yellow-100"
          href="#contact"
        >
          {t("contactMe")}
        </a>
      </div>
      <CircleImage size={500} />
      <div className="flex flex-col justify-end space-y-5 before:mx-auto before:mb-5 before:inline-block before:h-1/4 before:w-[2px] before:bg-yellow-500">
        <a
          className="opacity-70 hover:opacity-100"
          href="https://www.facebook.com/nerguibaatar.baagii/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="mx-auto fill-white"
          >
            <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
          </svg>
        </a>
        <a
          className="opacity-70 hover:opacity-100"
          href="https://www.linkedin.com/in/nerguibaatar-bat-erdene-11a4001b0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="mx-auto fill-white"
          >
            <circle cx="4.983" cy="5.009" r="2.188"></circle>
            <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
          </svg>
        </a>
        <a
          className="opacity-70 hover:opacity-100"
          href="https://x.com/neba0317"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="mx-auto fill-white"
          >
            <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Banner;
