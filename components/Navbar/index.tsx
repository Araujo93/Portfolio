"use client";

import React, { useState } from "react";
import Link from "next/link";

import Image from "next/image";

import { logo, logotext } from "@/public/assets";

import { navLinks } from "@/constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav className="w-full flex items-center py-2 fixed top-0 bg-flashWhite sm:px-16 px-6 z-20">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-8"
          onClick={() => setActive("")}
        >
          <Image
            src={logo}
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />

          <Image
            src={logotext}
            alt="logo text"
            className="sm:w-[90px] sm:h-[90px] w-[85px] h-[85px] -ml-[0.6rem] object-contain"
          />
        </Link>

        <ul className=" gap-14 list-none hidden sm:flex flex-row mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-french" : "text-[#720419]"
              } hover:text-taupe text-[21px] font-medium font-mova
             uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
