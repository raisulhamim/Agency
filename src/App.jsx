import React from "react";
import Container from "./components/Container";
import Flex from "./components/Flex";
import Image from "./components/Image";
import Button from "./components/Button";
import ListItem from "./components/ListItem";
import Paragraph from "./components/Paragraph";

import logo from "./assets/logo.png";
import bannerphoto from "./assets/bannerphoto.png";


const App = () => {
  return (
    <>
      {/* NAVBAR */}
      <div className="py-5">
        <Container>
          <Flex className="justify-between">
            <Image src={logo} className="w-[205px]" />

            <ul className="flex gap-10 mt-[15px]">
              <ListItem text="Home" active={true} />
              <ListItem text="About" />
              <ListItem text="Service" />
              <ListItem text="Careers" />
              <ListItem text="Contact" />
            </ul>

            <Button text="Contact" />
          </Flex>
        </Container>
      </div>


      <div className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

            <div className="mr-[74px] mt-[17px]">
              <h1 className="text-[75px] font-Inter leading-[120%]  font-bold w-[636px]  text-[#111]">
                We Help brands
                with high quality services
              </h1>

              <Paragraph className="w-[590px] mt-[51px] mb-[30px] leading-[26px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look.
              </Paragraph>


              <Button text="Get Started" />
            </div>

            <div className="relative w-[650px]">


              <Image src={bannerphoto} />


            </div>



          </div>
        </Container>
      </div>
      <div className="mt-[150px]">
        <Container>
          <div className="w-[1320px] h-[300px]  rounded-3xl bg-[#00000011]">
            <Flex>
              <div className="w-[40%] mt-[86px] ml-[50px]">
                <h3 className="text-[25px] font-medium font-['Inter'] text-[#6A4DF4]">Our Success</h3>
                <h1  className="text-[35px] w-[387px] mt-[15px] font-semibold leading-[120%] font-['Inter'] text-[#000000]">West cost Brand makers-Global Edge</h1>

              </div>
            </Flex>

          </div>
        </Container>

      </div>
    </>
  );
};

export default App;
