import { FC, useId } from "react";
import { useTranslation } from "react-i18next";

// Components
import Skill from "../../components/Skill";

const skills: Array<{
  icons: string[];
  title: string;
}> = [
  {
    icons: ["icons/icons8-html-logo.svg", "icons/icons8-css-logo.svg"],
    title: "Html & CSS",
  },
  {
    icons: ["icons/icons8-javascript.svg"],
    title: "Javascript",
  },
  {
    icons: ["icons/icons8-git.svg"],
    title: "Git Source Control",
  },
  {
    icons: ["icons/icons8-linux-96.png"],
    title: "Linux",
  },
  {
    icons: ["icons/icons8-postgres.svg"],
    title: "Postgres",
  },
  {
    icons: ["icons/icons8-mongodb.svg"],
    title: "MongoDB",
  },
  {
    icons: ["icons/icons8-react-js.svg"],
    title: "ReactJS",
  },
  {
    icons: ["icons/icons8-vue-js.svg"],
    title: "VueJS",
  },
  {
    icons: ["icons/icons8-tailwindcss.svg"],
    title: "TailwindCSS",
  },
  {
    icons: ["icons/icons8-nodejs.svg"],
    title: "NodeJS",
  },
  {
    icons: ["icons/icons8-nestjs.svg"],
    title: "NestJS",
  },
  {
    icons: ["icons/icons8-nginx.svg"],
    title: "Nginx",
  },
  {
    icons: ["icons/icons8-docker.svg"],
    title: "Docker",
  },
  {
    icons: ["icons/icons8-google-cloud.svg"],
    title: "Google Cloud",
  },
  {
    icons: ["icons/icons8-flutter.svg"],
    title: "Flutter",
  },
  {
    icons: ["icons/icons8-java.svg"],
    title: "Java",
  },
];

const Skills: FC = () => {
  const { t } = useTranslation();

  return (
    <div id="skills" className="container flex flex-col space-y-5">
      <h1 className="mx-auto font-oswald text-5xl font-bold">
        {t("sections.skills")}
      </h1>
      <div className="grid grid-cols-3 gap-3 px-5 md:grid-cols-3 md:px-5 lg:grid-cols-4 lg:gap-5 lg:px-10">
        {skills.map((item) => (
          <Skill icon={item.icons} key={useId()} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
