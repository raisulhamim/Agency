import React from 'react'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Container from '../components/Container'
import Workcard from '../components/Workcard'
import workone from '../assets/workone.png'
import worktwo from '../assets/worktwo.png'
import workthree from '../assets/workthree.png'
import workfour from '../assets/workfour.png'
import workfive from '../assets/workfive.png'
import worksix from '../assets/worksix.png'
import Flex from '../components/Flex'
import ListItem from '../components/ListItem'



const Work = () => {
    return (
        <section className='py-10 md:py-[150px]'>
            <Container>
                <div>
                    <Heading className="text-center" text="Our Recent Work" />
                    <Paragraph className="md:w-[620px] mx-auto text-center pt-5">There are many variations of passages of Lorem Ipsum available,
                        but themajority  have suffered alteration in some form.</Paragraph>
                </div>
                <Flex className="px-3">

                    <ul className="flex gap-2 md:gap-[138px] text-center mx-auto pt-7 pb-12">
                        <ListItem text="All" />
                        <ListItem text="Mobile Design" />
                        <ListItem text="Web design" />
                        <ListItem text="Branding" />
                        <ListItem text="Illustration" />
                        <ListItem text="Digital Marketing" />
                    </ul>

                </Flex>
                <div>
                    <Flex className="flex-wrap gap-6">
                        <Workcard
                            src={workone}
                            heading="Task Management App"
                            paragraph="This is a task management application that can help you be more productive"
                        />
                          <Workcard
                            src={worktwo}
                            heading="Saas Landing Page Design"
                            paragraph="This is a task management application that can help you be more productive"
                        />
                          <Workcard
                            src={workthree}
                            heading="App Design"
                            paragraph="This is a task management application that can help you be more productive"
                        />
                          <Workcard
                            src={workfour}
                            heading="Landing Page Design"
                            paragraph="This is a task management application that can help you be more productive"
                        />
                          <Workcard
                            src={workfive}
                            heading="Dashboard Design"
                            paragraph="This is a task management application that can help you be more productive"
                        />
                          <Workcard
                            src={worksix}
                            heading="Web App Design"
                            paragraph="This is a task management application that can help you be more productive"
                        />
                        
                    </Flex>
                </div>

            </Container>
        </section>
    )
}

export default Work