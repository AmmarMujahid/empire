import React from "react";
import Button from "./Button";
import Link from "next/link";
import { Email, Location, Phone } from "./assets";
import Image from "next/image";

const quickLinks = [
  { title: "Home", id: "#home" },
  { title: "About Us", id: "#aboutus" },
  { title: "Our Services", id: "#ourservices" },
  { title: "Our Team", id: "#ourteam" },
  { title: "Contact Us", id: "#contactus" },
];

const Footer = () => {
  return (
    <footer className="bg-[#2E2E2E]">
      <div className="container mx-auto text-white">
        <div className="pt-[90px] pb-[55px] flex flex-col lg:flex-row justify-between items-start">
          <div className="flex flex-col gap-[24px] max-lg:mb-[60px]">
            <h4 className="text-[20px] font-bold">LOGO</h4>
            <p>
              USA & Canada specializes in providing world <br /> class prep
              solutions for your Amazon FBA <br /> business.
            </p>
            <Button tertiary title="Book Now" className="w-[162px]" />
          </div>

          <div className="max-lg:mb-[60px]">
            <h4 className="text-[20px] font-bold mb-[12px]">QUICK LINKS</h4>
            <ul>
              {quickLinks.map((item) => (
                <li
                  key={item.id}
                  className="leading-0.27 list-disc list-inside"
                >
                  <Link href={item.id}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-[17px] max-lg:mb-[60px]">
            <h4 className="text-[20px] font-bold mb-[10px]">OUR SERVICES</h4>

            <div className="flex gap-[18px] items-center">
              <Phone />
              <span>1 (877) 618-0069</span>
            </div>
            <div className="flex gap-[18px] items-center">
              <Email />
              <span>info@empireprepservices.com</span>
            </div>
            <div className="flex gap-[18px] items-center">
              <Location />
              <span>
                California: 4010 Valley Blvd Ste <br /> 108, Walnut, CA 91789
              </span>
            </div>

            <div className="flex gap-[12px] justify-center">
              <Image
                src="/instagram.svg"
                alt="instagram icon"
                width={27}
                height={27}
              />
              <Image
                src="/twitter.svg"
                alt="twitter icon"
                width={27}
                height={27}
              />
              <Image
                src="/linkedin.svg"
                alt="linkedin icon"
                width={27}
                height={27}
              />
              <Image
                src="/facebook.svg"
                alt="facebook icon"
                width={27}
                height={27}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-[22px] border-t-[1px] text-white text-[14px] font-bold">
        <div className="flex justify-between items-center container mx-auto">
          <p>Terms & Conditions</p>

          <p className="text-center">
            Copyright Notice: © 2022 | All Rights Reserved. Empire Prep Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
