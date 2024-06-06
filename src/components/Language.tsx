import { FC, useState } from "react";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";

const languages: Array<{
  name: string;
  flag: string;
}> = [
  {
    name: "Монгол",
    flag: "src/assets/flags/mongolia.png",
  },
  {
    name: "English",
    flag: "src/assets/flags/united-states.png",
  },
  {
    name: "日本語",
    flag: "src/assets/flags/japan.png",
  },
];

const Language: FC = () => {
  let [selected, setSelected] = useState(languages[0]);

  return (
    <RadioGroup
      value={selected}
      onChange={setSelected}
      aria-label="Server size"
      className="flex space-x-5 rounded bg-white bg-opacity-20 p-0.5 font-roboto"
    >
      {languages.map((language) => (
        <Field key={language.name} className="flex flex-row items-center gap-2">
          <Radio
            value={language.name}
            className="flex space-x-2 rounded p-2 outline-none hover:cursor-pointer data-[checked]:bg-white data-[checked]:bg-opacity-30"
          >
            <img
              src={language.flag}
              className="h-5 w-5 shrink-0 object-fill"
              alt=""
            />
            <Label>{language.name}</Label>
          </Radio>
        </Field>
      ))}
    </RadioGroup>
  );
};

export default Language;
