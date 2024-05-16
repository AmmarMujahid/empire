"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LogoBg, NavClose, NavOpen } from "./assets";

const navItems = [
  { title: "Home", id: "#home" },
  { title: "About Us", id: "#aboutus" },
  { title: "Our Services", id: "#ourservices" },
  { title: "Our Team", id: "#ourteam" },
  { title: "Contact Us", id: "#contactus" },
];

const PrimaryNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleNavClose = () => {
    setNavOpen(false);
  };

  return (
    <header className="bg-darkColor2 relative z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex">
          <div className="bg-white h-full px-[10px] py-[8px]">
            <Image
              src="/logo.svg"
              alt="logo"
              width={250}
              height={62}
              className="relative z-10"
            />
          </div>
          <div className="w-0 h-0 border-l-[0px] border-l-transparent border-b-[78px] border-b-white border-r-[70px] border-r-transparent"></div>
        </div>

        <ul className={`hidden lg:flex items-center gap-[30px]`}>
          {navItems.map((item) => (
            <li key={item.id} className="text-[18px] font-semibold text-white">
              <Link href={item.id}>{item.title}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navbar */}
        <ul
          className={
            navOpen
              ? "flex flex-col items-center absolute gap-[30px] bg-darkColor2 top-[78px] py-[30px] w-full right-0 left-0 ease-in duration-300 z-30 lg:hidden"
              : "flex flex-col items-center absolute gap-[30px] bg-darkColor2 top-[78px] left-[-100%] py-[30px] w-full right-0 ease-in duration-300 z-30 lg:hidden"
          }
        >
          {navItems.map((item) => (
            <li key={item.id} className="text-[18px] font-semibold text-white">
              <Link href={item.id}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <div className="lg:hidden" onClick={handleNavToggle}>
          {navOpen ? <NavClose /> : <NavOpen />}
        </div>
      </nav>

      {navOpen && (
        <div className="fixed inset-0 z-20" onClick={handleNavClose}></div>
      )}
    </header>
  );
};

export default PrimaryNavbar;
