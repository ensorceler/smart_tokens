import React from "react";
import sitelogo from "../public/smart-contracts.png";
import NextImage from "next/image";
import { BsFillSunFill, BsFillMoonStarsFill, BsGithub } from "react-icons/bs";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    const nextTheme = theme == "light" ? "dark" : "light";
    setTheme(nextTheme);
  };
  return (
    <div className="w-full h-12 pl-4 border-b border-zinc-300 flex flex-row gap-2 justify-between">
      <div aria-label="logo container" className="flex gap-3">
        <button>
          <NextImage src={sitelogo} height="40px" width="40px" />
        </button>
        <h1 className="pt-2 text-lg text-rose-500 hover:cursor-pointer">
          Melon Smart Tokens
        </h1>
      </div>
      <div
        aria-label="rightside icons"
        className="flex flex-row justify-center items-center gap-8 pr-8"
      >
        <BsFillSunFill
          //onClick={toggleTheme}
          className="text-rose-400 hover:cursor-pointer"
          fontSize={20}
        />
        <BsGithub
          className="text-rose-400 hover:cursor-pointer"
          fontSize={22}
        />
      </div>
    </div>
  );
};

export default Navbar;
