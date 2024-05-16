import React from "react";
import { Email, Location, Phone } from "./assets";
import Button from "./Button";

const SecondaryNavbar = () => {
  return (
    <nav className="container mx-auto">
      <div className="grid grid-cols-2 gap-x-10 gap-y-3 xl:flex justify-center items-center my-[10px] px-[40px]">
        <div className="hidden sm:flex gap-[10px] items-center shrink-0">
          <Location className="shrink-0" />
          <span>California: 4010 Valley Blvd Ste 108, Walnut, CA 91789</span>
        </div>

        <div className="flex gap-[10px] items-center shrink-0">
          <Email className="shrink-0" />
          <span>info@empireprepservices.com</span>
        </div>

        <div className="hidden sm:flex gap-[10px] items-center shrink-0">
          <Phone className="shrink-0" />
          <span>1 (877) 618-0069</span>
        </div>

        <div className="shrink-0">
          <Button primary title="Book Now" className="px-[40px]" />
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
