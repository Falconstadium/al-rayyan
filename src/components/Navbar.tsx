import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { langList } from "../lib";
import { resources } from "../resources/SharedResources";

export interface NavbarProps {
  langName: keyof typeof resources; // This ensures langName matches keys in `resources`.
}

const Navbar = ({ langName }: NavbarProps) => {
  const langFullName = langList[langName];
  const pathName = window.location.pathname.split(langName)[1];
  const langKeys: Array<keyof typeof langList> = Object.keys(langList) as Array<
    keyof typeof langList
  >;

  const lang = langName;
  let pagePath = window.location.pathname.split(lang)[1];
  pagePath = pagePath.split("/")[1];
  if (!pagePath) {
    pagePath = "home";
  }

  const [showLngMenu, setShowLngMenu] = useState(false);

  return (
    <header className="font-winky px-6 py-2 shadow md:py-3">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to={"/" + lang} className="text-xl font-semibold capitalize">
          {resources[langName].logo}
        </Link>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-2 rounded px-2 py-1 transition-colors duration-200 ease-in-out hover:bg-slate-900 hover:text-white"
              onClick={() => setShowLngMenu(!showLngMenu)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-languages-icon lucide-languages"
              >
                <path d="m5 8 6 6" />
                <path d="m4 14 6-6 2-3" />
                <path d="M2 5h12" />
                <path d="M7 2h1" />
                <path d="m22 22-5-10-5 10" />
                <path d="M14 18h6" />
              </svg>
              {langFullName}
              {showLngMenu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-up-icon lucide-chevron-up"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down-icon lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              )}
            </button>

            <AnimatePresence>
              {showLngMenu ? (
                <motion.div
                  className="shadow-dark absolute top-10 right-4 grid gap-2 rounded-sm bg-neutral-200 py-1"
                  initial={{ opacity: 0, translateY: 10 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  exit={{ opacity: 0, translateY: 10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {langKeys.map((l) => (
                    <div
                      key={l}
                      className="grid w-full px-3 text-center transition-all duration-200 ease-in-out hover:scale-105 hover:bg-white"
                    >
                      <a href={"/" + l + pathName}>{langList[l]}</a>
                    </div>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
