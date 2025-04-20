import { AnimatePresence, motion } from "framer-motion";
import { NavLinks } from "./NavLinks";
import { useState } from "react";
import { NavbarProps } from "./Navbar";

export const NavMenu = ({ langName }: NavbarProps) => {
  const [showLinkMenu, setShowLinkMenu] = useState(false);

  return (
    <div className="relative block md:hidden">
      <button type="button" onClick={() => setShowLinkMenu(!showLinkMenu)}>
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
  );
};
