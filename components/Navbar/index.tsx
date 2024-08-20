"use client";

import React, { useState } from "react";

// components
import MobileNav from "./MobileNav";
import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="paddingX w-full flex items-center py-2 fixed top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Logo setActive={setActive} />

        <NavbarLinks active={active} setActive={setActive} />

        <MobileNav
          toggle={toggle}
          setToggle={setToggle}
          active={active}
          setActive={setActive}
        />
      </div>
    </nav>
  );
};

export default Navbar;
