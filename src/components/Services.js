import React from "react";
import ServiceCard from "./servicecard";

const Services = () => {
  return (
    <section
      className="h-[658px] w-full pt-[73px] mb-[166px]"
      style={{ backgroundImage: "url(/services-background.png)" }}
    >
      <div className="container mx-auto flex flex-col gap-44">
        <div className="flex flex-col items-center">
          <h2 className="text-[40px] font-bold text-white">
            <span className="underline decoration-primaryColor">OUR</span> SERVICES
          </h2>

          <p className="text-center text-white leading-0.21 font-medium max-w-[932px]">
            Our Services: Empire FBA Prep Services In USA &amp; Canada
            specializes in providing world class prep solutions for your Amazon
            FBA business. Whether you are new to Amazon or need a 3rd party
            logistics specialist to help scale your growing business we have
            solutions to meet all of your FBA prep needs large or small.
          </p>
        </div>

        <div className="flex gap-[30px] justify-center items-center">
          <ServiceCard
            picture="/labeling.png"
            title="Labelling"
            description="Every unit, carton and pallet will be labeled by us as required. Rest
          easy knowing your shipments will arrive at their designated
          fulfillment centers as scheduled and on time"
          />

          <ServiceCard
            picture="/bubble-wrap.png"
            title="Bubble Wrap"
            description="Its crucial for inventory to arrive in pristine condition. All items will be carefully bubble wrapped and poly bagged as necessary to guarantee safe delivery"
          />

          <ServiceCard
            picture="/bundling.png"
            title="BUNDLING"
            description="You ve built the perfect bundle for your customers and every detail counts. Bundles will be packed by us according to current specifications as required by Amazon"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
