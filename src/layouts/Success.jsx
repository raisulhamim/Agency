import React from 'react'
import Container from "../components/Container";
import Flex from "../components/Flex";
import Countsuccess from "../components/Countsuccess"
import Image from '../components/Image';
import profileimage from "../assets/profileimage.png"
import { FaStar } from "react-icons/fa";



const Success = () => {
  return (
    <section>
          
   <Container>
  <div className="md:w-[1320px] h-[300px] rounded-3xl bg-[#f5f2ff] mx-auto flex pt-[70px] ">

    {/* Left Section */}
    <div className="w-[40%] pl-[50px]">
      <h3 className="text-[25px] font-medium text-[#6b47ff]">Our Success</h3>
      <h1 className="text-[35px] font-semibold leading-[120%] w-[387px] mt-[15px] text-black">
        West cost Brand makers-Global Edge
      </h1>
    </div>

    {/* Right Section */}
    <div className="w-[60%] flex  gap-[110px]">

      <div>
        <Countsuccess text="200+" retext="Customer Satisfied" />
        <Image src={profileimage}/>
      </div>

      <div>
        <Countsuccess text="4.5" retext="200+ Avg rating" />
        <ul className='flex gap-[5px]'>
          <li className='text-[#FFAC4A] text-[20px]'><FaStar /></li>
          <li className='text-[#FFAC4A] text-[20px]'><FaStar /></li>
          <li className='text-[#FFAC4A] text-[20px]'><FaStar /></li>
          <li className='text-[#FFAC4A] text-[20px]'><FaStar /></li>
          <li className='text-[#FFAC4A] text-[20px]'><FaStar /></li>
       
        </ul>
      </div>

      <div>
        <Countsuccess text="351+" retext="Project Delivered" />
        <a className="text-[20px] font-['Inter'] font-medium text-[#6A4DF4] " href="">See Works</a>
      </div>
    </div>

  </div>
</Container>

    </section>
  )
}

export default Success