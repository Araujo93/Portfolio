import React, { Dispatch } from "react";

// next
import Image from "next/image";

// assets
import { menu, close } from "@/public";

// constants
import { navLinks } from "@/constants";

type MobileNavProps = {
  toggle: boolean;
  setToggle: Dispatch<React.SetStateAction<boolean>>;
  active: string;
  setActive: Dispatch<React.SetStateAction<string>>;
};

const MobileNav = ({
  toggle,
  setToggle,
  active,
  setActive,
}: MobileNavProps) => {
  return (
    <div className="sm:hidden flex flex-1 justify-end items-center">
      <Image
        src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] object-contain cursor-pointer"
        onClick={() => setToggle(!toggle)}
        color="black"
      />

      <div
        className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-x1`}
      >
        <ul className="list-none flex justify-end items-start flex-col gap-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={() => {
                setActive(link.title);
                setToggle(!toggle);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
