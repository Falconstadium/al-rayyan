import { getLang } from "../lib";
import { lemonHoneyDetails } from "../resources/lemonHoneyDetails";
import { homeResources } from "../resources/Home";
import honey from "/miel.svg";
import { springHoney } from "../resources/SpringHoneyDetails";
import { dagmusHoney } from "../resources/DagmusHoneyDetails";
import { sidrHoney } from "../resources/SidrHoneyDetails";
import { carobHoney } from "../resources/CarubHoneyDetails";
import { eucalyptusHoney } from "../resources/EucalyptusHoneyDetails";

type LanguageKey = keyof typeof homeResources;

const lang = getLang() as LanguageKey;

export const products = [
  {
    id: 1,
    image: honey,
    title: `${lemonHoneyDetails[lang].name}`,
    slug: `${lemonHoneyDetails[lang].slug}`,
    text: `${lemonHoneyDetails[lang].text}`,
    benefit: {
      title: `${lemonHoneyDetails[lang].benefit.title}`,
      detail1: `${lemonHoneyDetails[lang].benefit.detail1}`,
      detail2: `${lemonHoneyDetails[lang].benefit.detail2}`,
      detail3: `${lemonHoneyDetails[lang].benefit.detail3}`,
    },
  },
  {
    id: 2,
    image: honey,
    title: `${springHoney[lang].name}`,
    slug: `${springHoney[lang].slug}`,
    text: `${springHoney[lang].text}`,
    benefit: {
      title: `${springHoney[lang].benefit.title}`,
      detail1: `${springHoney[lang].benefit.detail1}`,
      detail2: `${springHoney[lang].benefit.detail2}`,
      detail3: `${springHoney[lang].benefit.detail3}`,
    },
  },
  {
    id: 3,
    image: honey,
    title: `${dagmusHoney[lang].name}`,
    slug: `${dagmusHoney[lang].slug}`,
    text: `${dagmusHoney[lang].text}`,
    benefit: {
      title: `${dagmusHoney[lang].benefit.title}`,
      detail1: `${dagmusHoney[lang].benefit.detail1}`,
      detail2: `${dagmusHoney[lang].benefit.detail2}`,
    },
  },
  {
    id: 4,
    image: honey,
    title: `${sidrHoney[lang].name}`,
    slug: `${sidrHoney[lang].slug}`,
    text: `${sidrHoney[lang].text}`,
    benefit: {
      title: `${sidrHoney[lang].benefit.title}`,
      detail1: `${sidrHoney[lang].benefit.detail1}`,
      detail2: `${sidrHoney[lang].benefit.detail2}`,
      detail3: `${sidrHoney[lang].benefit.detail3}`,
    },
  },
  {
    id: 5,
    image: honey,
    title: `${eucalyptusHoney[lang].name}`,
    slug: `${eucalyptusHoney[lang].slug}`,
    text: `${eucalyptusHoney[lang].text}`,
    benefit: {
      title: `${eucalyptusHoney[lang].benefit.title}`,
      detail1: `${eucalyptusHoney[lang].benefit.detail1}`,
      detail2: `${eucalyptusHoney[lang].benefit.detail2}`,
      detail3: `${eucalyptusHoney[lang].benefit.detail3}`,
    },
  },
  {
    id: 6,
    image: honey,
    title: `${carobHoney[lang].name}`,
    slug: `${carobHoney[lang].slug}`,
    text: `${carobHoney[lang].text}`,
    benefit: {
      title: `${carobHoney[lang].benefit.title}`,
      detail1: `${carobHoney[lang].benefit.detail1}`,
      detail2: `${carobHoney[lang].benefit.detail2}`,
      detail3: `${carobHoney[lang].benefit.detail3}`,
    },
  },
];
