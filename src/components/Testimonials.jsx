import React from "react";
import { AiOutlineUser } from "react-icons/ai";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center pt-24 lg:pt-44 bg-white">
      <div>
        <h1 className="mb-14">
          <span className="nav-logo text-[#EF5A34] text-6xl">Testimony</span>{" "}
          <br />
          <span className="hero-title text-3xl">Happy Customer</span>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-20">
        <div className="flex flex-col items-center w-80 m-auto hero-description">
          <span>
            <AiOutlineUser size={80} color="#EF5A34" />
          </span>
          <p className="leading-8 text-center text-[#8F8F8F] pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            facilisis massa arcu, sed porta lorem dictum quis.
          </p>
          <h2 className="text-2xl pt-8">Ian Boner</h2>
          <p className="pt-2 text-xs tracking-widest">CUSTOMER</p>
        </div>
        <div className="flex flex-col items-center w-80 m-auto hero-description mt-6">
          <span>
            <AiOutlineUser size={80} color="#EF5A34" />
          </span>
          <p className="leading-8 text-center text-[#8F8F8F] pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            facilisis massa arcu, sed porta lorem dictum quis.
          </p>
          <h2 className="text-2xl pt-8">Jason McClean</h2>
          <p className="pt-2 text-xs tracking-widest">CUSTOMER</p>
        </div>
        <div className="flex flex-col items-center w-80 m-auto hero-description mt-6">
          <span>
            <AiOutlineUser size={80} color="#EF5A34" />
          </span>
          <p className="leading-8 text-center text-[#8F8F8F] pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            facilisis massa arcu, sed porta lorem dictum quis.
          </p>
          <h2 className="text-2xl pt-8">Mark Derson</h2>
          <p className="pt-2 text-xs tracking-widest">CUSTOMER</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
