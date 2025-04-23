import { Link } from "react-router-dom";
import { products } from "../assets/data";
import Navbar from "./Navbar";
import { getLang } from "../lib";
import { motion } from "framer-motion";

type LanguageKey = "en" | "fr" | "ar";

const lang: any = getLang();
const validatedLang: LanguageKey = ["en", "fr", "ar"].includes(lang)
  ? (lang as LanguageKey)
  : "en";

export const Home = () => {
  return (
    <>
      <Navbar langName={validatedLang} />
      <section className="font-inter mx-auto w-full">
        <div className="container mx-auto grid gap-12 px-4 py-16 md:grid-cols-3 md:gap-8 md:px-8">
          {products.map((p) => (
            <motion.div
              key={p.id}
              className="shadow-dark grid place-items-center gap-2 overflow-hidden rounded pb-5"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: p.delay }}
            >
              <img
                src={p.image}
                alt={p.image}
                className="aspect-square w-full md:w-3/4"
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
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};
