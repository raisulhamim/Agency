import React from 'react'

const Paragraph = ({ children, className }) => {
  return (
    <p className={`text-[16px] font-normal font-['Inter'] text-[#737373] ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
