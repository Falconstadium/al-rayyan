import { Link } from 'react-router-dom';
import { langList } from '../lib';
import { resources } from '../resources/SharedResources';
import { useState } from 'react';
import { NavLinks } from './NavLinks';

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
  pagePath = pagePath.split('/')[1];
  if (!pagePath) {
    pagePath = 'home';
  }

  const [show, setShow] = useState(false);

  return (
    <header className=" px-6 shadow py-4 font-winky">
      <nav className="flex items-center justify-between md:max-w-3xl lg:max-w-5xl mx-auto">
        <Link to={'/' + lang} className="font-semibold text-xl capitalize">
          {resources[langName].logo}
        </Link>

        <ul className="flex items-center gap-4 uppercase font-medium">
          <NavLinks langName={langName} />
        </ul>
        <div className="relative">
          <button type="button" onClick={() => setShow(!show)}>
            {langFullName}
          </button>
          {show ? (
            <div className="absolute top-12 px-2 right-3 bg-neutral-200 rounded-sm ">
              {langKeys.map((l) => (
                <div key={l} className="grid gap-2 text-center">
                  <a href={'/' + l + pathName}>{langList[l]}</a>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
