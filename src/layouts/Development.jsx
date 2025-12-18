import React from 'react'
import Container from '../components/Container'
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Flex from '../components/Flex';
import Developmentright from '../components/Developmentright';

const Development = () => {
  return (
   <section className='bg-[#F3F3F3] py-[150px] '>
    <Container>
      <Flex>

        <div className='md:w-6/12 mt-[157px]'>
                <Heading
            className="w-[450px]"
            text="We Do design, Code & Development"
          />

         
          <Paragraph className="w-[514px] leading-[26px] mt-4">
          I had a good experience while using this app, what fascinated me was the 
          live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.
          </Paragraph>
          <Paragraph className="w-[526px] leading-[26px] mt-4">
            There are many variations of passages of Lorem Ipsum available,
             but themajority  have suffered alteration in some form.
          </Paragraph>

        </div>
        <div className='md:w-6/12'>
        <Developmentright/>
        </div>
      </Flex>
    </Container>
   </section>
  )
}

export default Development