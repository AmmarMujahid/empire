import React from "react";
import Button from "./Button";
import ShipmentFormCard from "./shipmentformcard";
import { Instruction, Ship, ShippingPlan } from "./assets";
import Image from "next/image";

const ShipmentForm = () => {
  return (
    <section className="container mx-auto mb-[68px]">
      <div className="flex flex-col gap-[66px]">
        <div className="flex flex-col gap-[17px] items-center">
          <h4 className="text-[40px] leading-0.53 font-bold">
            GET STARTED FOR AS LOW AS $0.50
          </h4>

          <h6 className="text-[18px] font-semibold leading-0.25">
            How it works: Complete our service request form and provide all the
            required details.
          </h6>

          <p className="leading-0.23 text-center">
            Once you are ready, send your products and custom packaging directly
            from your manufacturer or wholesaler to one of our three prep
            centers. Create an abbreviated shipping plan and grant Empire FBA
            Prep Services limited secure access via the Assistant Account on
            Amazon.
          </p>

          <Button primary title="SEND A SHIPMENT FORM" className="px-[28px]" />
        </div>

        <div className="flex ">
          <ShipmentFormCard
            icon={<ShippingPlan />}
            title="CREATE AN ABBREVITED SHIPPING PLAN"
            description="Create a new shipping plan in Seller Central. List the products you are sending along with quantities and then you are done!"
          />

          <Image src="/Arrow1.svg" alt="Arrow" width={294} height={39} />

          <ShipmentFormCard
            icon={<Instruction />}
            title="SEND US YOUR INSTRUCTION"
            description="Complete our service request form with detailed instructions or anything special youd like for us to do."
          />

          <Image src="/Arrow2.svg" alt="Arrow" width={294} height={39} />

          <ShipmentFormCard
            icon={<Ship width="134" height="85" />}
            title="WELL TAKE IT FROM THERE"
            description="Using your input our experts will carefully prepare your shipment start to finish with impeccable care and attention to detail."
          />
        </div>
      </div>
    </section>
  );
};

export default ShipmentForm;
