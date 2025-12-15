import React from 'react'

const Heading = ({text, className}) => {
  return (
   <h1 className={`text-3xl md:text-[45px] font-bold font-['Inter'] text-[#151515] ${className}`}>{text}</h1>
  )
}

export default Heading