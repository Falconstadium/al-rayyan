import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "../assets/data";
import Navbar from "../components/Navbar";
import { getLang } from "../lib";

type LanguageKey = "en" | "fr" | "ar";

const lang = getLang() as LanguageKey;
const validatedLang: LanguageKey = ["en", "fr", "ar"].includes(lang)
  ? (lang as LanguageKey)
  : "en";

const Home = () => {
  return (
    <>
      <Navbar langName={validatedLang} />
      <section className="font-inter w-full">
        <div className="mx-auto grid max-w-4xl gap-12 px-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <motion.div
              key={p.id}
              className="shadow-dark grid place-content-between place-items-center gap-2 overflow-hidden rounded pb-4"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.1 * p.id }}
            >
              <div className="h-full w-full">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </div>

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

export default Home;
