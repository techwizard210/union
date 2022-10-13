import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between">
      <div>
        <p>Union</p>
      </div>
      <div>
        <p></p>
      </div>
      <div className="flex flex-row gap-x-10">
        <p className="text-navColor text-navSize">Blog</p>
        <p className="text-navColor text-navSize">Docs</p>
        <p className="">Open App</p>
      </div>
    </div>
  );
};

export default Navbar;
