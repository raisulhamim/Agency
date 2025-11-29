import React from 'react'
import Listitem from './components/Listitem'
import Button from './components/Button'
import Image from './components/Image';
import banner3 from './assets/banner3.png'
import Container from './components/Container';
import Flex from './components/Flex';

const App = () => {
  return (
    <Container>
      <Flex>
        <Listitem className="" text="Home" />
         <Button text="contact" />
         <Button text="Shop now" />
         <Button text="contact" />
       
      </Flex>
      
        <Image className="" src={banner3} alt="" />
    </Container>
  )
}

export default App