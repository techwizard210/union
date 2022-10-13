import React from "react";

import logo from "../assets/img/logo.png";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between py-[43px] px-[34px]">
      <img alt="logo" src={logo} />
      <div className="flex flex-row gap-x-6">
        <p className="text-navColor invisible sm:visible text-navSize leading-6">Blog</p>
        <p className="text-navColor invisible sm:visible text-navSize leading-6">Docs</p>
        <p className="text-[#2563eb]">Open App</p>
      </div>
    </div>
  );
};

export default Navbar;
