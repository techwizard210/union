import React from "react";

import logo from "../assets/img/logo.png";
import arrowIcon from "../assets/img/arrow.svg";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between py-[43px] px-[34px]">
      <img alt="logo" src={logo} />
      <div className="flex flex-row gap-x-6 items-center">
        <p className="text-navColor invisible sm:visible text-navSize leading-6">
          Blog
        </p>
        <p className="text-navColor invisible sm:visible text-navSize leading-6">
          Docs
        </p>
        <div>
          <p className="text-[#2563eb] inline-block">Open App</p>
          <img alt="arrow" src={arrowIcon} className="w-[24px] inline-block" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
