import React from "react";
import Paragraph from "./Paragraph";

const Agencard = ({ src, title, desc,className }) => {
  return (
    <div className="bg-white p-5 sm:p-6 rounded-xl 
flex flex-col items-center md:items-start text-center md:text-left gap-3">

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

