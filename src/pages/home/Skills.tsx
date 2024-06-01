import { FC, useId } from "react";

// Components
import Skill from "../../components/Skill";

const Skills: FC = () => {
  let skills: Array<{
    icons: string[];
    title: string;
  }> = [
    {
      icons: [
        "src/assets/icons/icons8-html-logo.svg",
        "src/assets/icons/icons8-css-logo.svg",
      ],
      title: "Html & CSS",
    },
    {
      icons: ["src/assets/icons/icons8-javascript.svg"],
      title: "Javascript",
    },
    {
      icons: ["src/assets/icons/icons8-git.svg"],
      title: "Git Source Control",
    },
    {
      icons: ["src/assets/icons/icons8-linux-96.png"],
      title: "Linux",
    },
    {
      icons: ["src/assets/icons/icons8-postgres.svg"],
      title: "Postgres",
    },
    {
      icons: ["src/assets/icons/icons8-mongodb.svg"],
      title: "MongoDB",
    },
    {
      icons: ["src/assets/icons/icons8-react-js.svg"],
      title: "ReactJS",
    },
    {
      icons: ["src/assets/icons/icons8-vue-js.svg"],
      title: "VueJS",
    },
    {
      icons: ["src/assets/icons/icons8-tailwindcss.svg"],
      title: "TailwindCSS",
    },
    {
      icons: ["src/assets/icons/icons8-nodejs.svg"],
      title: "NodeJS",
    },
    {
      icons: ["src/assets/icons/icons8-nestjs.svg"],
      title: "NestJS",
    },
    {
      icons: ["src/assets/icons/icons8-nginx.svg"],
      title: "Nginx",
    },
    {
      icons: ["src/assets/icons/icons8-docker.svg"],
      title: "Docker",
    },
    {
      icons: ["src/assets/icons/icons8-google-cloud.svg"],
      title: "Google Cloud",
    },
    {
      icons: ["src/assets/icons/icons8-flutter.svg"],
      title: "Flutter",
    },
    {
      icons: ["src/assets/icons/icons8-java.svg"],
      title: "Java",
    },
  ];

  return (
    <div className="container flex flex-col space-y-5">
      <h1 className="font-oswald mx-auto text-5xl font-bold">Skills</h1>
      <div className="grid grid-cols-4 gap-10">
        {skills.map((item) => (
          <Skill icon={item.icons} key={useId()} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
