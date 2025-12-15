import React from 'react'

const Listitem = ({text,className}) => {
  return (
      <li className={`text-xs md:text-lg text-[#737373] font-normal font-["Inter"] list-none md:hover:text-[#6A4DF4] 
      md:hover:font-bold duration-300 cursor-pointer ${className}`}>{text}</li>
  )
}

export default Listitem