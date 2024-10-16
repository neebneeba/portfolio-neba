import { FC } from "react";
import { useTranslation } from "react-i18next";

const Contact: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col space-y-5">
      <div className="mb-20 flex before:block before:h-1 before:w-[25%] before:bg-yellow-500 after:block after:h-1 after:w-[25%] after:bg-yellow-500 sm:before:w-[35%] sm:after:w-[35%] xl:before:w-[40%] xl:after:w-[40%]">
        <div
          id="contact"
          className="mx-auto w-[50%] -translate-y-4 text-center font-oswald text-2xl font-bold sm:w-[30%] lg:-translate-y-8 lg:text-5xl xl:w-[20%]"
        >
          {t("contactMe")}
        </div>
      </div>
      <div className="px-5">
        <div className="container grid grid-cols-1 gap-5 rounded-lg bg-stone-600 p-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex">
            <div
              id="phone"
              className="flex h-12 w-12 flex-shrink-0 rounded-full bg-yellow-300"
            >
              <svg
                className="m-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(0, 0, 0, 1);transform: ;msFilter:",
                }}
              >
                <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"></path>
              </svg>
            </div>
            <label htmlFor="phone" className="my-auto ml-2 text-white">
              (+81) 090-2902-4773
            </label>
          </div>
          <div className="flex">
            <div
              id="email"
              className="flex h-12 w-12 flex-shrink-0 rounded-full bg-yellow-300"
            >
              <svg
                className="m-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(0, 0, 0, 1);transform: ;msFilter:",
                }}
              >
                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
              </svg>
            </div>
            <label htmlFor="email" className="my-auto ml-2 text-white">
              neba0317@gmail.com
            </label>
          </div>
          <div className="flex">
            <div
              id="facebook"
              className="flex h-12 w-12 flex-shrink-0 rounded-full bg-yellow-300"
            >
              <svg
                className="m-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(0, 0, 0, 1);transform: ;msFilter:",
                }}
              >
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
              </svg>
            </div>
            <label htmlFor="facebook" className="my-auto ml-2 text-white">
              <a
                href="https://www.facebook.com/nerguibaatar.baagii/"
                className="hover:text-blue-500"
              >
                De Neba
              </a>
            </label>
          </div>
          <div className="flex">
            <div
              id="linkedIn"
              className="flex h-12 w-12 flex-shrink-0 rounded-full bg-yellow-300"
            >
              <svg
                className="m-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(0, 0, 0, 1);transform: ;msFilter:",
                }}
              >
                <circle cx="4.983" cy="5.009" r="2.188"></circle>
                <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
              </svg>
            </div>
            <label htmlFor="linkedIn" className="my-auto ml-2 text-white">
              <a
                href="https://www.linkedin.com/in/nerguibaatar-bat-erdene-11a4001b0"
                className="hover:text-blue-500"
              >
                B.Nerguibaatar
              </a>
            </label>
          </div>
          <div className="flex">
            <div
              id="twitter"
              className="flex h-12 w-12 flex-shrink-0 rounded-full bg-yellow-300"
            >
              <svg
                className="m-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(0, 0, 0, 1);transform: ;msFilter:",
                }}
              >
                <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
              </svg>
            </div>
            <label htmlFor="twitter" className="my-auto ml-2 text-white">
              <a href="https://x.com/neba0317" className="hover:text-blue-500">
                neba0317
              </a>
            </label>
          </div>
          <div className="flex">
            <div
              id="github"
              className="flex h-12 w-12 flex-shrink-0 rounded-full bg-yellow-300"
            >
              <svg
                className="m-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(0, 0, 0, 1);transform: ;msFilter:",
                }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                ></path>
              </svg>
            </div>
            <label htmlFor="github" className="my-auto ml-2 text-white">
              <a
                href="https://github.com/neebneeba"
                className="hover:text-blue-500"
              >
                neba0317
              </a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
