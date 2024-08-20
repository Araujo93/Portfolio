import React, { Dispatch } from "react";
import { navLinks } from "@/constants";

type NavbarLinksProps = {
  active: string;
  setActive: Dispatch<React.SetStateAction<string>>;
};

const NavbarLinks = ({ setActive, active }: NavbarLinksProps) => {
  return (
    <ul className="list-none hidden sm:flex flex-row gap-10">
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? "text-french" : "text-eerieBlack"
          } hover:text-taupe text-[21px] font-medium font-mova
        uppercase tracking-[3px] cursor-pointer nav-links`}
          onClick={() => setActive(link.title)}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
