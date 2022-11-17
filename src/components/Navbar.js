import React from "react";

import logo from "../assets/img/eth.png";
import arrowIcon from "../assets/img/arrow.svg";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between py-[43px] px-[34px]">
      <div className="flex items-center font-medium">
        <img alt="logo" src={logo} className="w-[50px]" />
        <p className="text-[25px]">Wrapped Domains</p>
      </div>
      <div className="flex flex-row gap-x-6 items-center">
        {/* <p className="text-navColor invisible sm:visible text-navSize leading-6">
          Doc
        </p> */}
        <a
          href="https://docs.wrapped.domains/"
          target="_blank"
          rel="noreferrer"
          className="text-navColor invisible sm:visible text-navSize leading-6"
        >
          Doc
        </a>
        {/* <p className="text-navColor invisible sm:visible text-navSize leading-6">
          FAQs
        </p> */}
        <div>
          <a
            href="https://wrapped-nameservice.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="text-[#2563eb] inline-block"
          >
            Open App
          </a>
          <img alt="arrow" src={arrowIcon} className="w-[24px] inline-block" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
