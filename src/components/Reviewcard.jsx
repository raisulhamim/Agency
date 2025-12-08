import React from 'react'
import Image from '../components/Image';
import Flex from './Flex';
import { FaStar } from "react-icons/fa";
const Reviewcard = ({src,heading,paragraph,className,profile ,profilefix,profession}) => {
  return (
        <div className={`w-[424px] pt-14 pl-14 h-[422px] bg-white rounded-[20px]  hover:shadow-xl transition-shadow 
        duration-300    ${className}`}>

      {src && (
        <img
          src={src}
          alt="card-img"
          
        />
      )}


      {paragraph && (
          <p className="text-[16px] pt-5 w-[307px] text-gray-600">{paragraph}</p>
        )}
          <div className='pt-5 pb-8'>
        
        <ul className='flex gap-[5px]'>
          <li className='text-[#F9BD2C] text-[20px]'><FaStar /></li>
          <li className='text-[#F9BD2C] text-[20px]'><FaStar /></li>
          <li className='text-[#F9BD2C] text-[20px]'><FaStar /></li>
          <li className='text-[#F9BD2C] text-[20px]'><FaStar /></li>
          <li className='text-[#F9BD2C] text-[20px]'><FaStar /></li>
        
       
        </ul>
      </div>
     <Flex className="items-center gap-5">
         <Image className={`${profilefix}`} src={profile}/>
       <div className='flex flex-col'>
         {heading && (
          <h2 className="text-[20px] font-semibold font-['Inter'] text-[#151515] ">
            {heading}
              <p className="text-[16px] w-[307px] text-gray-600">{profession}</p>
          </h2>
          
        )}
       </div>
          
     </Flex>
      
    </div>


  )
}

export default Reviewcard