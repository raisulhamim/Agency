import React from "react";
import Paragraph from "./Paragraph";

const Agencard = ({ src, title, desc }) => {
  return (
    <div
      className="w-[344px] h-[176px] bg-white gap-4 items-start"
    >
      {/* Icon */}
      <img
        src={src}
        alt="icon"
        className=""
      />

      {/* Text */}
      <div>
        <h3 className="text-[25px] font-['Inter'] mt-5 mb-2 font-bold text-[#151515]">
          {title}
        </h3>

        <Paragraph className="mt-2 w-[335px]">
          {desc}
        </Paragraph>
      </div>
    </div>
  );
};

export default Agencard;

