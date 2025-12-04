import React from 'react'
import Paragraph from './Paragraph'

const Card = ({ src, alt }) => {
    return (
        <div className="
      w-[410px] h-[400px] p-[30px] bg-white rounded-2xl 
      flex flex-col items-center text-center transition-all duration-300
      hover:shadow-2xl hover:bg-white
      group
    ">

            {/* Image – hidden by default, visible on hover */}
            <img
                className="w-[30%] h-[35%] mx-auto mb-[20px] opacity-0 scale-75 transition-all duration-300 
               group-hover:opacity-100 group-hover:scale-100
                  /* FIX: Height added */"
                src={src}
                alt={alt}
            />


            <h1 className="text-[25px] font-bold mb-[10px]">{alt}</h1>

            <Paragraph className="w-[326px] leading-[26px]">
                There are many variations of passages of Lorem Ipsum available,
                but themajority  have suffered alteration in
                some form, by injected humour, or randomised words which don't look.
            </Paragraph>

        </div>
    );
}

export default Card;



