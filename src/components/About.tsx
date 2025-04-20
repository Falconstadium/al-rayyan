import { getLang } from "../lib";
import { homeResources } from "../resources/Home";
import { resources } from "../resources/SharedResources";

type LanguageKey = keyof typeof homeResources;

const lang = getLang() as LanguageKey;

export const About = () => {
  return <div>{resources[lang].about}</div>;
};
