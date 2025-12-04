import React from 'react'
import Heading from '../components/Heading'
import Container from '../components/Container'
import Paragraph from '../components/Paragraph'
import Flex from '../components/Flex'
import Card from '../components/Card'

// images import
import service1 from '../assets/serviceone.png'
import service2 from '../assets/servicetwo.png'
import service3 from '../assets/servicethree.png'
import service4 from '../assets/servicefour.png'
import service5 from '../assets/servicefive.png'
import service6 from '../assets/servicesix.png'


const Service = () => {
    return (
        <section className='mt-[150px]'>
            <Container>

                {/* Heading Section */}
                <div className="flex flex-col items-center text-center">
                    <Heading text="Our Provided Services" />
                    <Paragraph className="w-[609px] pt-5 leading-[26px]">
                        There are many variations of passages of Lorem Ipsum available, but themajority have suffered alteration in some form.
                    </Paragraph>
                </div>

                {/* Service Cards */}
                <Flex className="flex flex-wrap justify-center gap-[40px] mt-[50px]">
                    <Card src={service1} alt="Web Design" />
                    <Card src={service2} alt="UI/UX Design" />
                    <Card src={service3} alt="Web Development" />
                    <Card src={service4} alt="Motion Graphics" />
                    <Card src={service5} alt="3D Animation" />
                    <Card src={service6} alt="Digital Marketing" />
                </Flex>


            </Container>
        </section>
    )
}

export default Service
