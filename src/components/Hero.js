import React from "react";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="bg-primaryColor w-full h-[1224px] lg:h-[710px] mb-[120px] z-40 relative">
      <div className="w-[264px] h-[264px] rounded-full absolute -left-10 -top-10 -rotate-45 bg-gradient-to-b from-[#EF7B3E] to-[#F29462]/95"></div>

      <div className="container mx-auto flex flex-col gap-[36px] lg:flex-row justify-between items-center">
        <div className="z-20">
          <h1 className="text-[80px] font-extrabold leading-0.77 text-white">
            Empire FBA <br /> Prep Services <br /> In USA
          </h1>

          <p className="text-white font-medium mb-[26px]">
            USA & Canada specializes in providing world class prep solutions for{" "}
            <br />
            your Amazon FBA business.
          </p>

          <Button secondary title="Contact Us" className="px-[35px]" />
        </div>

        <div className="relative">
          <div className="w-[470px] h-[639px] rounded-t-full absolute bottom-0 right-4 z-10 bg-gradient-to-b from-[#F29462] to-[#F29462]/5"></div>
          <div className="w-[212px] h-[212px] rounded-full absolute bottom-10 -right-24 rotate-45 z-10 bg-gradient-to-b from-[#EF7B3E] to-[#F29462]/95"></div>
          <Image
            src="/hero.png"
            alt="hero"
            width={471}
            height={710}
            className="relative z-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
