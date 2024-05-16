import React from "react";
import TeamCard from "./teamcard";

const Team = () => {
  return (
    <section className="bg-primaryColor">
      <div className="container mx-auto pt-[85px] pb-[100px] flex flex-col gap-[94px] justify-center items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-white text-[40px] font-bold">OUR TEAM</h2>
          <p className="font-medium leading-0.26 text-white text-center">
            Empire FBA Prep services provide reliable Amazon FBA packaging and
            Prep services Ontario, California, <br /> Toronto, and Canada.
            Packaging is imperative to making a huge first impression with
            customers.
          </p>
        </div>

        <div className="flex items-center max-md:flex-col gap-[60px] lg:gap-[100px] xl:gap-[200px]">
          <div className="shrink-0">
            <TeamCard
              picture="/team-1.png"
              name="Nima Hassanpour"
              designation="President"
            />
          </div>

          <div className="shrink-0">
            <TeamCard
              picture="/team-2.png"
              name="John Soos"
              designation="Chief Operating Officer"
            />
          </div>

          <div className="shrink-0">
            <TeamCard
              picture="/team-1.png"
              name="Nima Hassanpour"
              designation="President"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
