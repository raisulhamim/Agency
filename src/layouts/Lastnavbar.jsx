import React from 'react'
import Container from "../components/Container";
import Image from '../components/Image';
import Paragraph from '../components/Paragraph'

import logo from "../assets/logo.png";
import ListItem from "../components/ListItem";
import Flex from '../components/Flex';

const Lastnavbar = () => {
  return (
    <section className='pt-[145px] pb-[45px]'>
        <Container>
           <Flex>
             <div className='w-[38%]'>
                <Image src={logo} />
                <Paragraph className="w-[356px] pt-8">
                    I had a good experience while using this app, what fascinated me was the
                     live tracking feature There are many variations of passages of Lorem Ipsum available,
                      but the majority.
                </Paragraph>
            </div>
            <div className='w-[15%] '>
                <h3 className="text-[20px] font-semibold font-['Inter'] pb-10">About</h3>
                  <ul >
              <ListItem className="py-2 hover-none" text="About Us" />
              <ListItem className="py-2 hover-none" text="Features" />
              <ListItem className="py-2 hover-none" text="News" />
              <ListItem className="py-2 hover-none" text="Careers" />
           
            </ul>
            </div>
            <div className='w-[16%]'>
                <h3 className="text-[20px] font-semibold font-['Inter'] pb-10">Company</h3>
                  <ul className=" gap-10">
              <ListItem className="py-2 hover-none" text="Our Team" />
              <ListItem className="py-2 hover-none" text="Partner With Us" />
              <ListItem className="py-2 hover-none" text="FAQ" />
              <ListItem className="py-2 hover-none" text="Blog" />
              
            </ul>
            </div>
            <div className='w-[16%]'>
               <h3 className="text-[20px] font-semibold font-['Inter'] pb-10">Support</h3>
                  <ul className=" gap-10">
              <ListItem className="py-2 hover-none" text="About" />
              <ListItem className="py-2 hover-none" text="Support Center" />
              <ListItem className="py-2 hover-none" text="Feedback" />
              <ListItem className="py-2 hover-none" text="Contact Us" />
              <ListItem className="py-2 hover-none" text="Accesbility" />
            </ul>
            </div>
            <div className='w-[15%]'>
               <h3 className="text-[20px] font-semibold font-['Inter'] pb-10">Get in touch</h3>
                  <ul className=" gap-10">
              <ListItem className="py-2 hover-none" text="info@gmail.com" />
              <ListItem className="py-2 hover-none" text="+88 0121 0212" />
             
            </ul>
            </div>
           </Flex>
        </Container>
    </section>
  )
}

export default Lastnavbar