import React from 'react'
import Container from "../components/Container";
import Countsuccess from "../components/Countsuccess";
import Image from "../components/Image";
import profileimage from "../assets/profileimage.png";
import {FaStar} from "react-icons/fa";

const Success = () => {
  return (
    <section className="py-12">
      <Container>
        <div
          className="
          bg-[#f5f2ff] mx-4 rounded-3xl
          px-6 py-10
          md:px-10 md:py-14
          flex flex-col gap-10
          md:flex-row md:items-center md:justify-between
        "
        >
          {/* Left Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-sm md:text-base font-medium text-[#6b5cff]">
              Our Success
            </h3>

            <h1
              className="
              mt-3
              text-xl sm:text-2xl md:text-3xl lg:text-4xl
              font-semibold leading-tight text-black
            "
            >
              West cost Brand makers-Global Edge
            </h1>
          </div>

          {/* Right Section */}
          <div
            className="
            md:w-1/2
            grid grid-cols-1
            sm:grid-cols-3
            md:gap-8
            gap-4
            text-center
          "
          >
            {/* Customer */}
            <div>
              <Countsuccess
                text="200+"
                retext="Customer Satisfied"
              />
              <Image
                src={profileimage}
                className="mx-auto w-12 md:mt-3"
              />
            </div>

            {/* Rating */}
            <div>
              <Countsuccess
                text="4.5"
                retext="200+ Avg rating"
              />
              <ul className="flex justify-center md:gap-1 md:mt-3">
                {[...Array(5)].map((_, i) => (
                  <li key={i} className="text-[#FFAC4A] text-sm md:text-lg">
                    <FaStar />
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div>
              <Countsuccess
                text="351+"
                retext="Project Delivered"
              />
              <a
                href="#"
                className="inline-block md:mt-3 text-xs font-medium text-[#404DF4]"
              >
                See Works
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Success;
