import { getLang } from '../lib';
import { homeResources } from '../resources/Home';
import honey from '/miel.svg';

type LanguageKey = keyof typeof homeResources;

const lang = getLang() as LanguageKey;

export const products = [
  {
    id: 1,
    image: honey,
    title: `${homeResources[lang].lemon}`,
    slug: 'lemon-honey',
    text: 'It is the honey produced by bees from the nectar of lemon and orange blossoms, it is usually light-dense, light yellow color tilted to golden, it tastes great light, it has a smell similar to citrus fruits. The nutritional value of lemon honey is rich in flying oils, with many benefits for human health.',
    benefit: {
      title: 'Benefits of Lemon Honey:',
      detail1:
        'Improves digestive performance, helps to activate digestion in the gut, prevents constipation and treats diarrhoea, in addition to its role in expelling gases, treating acidity, and preventing the occurrence of intestinal colic in children.',
      detail2:
        "Enhances the immune system's work and increases its ability to resist various diseases, especially colds and flu.",
      detail3:
        "It activates brain action, improves mental abilities, strengthens memory, improves assimilation and prevents Alzheimer's infection in the elderly, contributes to strengthening nerves and muscles, is effective in calming nerves, and gives the body a sense of relaxation.",
    },
  },
  {
    id: 2,
    image: honey,
    title: `${homeResources[lang].spring}`,
    slug: 'spring-honey',
    text: 'Spring honey is extracted from the nectar of flowers that bloom during spring, giving it unique nutritional properties and distinctive flavor. Its light golden colour and fragrant floral scent.',
    benefit: {
      title: 'Benefits of Spring Honey:',
      detail1:
        'Spring honey is rich in antibacterials and viruses, making it effective in enhancing immune system functions and combating diseases',
      detail2:
        'Spring honey is a natural source of energy, which helps to activate the body throughout the day.',
      detail3:
        'With nutrient rich, spring honey enhances different body functions and contributes to the prevention of chronic diseases.',
    },
  },
  {
    id: 3,
    image: honey,
    title: `${homeResources[lang].dagmus}`,
    slug: 'dagmus-honey',
    text: "Dagmus honey is a rare and unique type of natural honey produced from the nectar of the flowers of the plant 'Dagmus,' a drought-resistant spinal plant known as its medicinal properties. This honey has several characteristics that make it special: color: dark brown sometimes tends to be black.",
    benefit: {
      title: 'Benefits of Dagmus Honey:',
      detail1:
        'Dagmus honey is characterized by its brown and yellow color, but after a while it turns to settle on black, dagmus honey is a tart taste that leaves a feeling of heat in the throat area when consumed.',
      detail2:
        'Dagmus honey contains many different minerals and vitamins. It is a rich source of carbohydrates and natural sugar. It also has its anti-inflammatory, bacterial and oxidizing properties and is a powerful antibiotic.',
    },
  },
  {
    id: 4,
    image: honey,
    title: `${homeResources[lang].sidr}`,
    slug: 'sidr-honey',
    text: 'Sidr honey is known as monochrome honey made solely from the nectar of Sidr trees in Yemen, and is one of the most expensive honey sold in the world. Sidr honey consists of many types of sugar, namely: fructose, sucrose, glucose, maltose, and a large range of short-chain sugars.',
    benefit: {
      title: 'Benefits of Sidr Honey:',
      detail1:
        'It has been proven to contain a range of antimicrobial properties when used locally on the skin or on wounds.',
      detail2:
        'Sidr honey helps alleviate sinus inflammation, reducing the presence of infected bacteria in the inside of sinuses.',
      detail3:
        'Sidr Honey acts as an antiviral especially with lemon, as it can soothe sore throat, reduce tissue inflammation in the pharynx and upper oesophagus.',
    },
  },
  {
    id: 5,
    image: honey,
    title: `${homeResources[lang].eucalyptus}`,
    slug: 'honey-eucalyptus',
    text: "Dagmus honey is a rare and unique type of natural honey produced from the nectar of the flowers of the plant 'Dagmus,' a drought-resistant spinal plant known as its medicinal properties. This honey has several characteristics that make it special: color: dark brown sometimes tends to be black.",
    benefit: {
      title: 'Benefits of Dagmus Honey:',
      detail1:
        'Dagmus honey is characterized by its brown and yellow color, but after a while it turns to settle on black, dagmus honey is a tart taste that leaves a feeling of heat in the throat area when consumed.',
      detail2:
        'Dagmus honey contains many different minerals and vitamins. It is a rich source of carbohydrates and natural sugar. It also has its anti-inflammatory, bacterial and oxidizing properties and is a powerful antibiotic.',
    },
  },
  {
    id: 6,
    image: honey,
    title: `${homeResources[lang].Poultry}`,
    slug: 'honey-Poultry',
    text: "Dagmus honey is a rare and unique type of natural honey produced from the nectar of the flowers of the plant 'Dagmus,' a drought-resistant spinal plant known as its medicinal properties. This honey has several characteristics that make it special: color: dark brown sometimes tends to be black.",
    benefit: {
      title: 'Benefits of Dagmus Honey:',
      detail1:
        'Dagmus honey is characterized by its brown and yellow color, but after a while it turns to settle on black, dagmus honey is a tart taste that leaves a feeling of heat in the throat area when consumed.',
      detail2:
        'Dagmus honey contains many different minerals and vitamins. It is a rich source of carbohydrates and natural sugar. It also has its anti-inflammatory, bacterial and oxidizing properties and is a powerful antibiotic.',
    },
  },
];
