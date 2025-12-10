import React from 'react'

const Button = ({ text, className }) => {
  return (
    <button
      className={` 
        bg-[#6A4DF4] 
        py-[10px] sm:py-[12px] md:py-[15px]   /* Responsive Padding */
        px-[28px] sm:px-[36px] md:px-[42px]   /* Responsive Horizontal Padding */
        
        text-base sm:text-lg md:text-xl       /* Responsive Text Size */
        text-white font-semibold font-['Inter']

        rounded-[8px] sm:rounded-[10px]       /* Responsive Border Radius */

        hover:bg-[#FFC44A] hover:text-black 
        duration-500
        
        ${className}
      `}
    >
      {text}
    </button>
  )
}

export default Button
