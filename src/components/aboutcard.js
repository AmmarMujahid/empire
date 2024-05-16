import React from "react";
import { Inventory } from "./assets";

const AboutCard = ({icon, title, description }) => {
  return (
    <div className="flex gap-[17px] items-center">
      <span className="flex justify-center items-center shrink-0 bg-[#F3F3F3] rounded-full w-[82px] h-[82px]">
        {icon}
      </span>

      <div>
        <div className="">
          <h5 className="text-[20px] leading-0.25 font-bold uppercase">
            {title}
          </h5>
        </div>

        <div>
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
