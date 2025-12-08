import React from 'react';

const Developmentright = () => {
  return (
    <div className="w-[536px] h-[600px] bg-white rounded-[30px] text-left px-[40px] pt-[40px] shadow-md">
      
      <h3 className="text-[30px] font-bold font-['Inter'] text-[#151515] text-center">
        Get a free quote now
      </h3>

      {/* Name */}
      <label className="text-[16px] font-medium font-['Inter'] mt-6 block text-[#151515]">
        Name
      </label>
      <input 
        type="text" 
        placeholder="Enter your name"
        className="w-[450px] h-[64px] border border-[#E5E5E5] rounded-[10px] mt-2 px-4 text-[15px] outline-none focus:border-[#7C3AED]"
      />

      {/* Email */}
      <label className="text-[16px] font-medium font-['Inter'] mt-6 block text-[#151515]">
        Email
      </label>
      <input 
        type="email" 
        placeholder="Enter your email"
        className="w-[450px] h-[64px] border border-[#E5E5E5] rounded-[10px] mt-2 px-4 text-[15px] outline-none focus:border-[#7C3AED]"
      />

      {/* Phone */}
      <label className="block text-[16px] font-medium font-['Inter'] mt-6 text-[#151515]">
        Phone
      </label>
      <input 
        type="text" 
        placeholder="Enter your phone number"
        className="w-[450px] h-[64px] border border-[#E5E5E5] rounded-[10px] mt-2 px-4 text-[15px] outline-none focus:border-[#7C3AED]"
      />

      {/* Button */}
      <button className="w-full h-[56px] bg-[#6C4BFF] text-white rounded-[10px] mt-8 text-[16px] font-semibold hover:bg-[#FFC44A] hover:text-black duration-500 transition-all">
        Get Pricing Now
      </button>

    </div>
  );
};

export default Developmentright;
