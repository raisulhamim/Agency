import React from 'react'

const Button = ({text,className}) => {
  return (

    <button className={`bg-[#6A4DF4] py-[15px] px-[42px] text-white text-xl font-semibold font-["Inter"] rounded-[10px]
         hover:bg-[#FFC44A] hover:text-black duration-500 ${className} `}>{text}</button>
    
  )
}

export default Button