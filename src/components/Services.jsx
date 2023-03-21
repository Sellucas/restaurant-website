import React from "react";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiCake2Line, RiRestaurantLine } from "react-icons/ri";
import Fade from "react-reveal/Fade";

const Services = () => {
  return (
    <div className="flex flex-col items-center mt-24 lg:mt-72">
      <Fade bottom distance='30%'>
        <div>
          <h1 className="mb-14">
            <span className="nav-logo text-[#EF5A34] text-6xl">Services</span>{" "}
            <br />
            <span className="hero-title text-3xl">Catering Services</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-20">
          <div className="flex flex-col items-center w-80 m-auto hero-description">
            <span>
              <RiCake2Line size={80} color="#EF5A34" />
            </span>
            <h2 className="text-2xl py-4">Birthday Party</h2>
            <p className="leading-8 text-center text-[#8F8F8F]">
              High quality service to make your birthday an unforgettable
              experience. Our team is prepared to help organize every detail of
              the menu.
            </p>
          </div>
          <div className="flex flex-col items-center w-80 m-auto hero-description mt-6">
            <span>
              <MdOutlinePeopleAlt size={80} color="#EF5A34" />
            </span>
            <h2 className="text-2xl py-4">Business Meetings</h2>
            <p className="leading-8 text-center text-[#8F8F8F]">
              Not only do we offer an exceptional dining experience, but we also
              provide an ideal space for business meetings.
            </p>
          </div>
          <div className="flex flex-col items-center w-80 m-auto hero-description mt-6">
            <span>
              <RiRestaurantLine size={80} color="#EF5A34" />
            </span>
            <h2 className="text-2xl py-4">Wedding Party</h2>
            <p className="leading-8 text-center text-[#8F8F8F]">
              Our restaurant offers a full Wedding Party service, with a highly
              skilled and experienced team to ensure your special day is
              perfect.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Services;
