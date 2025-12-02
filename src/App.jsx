import React from "react";
import Container from "./components/Container";
import Flex from "./components/Flex";
import Image from "./components/Image";
import Button from "./components/Button";
import ListItem from "./components/ListItem";
import Paragraph from "./components/Paragraph";

import logo from "./assets/logo.png";
import bannerphoto from "./assets/bannerphoto.png";
import Success from "./components/Success";
import Navbar from "./layout/Navbar";
import Banner from "./layout/Banner";




const App = () => {
  return (
    <>
     <Navbar/>
     <Banner/>
 


 
        
      
      <div className="mt-[150px]">
        <Container>
          <div className="w-[1320px] h-[300px]  rounded-3xl bg-[#00000011]">
            <Flex>
              <div className="w-[40%] mt-[86px] ml-[50px]">
                <h3 className="text-[25px] font-medium font-['Inter'] text-[#6A4DF4]">Our Success</h3>
                <h1 className="text-[35px] w-[387px] mt-[15px] font-semibold leading-[120%] font-['Inter'] text-[#000000]">West cost Brand makers-Global Edge</h1>

              </div>
              <div className="w-[60%] justify-between mt-[20px]">
                <Flex >
                  <div className=" mt-[60px] w-[33%]">
                    <h1 className="text-[40px] font-bold">200+</h1>
                    <p className="text-[14px] text-gray-600 mt-1">Customer Satisfied</p>

                    <div className="flex  mt-2">
                      <img className="w-8 h-8 rounded-full -ml-2" src="https://i.pravatar.cc/40?img=1" />
                      <img className="w-8 h-8 rounded-full -ml-2" src="https://i.pravatar.cc/40?img=2" />
                      <img className="w-8 h-8 rounded-full -ml-2" src="https://i.pravatar.cc/40?img=3" />
                      <img className="w-8 h-8 rounded-full -ml-2" src="https://i.pravatar.cc/40?img=4" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className=" mt-[60px] w-[33%]">
                    <h1 className="text-[40px] font-bold">4.5</h1>
                    <p className="text-[14px] text-gray-600 mt-1">200+ Avg rating</p>

                    <div className="flex  mt-2">
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className=" mt-[60px] w-[33%]">
                    <h1 className="text-[40px] font-bold">351+</h1>
                    <p className="text-[14px] text-gray-600 mt-1">Project Delivered</p>

                    <a
                      href="#"
                      className="text-[#6A4DF4] underline text-[14px] mt-2 inline-block"
                    >
                      See Works
                    </a>
                  </div>
                </Flex>

              </div>


            </Flex>



          </div>

        </Container>

      </div>
    </>
  );
};

export default App;
