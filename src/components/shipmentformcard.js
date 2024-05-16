import React from "react";
import { ShippingPlan } from "./assets";

const ShipmentFormCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-[34px]">{icon}</div>

      <div className="mb-[7px]">
        <span className="text-[18px] leading-0.25 font-bold text-center">
          {title}
        </span>
      </div>

      <div>
        <p className="leading-0.22 text-[#515151] text-center">{description}</p>
      </div>
    </div>
  );
};

export default ShipmentFormCard;
