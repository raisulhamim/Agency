import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Flex from '../components/Flex'
import Reviewcard from '../components/reviewcard'
import doublecou from "../assets/doublecou.png";
import pone from "../assets/pone.png";
import ptwo from "../assets/ptwo.png";
import pthree from "../assets/pthree.png";

const Review = () => {
  return (
   <section className='pb-[86px]'>
    <Container>
            <div>
                    <Heading className="text-center" text="Some Client Reviews" />
                    <Paragraph className="w-[620px] mx-auto text-center pt-5">There are many variations of passages of Lorem Ipsum available, 
                        but themajority  have suffered alteration in some form..</Paragraph>
                </div>
                <Flex className="justify-between">
                    <Reviewcard className="mt-[261px]"  src={doublecou} paragraph="I had a good experience while using this app, what fascinated me was the live tracking
                     feature There are many variations of passages of Lorem Ipsum available, but the majority."
                      profile={pone} heading="Eric Drake" profilefix="w-12 h-12" profession="Digital Marketor"/>
                    <Reviewcard className="mt-12" src={doublecou} paragraph="I had a good experience while using this app, what fascinated me was the live tracking
                     feature There are many variations of passages of Lorem Ipsum available, but the majority."
                      profile={ptwo} heading="Awlad Hossain" profilefix="w-12 h-12" profession="UX Researcher"/>
                    <Reviewcard className="mt-[261px]" src={doublecou} paragraph="I had a good experience while using this app, what fascinated me was the live tracking
                     feature There are many variations of passages of Lorem Ipsum available, but the majority."
                      profile={pthree} heading="Rosa Farmer" profilefix="w-12 h-12" profession="UI Designer"/>
                </Flex>
    </Container>
   </section>
  )
}

export default Review