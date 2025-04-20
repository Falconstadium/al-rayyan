import { Link } from "react-router-dom";
import { resources } from "../resources/SharedResources";
import { NavbarProps } from "./Navbar";

export const NavLinks = ({ langName }: NavbarProps) => {
  let lang = langName;
  let pagePath = window.location.pathname.split(lang)[1];
  pagePath = pagePath.split("/")[1];
  if (!pagePath) {
    pagePath = "home";
  }

  const links = [
    { id: 1, path: "/", href: `${resources[lang].home}` },
    { id: 2, path: "/about", href: `${resources[lang].about}` },
    { id: 3, path: "/contact", href: `${resources[lang].contact}` },
  ];

  return (
    <>
      {links.map((link) => (
        <li key={link.id}>
          <Link
            to={"/" + lang + link.path}
            className="rounded px-2 py-1 transition-colors duration-200 ease-in-out hover:bg-slate-900 hover:text-white"
          >
            {link.href}
          </Link>
        </li>
      ))}
    </>
  );
};
