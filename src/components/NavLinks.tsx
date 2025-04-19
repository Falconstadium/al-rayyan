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
  return (
    <>
      <li>
        <Link to={"/" + lang}>{resources[lang].home}</Link>
      </li>
      <li>
        <Link to={"/" + lang + `/${resources[lang].about}`}>
          {resources[lang].about}
        </Link>
      </li>
      <li>
        <Link to={"/" + lang + `/${resources[lang].contact}`}>
          {resources[lang].contact}
        </Link>
      </li>
    </>
  );
};
