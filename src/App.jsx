import React from "react";
import Container from "./components/Container";
import Flex from "./components/Flex";
import Image from "./components/Image";
import Button from "./components/Button";
import ListItem from "./components/ListItem";

import logo from "./assets/logo.png";

const App = () => {
  return (
    <>
      <div className="py-5">
        <Container>
         <Flex className="justify-between">

    {/* FULL LOGO IMAGE */}
    <Image src={logo} className="w-[240px] h-auto" />

    {/* Menu */}
    <ul className="flex mt-[21px] gap-10">
        <ListItem text="Home" active={true} />
        <ListItem text="About" />
        <ListItem text="Service" />
        <ListItem text="Careers" />
        <ListItem text="Contact" />
    </ul>

    {/* Contact button */}
    <Button text="Contact" />

</Flex>

        </Container>
      </div>
    </>
  );
};

export default App;
