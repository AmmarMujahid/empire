import React from "react";
import Image from "next/image";
import AboutCard from "./aboutcard";
import { Inventory, Label, Ship } from "./assets";

const AboutUs = () => {
  return (
    <section className="container mx-auto">
      <div className="flex justify-between items-center">
        <div className="relative">
          <div className="absolute -right-36 top-6">
            <div className="w-[136px] h-[136px] rounded-full bg-white/[18%] absolute -top-14 left-28"></div>
            <div className="w-[230px] h-[230px] rounded-full bg-primaryColor flex flex-col gap-[6px] justify-center items-center">
              <h4 className="text-white text-[38px] text-center leading-0.45 font-bold">
                HIGH Quality
              </h4>
              <span className="text-white leading-0.25 font-medium">
                FBA Prep Services
              </span>
            </div>
            <div className="w-[48px] h-[48px] rounded-full bg-white/[18%] absolute -bottom-3 right-20"></div>
          </div>
          <Image src="/courier.png" alt="courier" width={414} height={723} />
          <div className="rounded-xl"></div>
        </div>

        <div className="flex flex-col gap-[68px]">
          <div className="flex flex-col gap-[8px]">
            <div className="flex gap-[7px] mb-[12px]">
              <div className="border-b-2 border-primaryColor w-8"></div>
              <span className="text-primaryColor uppercase text-[18px] font-bold">
                About Us
              </span>
            </div>
            <h3 className="text-[40px] font-bold uppercase">What We do</h3>
            <p>
              Empire FBA Prep Services In USA &Canada specializes in providing
              world <br /> class prep solutions for your Amazon FBA business.{" "}
            </p>
          </div>

          <div className="flex flex-col gap-[40px] max-w-[600px]">
            <AboutCard
              icon=<Inventory />
              title="Recieve Your Inventory"
              description="Send your products, packaging and inserts directly to one of our
            three locations strategically located in California, New York or
            Toronto Canada"
            />

            <AboutCard
              icon=<Label />
              title="Prep and Label"
              description="Our team will inspect all items before carefully wrapping, adding inserts, packing and attaching all the necessary labels required for delivery and receipt by Amazon"
            />

            <AboutCard
              icon=<Ship width="43" height="28" />
              title="Ship to Amazon"
              description="Our staff of trained experts will complete your shipping plan, arrange pickup and delivery directly to your assigned Amazon fulfillment center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
