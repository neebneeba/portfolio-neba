import { FC, useEffect, useState } from "react";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const languages: Array<{
  name: string;
  flag: string;
  value: string;
}> = [
  {
    name: "English",
    flag: "flags/united-states.png",
    value: "en",
  },
  {
    name: "Монгол",
    flag: "flags/mongolia.png",
    value: "mn",
  },
  {
    name: "日本語",
    flag: "flags/japan.png",
    value: "jp",
  },
];

const Language: FC = () => {
  const { i18n } = useTranslation();
  let [selected, setSelected] = useState<string>(languages[0].value);

  useEffect(() => {
    let lang = Cookies.get().lang;

    if (lang && ["en", "mn", "jp"].includes(lang)) {
      setSelected(lang);
    } else {
      Cookies.set("lang", selected);
    }
  }, []);

  useEffect(() => {
    i18n.changeLanguage(selected);
  }, [selected]);

  function handleChange(value: string) {
    setSelected(value);
    Cookies.set("lang", value);
  }

  return (
    <RadioGroup
      value={selected}
      onChange={handleChange}
      aria-label="Server size"
      className="flex space-x-5 rounded bg-white bg-opacity-20 p-0.5 font-roboto"
    >
      {languages.map((language) => (
        <Field key={language.value} className="flex flex-row">
          <Radio
            value={language.value}
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
