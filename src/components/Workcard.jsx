import React from "react";

const Workcard = ({ src, heading, paragraph }) => {
  return (
    <div className="md:w-[424px] h-[457px] bg-white rounded-[20px] drop-shadow-md hover:shadow-xl transition-shadow duration-300  flex flex-col items-center text-center">

      {src && (
        <img
          src={src}
          alt="card-img"
          className="w-full  object-cover rounded-[16px]"
        />
      )}

      {heading && (
        <h2 className="text-[20px] font-bold font-['Inter'] text-[#151515] pt-7 pb-4 ">
          {heading}
        </h2>
      )}

      {paragraph && (
        <p className="text-[16px] w-[315px] text-gray-600">{paragraph}</p>
      )}
    </div>
  );
};

export default Workcard;

