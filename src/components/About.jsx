import React from "react";
import NumberDiv from "../controller/NumberDiv";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="flex flex-col max-w-[1500px] m-auto mt-40 h-full lg:mt-72 px-4">
      <div className="flex flex-col xl:flex-row">
        <div className="flex flex-row w-[50%] h-[480px] lg:w[400px]">
          <img
            src="../../public/images/about-1.jpeg"
            alt=""
            className="object-cover lg:mr-8 lg:w-[350px]"
          />
          <img
            src="../../public/images/about-2.jpeg"
            alt=""
            className="object-cover lg:w-[350px]"
          />
        </div>
        <Fade bottom distance="10%">
          <div className="text-[#23212B] lg:w-[50%] md:mx-20 lg:ml-40">
            <h1 className="my-8">
              <span className="nav-logo text-[#EF5A34] text-6xl">About</span>{" "}
              <br />
              <span className="hero-title text-3xl">
                SpiceRoute <br /> Restaurant
              </span>
            </h1>
            <p className="hero-description leading-8 mb-8 lg:text-xl lg:leading-9">
              We are a restaurant located in the heart of Florianópolis. Our
              mission is to provide our guests with an unforgettable dining
              experience by offering exceptional food, outstanding service, and
              a warm and welcoming atmosphere.
            </p>
            <p className="text-[#8F8F8F] lg:text-xl">
              Mon - Fri <span className="font-bold">8 AM - 11 PM</span> <br />
              <span className="text-[#EF5A34] text-2xl lg:text-4xl font-bold">
                +55-(48)-99555-8888
              </span>
            </p>
          </div>
        </Fade>
      </div>
      <Fade bottom distance="10%">
        <div className="flex flex-col xl:flex-row">
          <div className="text-[#EF5A34] hero-description flex flex-col lg:flex-row m-auto lg:mt-30 space-y-4 lg:space-y-0 mt-28 lg:space-x-32 lg:w-[75%]">
            <div className="flex flex-col lg:items-start items-center">
              <span className="font-bold text-4xl lg:text-6xl w-10">
                <NumberDiv value={4} interval={1000} />
              </span>
              <p className="text-[#8F8F8F] lg:w-30 text-center">
                YEARS OF EXPERIENCE
              </p>
            </div>
            <div className="flex flex-col lg:items-start items-center">
              <span className="font-bold text-4xl lg:text-6xl w-10">
                <NumberDiv value={60} interval={100} />
              </span>
              <p className="text-[#8F8F8F] w-30 text-center">MENUS/DISH</p>
            </div>
            <div className="flex flex-col lg:items-start items-center">
              <span className="font-bold text-4xl lg:text-6xl w-10">
                <NumberDiv value={77} interval={100} />
              </span>
              <p className="text-[#8F8F8F] w-30 text-center">STAFFS</p>
            </div>
            <div className="flex flex-col lg:items-start items-center">
              <span className="font-bold text-4xl lg:text-6xl w-fit">
                <NumberDiv value={7500} interval={1} />
              </span>
              <p className="text-[#8F8F8F] w-30">HAPPY CUSTOMERS</p>
            </div>
          </div>
          <div className="text-[#23212B] lg:text-base italic lg:leading-9 lg:border-l-2 border-[#8f8f8fa2] lg:pl-4 pt-28 lg:pt-0 lg:w-[25%] md:mx-20">
            "When you acknowledge, as you must, that there is no such thing as
            perfect food, only the idea of it, then the real purpose of striving
            toward perfection becomes clear: to make people happy, that is what
            cooking is all about." <br />{" "}
            <span className="no-italic font-bold">- Thomas Keller</span>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;
