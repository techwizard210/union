import React from "react";

const Card = (props) => {
  return (
    <div className="flex flex-col w-[100%] max-w-[446px] my-0 mx-auto p-[24px] rounded-2xl border-[#f5f5f4] border-[1px] items-center hover:cursor-pointer card-zoom">
      {props.children}
    </div>
  );
};

export default Card;
