import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import logo from "../assets/logo.png";
import ListItem from "../components/ListItem";
import Button from "../components/Button";

const Navbar = () => {
  return (
    <nav className="py-10">
      <Container>
        <Flex className="justify-between items-center ">
          <div>
            <img src={logo} />
          </div>

          <div>
            <ul className="flex gap-10">
              <ListItem text="Home" />
              <ListItem text="About" />
              <ListItem text="Service" />
              <ListItem text="Careers" />
              <ListItem text="Contact" />
            </ul>
          </div>

          <div>
            <Button text="Contact" />
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
