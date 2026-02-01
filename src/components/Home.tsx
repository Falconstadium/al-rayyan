import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "../assets/data";
import { getLang } from "../lib";
import Navbar from "./Navbar";

type LanguageKey = "en" | "fr" | "ar";

const lang = getLang() as LanguageKey;
const validatedLang: LanguageKey = ["en", "fr", "ar"].includes(lang)
  ? (lang as LanguageKey)
  : "en";

export const Home = () => {
  return (
    <>
      <Navbar langName={validatedLang} />
      <section className="font-inter w-full">
        <div className="mx-auto grid max-w-4xl gap-12 px-6 py-12 md:grid-cols-2 md:gap-8 md:px-8 lg:grid-cols-3">
          {products.map((p) => (
            <motion.div
              key={p.id}
              className="shadow-dark grid place-items-center gap-2 overflow-hidden rounded pb-5"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.1 * p.id }}
            >
              <img
                src={p.image}
                alt={p.title}
                className="aspect-square w-3/4"
              />

              <Link to={p.slug} className="font-semibold capitalize">
                {p.title}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};
