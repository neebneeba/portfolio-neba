import { FC } from "react";

const About: FC = () => {
  return (
    <div className="flex">
      <div className="flex w-1/3 bg-yellow-500 py-52"></div>
      <div className="flex w-2/3">
        <div className="my-auto -ml-40 max-w-[800px]">
          <h1 className="mb-2 font-oswald text-5xl font-bold">About</h1>
          <p className="text-3xl mix-blend-difference">
            - Сайн байна уу. Би бол Software Engineer одоогоор уг мэргэжлээр
            ажиллаад 4 дэх жил рүүгээ орох гэж байна. Монгол улсын нийслэл
            Улаанбаатар хотод 2020 онд Computer Science мэргэжлээр Хүрээ
            Мэдээлэл холбоо технологийн дээд сургуулыг төгссөн. Та бүхэн миний
            танилцуулгатай танилцана уу.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
