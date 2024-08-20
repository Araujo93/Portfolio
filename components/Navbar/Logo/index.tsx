import React, { Dispatch } from "react";

import Link from "next/link";
import Image from "next/image";

import { logo, logotext } from "@/public";

type LogoProps = {
  setActive: Dispatch<React.SetStateAction<string>>;
};

const Logo = ({ setActive }: LogoProps) => {
  return (
    <Link
      href={"/"}
      className="flex items-center gap-2"
      onClick={() => {
        setActive("");
        window.scrollTo(0, 0);
      }}
    >
      <Image
        src={logo}
        alt="logo"
        className="w-8 h-8 object-contain text-black grayscale"
        color="black"
      />

      <Image
        src={logotext}
        alt="logo"
        className="sm:w-[60px] sm:h-[60px] w-[65px] h-[65px] object-contain grayscale"
      />
    </Link>
  );
};

export default Logo;
