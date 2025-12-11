import React from "react";
import Container from "../components/Container";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import Image from "../components/Image";
import bannerphoto from "../assets/bannerphoto.png";
import Flex from "../components/Flex";

const Banner = () => {
  return (
    <section className="py-10 md:py-[80px] px-2 lg:px-5">
      <Container>
        <Flex className="items-center flex-col lg:flex-row gap-10 lg:gap-0">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[50%] text-center lg:text-left">

            <h1 className="text-[40px] sm:text-[45px] md:text-[55px] lg:text-[65px] 
            font-['Inter'] leading-[120%] font-bold text-[#111]">
              We Help brands
              <br />
              with high quality services
            </h1>

            <Paragraph className="w-full md:w-auto lg:w-[90%] my-5 leading-[26px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look.
            </Paragraph>

            <Button text="Get Started" className="mt-4" />
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-[50%] flex justify-center lg:justify-end">
            <Image className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[90%]" src={bannerphoto} alt="Banner" />
          </div>

        </Flex>
      </Container>
    </section>
  );
};

export default Banner;

