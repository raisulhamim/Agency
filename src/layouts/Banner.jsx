import React from "react";
import Container from "../components/Container";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import Image from "../components/Image";
import bannerphoto from "../assets/bannerphoto.png";
import Flex from "../components/Flex";

const Banner = () => {
  return (
    <section className="py-[80px]">
      <Container>
        <Flex className="items-center">

  
          <div className=" w-[50%]">
            <h1 className="text-[75px] font-['Inter'] leading-[120%] font-bold w-[636px] text-[#111]">
              We Help brands
              <br />
              with high quality services
            </h1>

            <Paragraph className="w-[604px] mt-10 mb-[30px] leading-[26px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look.
            </Paragraph>

            <Button text="Get Started" />
         </div>

          {/* RIGHT IMAGE AREA */}
          <div className=" w-[50%]">
            <Image src={bannerphoto} />
          </div>

       </Flex>
      </Container>
    </section>
  );
};

export default Banner;
