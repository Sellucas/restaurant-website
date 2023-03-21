import React from "react";
import { AiFillStar } from "react-icons/ai";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="flex lg:flex-row flex-col justify-between max-w-[1800px] m-auto lg:pl-40 sm:pl-10 h-full">
        <div className="mt-10">
          <div className="flex flex-col">
            <Fade bottom distance="20%">
              <h1 className="hero-title text-[#23212B] text-5xl md:text-6xl lg:text-8xl md:leading-normal lg:leading-normal leading-normal text-center lg:text-start">
                it's not just <br />{" "}
                <span className="text-[#EF5A34]">Food,</span> It's an <br />{" "}
                Experience
              </h1>
            </Fade>
            <p className="hero-description mt-10 text-[#8F8F8F] lg:text-xl text-sm text-center">
              We are most fastest and favourite food delivery service <br /> all
              over the world. Search for your favourite food.
            </p>
          </div>
          <div className="text-lg hero-button mt-10 flex flex-col lg:flex-row items-center lg:items-start gap-4">
            <RubberBand>
              <button class="bg-[#3EA86B] hover:bg-[#EF5A34] text-[#F1EFF0] py-4 px-8 rounded-lg tracking-wide shadow-2xl">
                Order Now
              </button>
            </RubberBand>
            <button class="bg-white border-[#3EA86B] hover:border-[#EF5A34] border-solid border-2 text-[#23212B] py-4 px-8 rounded-lg tracking-wide shadow-2xl lg:ml-10 ease-in duration-200">
              Book A Table
            </button>
          </div>

          <div className=" mt-20 relative flex flex-col items-center lg:flex-row">
            <div className="flex flex-row mb-5">
              <img
                src="../public/images/3.jpg"
                alt=""
                className="rounded-full w-14 h-14"
              />
              <img
                src="../public/images/41.jpg"
                alt=""
                className="rounded-full w-14 h-14"
              />
              <img
                src="../public/images/46.jpg"
                alt=""
                className="rounded-full w-14 h-14"
              />
              <img
                src="../public/images/74.jpg"
                alt=""
                className="rounded-full w-14 h-14"
              />
            </div>
            <div className="ml-6 hero-description">
              <p className="font-bold">400+ Happy customers</p>
              <p className="flex items-center pt-0.5">
                <span className="mr-2">
                  <AiFillStar className="text-yellow-600" />
                </span>
                4.8 (420 reviews)
              </p>
            </div>
          </div>
        </div>

        <div>
          <img
            src="./public/images/hero2-img.png"
            alt="japanese food"
            width="1050"
            className="hidden xl:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
