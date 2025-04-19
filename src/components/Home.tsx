import { Link } from "react-router-dom";
import { products } from "../assets/data";
import Navbar from "./Navbar";
import { getLang } from "../lib";

type LanguageKey = "en" | "fr" | "ar";

const lang: any = getLang();
const validatedLang: LanguageKey = ["en", "fr", "ar"].includes(lang)
  ? (lang as LanguageKey)
  : "en";

export const Home = () => {
  return (
    <>
      <Navbar langName={validatedLang} />
      <section className="font-inter mx-auto w-full place-content-center">
        <div className="container mx-auto grid place-content-center gap-12 px-4 py-16 md:grid-cols-3 md:px-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="shadow-dark grid place-items-center gap-2 overflow-hidden rounded pb-5"
            >
              <img
                src={p.image}
                alt={p.image}
                className="aspect-square w-3/4"
              />
              <div className="grid place-items-center gap-2">
                <h1 className="font-semibold capitalize">{p.title}</h1>
                <Link
                  to={p.slug}
                  className="rounded bg-green-700 px-3 py-1 text-sm font-medium text-white transition-colors duration-200 ease-in-out hover:bg-green-600"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
