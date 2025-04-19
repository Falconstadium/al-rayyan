import { Link } from "react-router-dom";
import { langList } from "../lib";
import { resources } from "../resources/SharedResources";
import { useState } from "react";
import { NavLinks } from "./NavLinks";
import { AnimatePresence, motion } from "framer-motion";

export interface NavbarProps {
  langName: keyof typeof resources; // This ensures langName matches keys in `resources`.
}

const Navbar = ({ langName }: NavbarProps) => {
  const langFullName = langList[langName];
  const pathName = window.location.pathname.split(langName)[1];
  const langKeys: Array<keyof typeof langList> = Object.keys(langList) as Array<
    keyof typeof langList
  >;

  let lang = langName;
  let pagePath = window.location.pathname.split(lang)[1];
  pagePath = pagePath.split("/")[1];
  if (!pagePath) {
    pagePath = "home";
  }

  const [showLngMenu, setShowLngMenu] = useState(false);
  const [showLinkMenu, setShowLinkMenu] = useState(false);

  return (
    <header className="font-winky px-6 py-2 shadow md:py-3">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to={"/" + lang} className="text-xl font-semibold capitalize">
          {resources[langName].logo}
        </Link>

        <ul className="hidden items-center gap-4 font-medium uppercase md:flex">
          <NavLinks langName={langName} />
        </ul>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-1"
              onClick={() => setShowLngMenu(!showLngMenu)}
            >
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
                  className="absolute top-10 right-0 grid origin-top gap-2 rounded-sm bg-neutral-200 py-1"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {langKeys.map((l) => (
                    <div
                      key={l}
                      className="grid w-full px-3 text-center hover:bg-white"
                    >
                      <a href={"/" + l + pathName}>{langList[l]}</a>
                    </div>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <div className="relative block md:hidden">
            <button
              type="button"
              onClick={() => setShowLinkMenu(!showLinkMenu)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu-icon lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
            <AnimatePresence>
              {showLinkMenu ? (
                <motion.ul
                  className="fixed top-0 -right-full z-10 grid min-h-dvh w-full place-content-center place-items-center gap-8 rounded bg-white/75 px-2 py-1 text-xl font-medium uppercase backdrop-blur-md"
                  initial={{ right: -400 }}
                  animate={{ right: 0 }}
                  exit={{ right: -400 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                >
                  <button
                    type="button"
                    className="absolute top-8 left-8"
                    onClick={() => setShowLinkMenu(!showLinkMenu)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-x-icon lucide-x"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                  <NavLinks langName={langName} />
                </motion.ul>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
