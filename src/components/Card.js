import React from "react";

const Card = (props) => {
  return (
    <div className="w-[100%] max-w-[446px] my-0 mx-auto p-[24px] rounded-2xl border-[#f5f5f4] border-[1px] text-center">
      {props.children}
    </div>
  );
};

export default Card;
