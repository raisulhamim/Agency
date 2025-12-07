import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

import AgencCard from "../components/Agencard";

import iconone from "../assets/iconone.png"; // <-- Make sure file exists

const Agenc = () => {
  return (
    <section>
      <Container>
        <div>
          
          <Heading
            className="w-[480px]"
            text="Why You Should Choose Agenc"
          />

         
          <Paragraph className="w-[500px] leading-[26px] mt-4">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly believable.
          </Paragraph>

          
          <div className="mt-10">
            <AgencCard
              src={iconone}
              title="Innovative Ideas"
              desc="Because each project is different, we adapt to your business model."
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Agenc;
