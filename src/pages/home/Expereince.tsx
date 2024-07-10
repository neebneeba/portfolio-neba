import { FC, useId } from "react";
import { useTranslation } from "react-i18next";

// Components
import ExperienceItem from "../../components/ExperienceItem";

const Experience: FC = () => {
  const { t } = useTranslation();

  let experiences: Array<{
    date: string;
    title: string;
    companyName: string;
    paragraph: string;
  }> = [
    {
      date: "2019 / 12",
      title: t("experience.softMaster.title"),
      companyName: t("experience.softMaster.companyName"),
      paragraph: t("experience.softMaster.paragraph"),
    },
    {
      date: "2021 / 08",
      title: "Frontend Engineer",
      companyName: "ICT Group",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet saepe laboriosam nostrum quaerat ducimus necessitatibus rerum? Ullam fuga reiciendis repellat vitae architecto sequi excepturi quidem illo sunt? Quis animi vel quae labore doloremque iure nam fuga possimus nobis inventore vero exercitationem atque accusantium, est quos laudantium laborum tempore! Eius voluptate quos maxime sit ea molestias consequatur enim fuga, corporis, aperiam provident voluptatem consequuntur. Voluptatem, autem atque. Officia rerum adipisci, autem vero, eveniet velit necessitatibus itaque unde accusamus cupiditate consequatur labore error corrupti dignissimos repudiandae nihil minus alias magnam tempore eius. Totam quos vitae veniam doloremque aliquam alias debitis ullam?",
    },
    {
      date: "2022 / 04",
      title: "FullStack Engineer",
      companyName: "Unitel Group",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet saepe laboriosam nostrum quaerat ducimus necessitatibus rerum? Ullam fuga reiciendis repellat vitae architecto sequi excepturi quidem illo sunt? Quis animi vel quae labore doloremque iure nam fuga possimus nobis inventore vero exercitationem atque accusantium, est quos laudantium laborum tempore! Eius voluptate quos maxime sit ea molestias consequatur enim fuga, corporis, aperiam provident voluptatem consequuntur. Voluptatem, autem atque. Officia rerum adipisci, autem vero, eveniet velit necessitatibus itaque unde accusamus cupiditate consequatur labore error corrupti dignissimos repudiandae nihil minus alias magnam tempore eius. Totam quos vitae veniam doloremque aliquam alias debitis ullam?",
    },
  ];

  return (
    <div className="bg-stone-700">
      <div className="container relative">
        <h1
          id="experience"
          className="absolute -translate-y-8 font-oswald text-5xl font-bold"
        >
          {t("sections.experience")}
        </h1>
        <div className="space-y-20 py-20">
          {experiences.map((experience) => (
            <ExperienceItem
              key={useId()}
              date={experience.date}
              title={experience.title}
              companyName={experience.companyName}
              paragraph={experience.paragraph}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
