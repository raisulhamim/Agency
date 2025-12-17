import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

import AgencCard from "../components/Agencard";
import Image from "../components/Image";

import iconone from "../assets/iconone.png"; // <-- Make sure file exists
import icontwo from "../assets/icontwo.png"; // <-- Make sure file exists
import iconthree from "../assets/iconthree.png"; // <-- Make sure file exists
import agencbanner from "../assets/agencbanner.png"; // <-- Make sure file exists
import Flex from './../components/Flex';

const Agenc = () => {
  return (
    <section className="py-10 md:pb-[150px]">
      <Container>
       <Flex className='md:items-end'>
         <div className="lg:w-7/12">
          
          <Heading
            className="md:w-[480px] w-[300px]"
            text="Why You Should Choose Agenc"
          />

         
          <Paragraph className="md:w-[500px] leading-[26px] mt-4">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly believable.
          </Paragraph>

          
          <div className="mt-10 lg:flex">
            <AgencCard
            className="mr-[80px]"
              src={iconone}
              title="Innovative Ideas"
              desc="Because each project is different, we adapt to your business model."
            />
            <AgencCard
            className="mt-10 mb-3"
              src={icontwo}
              title="Dedicated Support"
              desc="We provide 24/7 support for all our clients and serve them professionally."
            />
          </div>
           <div className="ml-[200px]">
             <AgencCard
             
              src={iconthree}
              title="Honest Pricing"
              desc="Pricing on projects are based on various analyzes and are cost effective."
            />
           </div>
        </div>
        <div className="md:w-5/12">
          <Image src={agencbanner}/>
        </div>
       </Flex>
      </Container>
    </section>
  );
};

export default Agenc;
