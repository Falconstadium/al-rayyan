import { getLang } from "../lib";
import { lemonHoneyDetails } from "../resources/lemonHoneyDetails";
import { homeResources } from "../resources/Home";
import honey from "/miel.svg";
import { springHoney } from "../resources/SpringHoneyDetails";
import { dagmusHoney } from "../resources/DagmusHoneyDetails";

type LanguageKey = keyof typeof homeResources;

const lang = getLang() as LanguageKey;

export const products = [
  {
    id: 1,
    image: honey,
    title: `${homeResources[lang].lemon}`,
    slug: `${homeResources[lang].lemon}`,
    text: `${lemonHoneyDetails[lang].lemon.text}`,
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
    title: `${homeResources[lang].spring}`,
    slug: `${homeResources[lang].spring}`,
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
    title: `${homeResources[lang].dagmus}`,
    slug: `${homeResources[lang].dagmus}`,
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
    title: `${homeResources[lang].sidr}`,
    slug: `${homeResources[lang].sidr}`,
    text: "Sidr honey is known as monochrome honey made solely from the nectar of Sidr trees in Yemen, and is one of the most expensive honey sold in the world. Sidr honey consists of many types of sugar, namely: fructose, sucrose, glucose, maltose, and a large range of short-chain sugars.",
    benefit: {
      title: "Benefits of Sidr Honey:",
      detail1:
        "It has been proven to contain a range of antimicrobial properties when used locally on the skin or on wounds.",
      detail2:
        "Sidr honey helps alleviate sinus inflammation, reducing the presence of infected bacteria in the inside of sinuses.",
      detail3:
        "Sidr Honey acts as an antiviral especially with lemon, as it can soothe sore throat, reduce tissue inflammation in the pharynx and upper oesophagus.",
    },
  },
  {
    id: 5,
    image: honey,
    title: `${homeResources[lang].eucalyptus}`,
    slug: `${homeResources[lang].eucalyptus}`,
    text: "Dagmus honey is a rare and unique type of natural honey produced from the nectar of the flowers of the plant 'Dagmus,' a drought-resistant spinal plant known as its medicinal properties. This honey has several characteristics that make it special: color: dark brown sometimes tends to be black.",
    benefit: {
      title: "Benefits of Dagmus Honey:",
      detail1:
        "Dagmus honey is characterized by its brown and yellow color, but after a while it turns to settle on black, dagmus honey is a tart taste that leaves a feeling of heat in the throat area when consumed.",
      detail2:
        "Dagmus honey contains many different minerals and vitamins. It is a rich source of carbohydrates and natural sugar. It also has its anti-inflammatory, bacterial and oxidizing properties and is a powerful antibiotic.",
    },
  },
  {
    id: 6,
    image: honey,
    title: `${homeResources[lang].Poultry}`,
    slug: `${homeResources[lang].Poultry}`,
    text: "Dagmus honey is a rare and unique type of natural honey produced from the nectar of the flowers of the plant 'Dagmus,' a drought-resistant spinal plant known as its medicinal properties. This honey has several characteristics that make it special: color: dark brown sometimes tends to be black.",
    benefit: {
      title: "Benefits of Dagmus Honey:",
      detail1:
        "Dagmus honey is characterized by its brown and yellow color, but after a while it turns to settle on black, dagmus honey is a tart taste that leaves a feeling of heat in the throat area when consumed.",
      detail2:
        "Dagmus honey contains many different minerals and vitamins. It is a rich source of carbohydrates and natural sugar. It also has its anti-inflammatory, bacterial and oxidizing properties and is a powerful antibiotic.",
    },
  },
];
