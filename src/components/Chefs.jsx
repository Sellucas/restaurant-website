import React from "react";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineGooglePlus,
  AiOutlineInstagram,
} from "react-icons/ai";
import Fade from "react-reveal/Fade";

const Chefs = () => {
  return (
    <div className="bg-white pb-40">
      <div className='className="flex flex-col items-center pt-24 lg:pt-52 max-w-[1500px] hero-description m-auto'>
        <div>
          <Fade bottom distance='10%'>
            <h1 className="mb-14 text-center">
              <span className="nav-logo text-[#EF5A34] text-6xl">Chefs</span>{" "}
              <br />
              <span className="hero-title text-3xl text-[#23212B]">Our Master Chef</span>
            </h1>
          </Fade>
        </div>
        <Fade bottom distance='20%'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 ">
            <div>
              <div className="h-80">
                <img
                  src="images/chef-1.jpeg"
                  alt=""
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-[#23212B] text-xl font-bold">
                  Sebastian Isaac
                </h2>
                <p className="text-[#8F8F8F] text-sm">Restaurant Owner</p>
                <div className="flex flex-row gap-4 pt-4 text-[#ef5934ab]">
                  <AiOutlineTwitter size={25} />
                  <AiFillFacebook size={25} />
                  <AiOutlineGooglePlus size={25} />
                  <AiOutlineInstagram size={25} />
                </div>
              </div>
            </div>
            <div>
              <div className="h-80">
                <img
                  src="images/chef-2.jpeg"
                  alt=""
                  className="h-full w-full object-cover rounded-md object-left-top"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-[#23212B] text-xl font-bold">
                  Aaliyah Grace
                </h2>
                <p className="text-[#8F8F8F] text-sm">Master Chef</p>
                <div className="flex flex-row gap-4 pt-4 text-[#ef5934ab]">
                  <AiOutlineTwitter size={25} />
                  <AiFillFacebook size={25} />
                  <AiOutlineGooglePlus size={25} />
                  <AiOutlineInstagram size={25} />
                </div>
              </div>
            </div>
            <div>
              <div className="h-80">
                <img
                  src="images/chef-3.jpeg"
                  alt=""
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-[#23212B] text-xl font-bold">
                  Ethan Alexander
                </h2>
                <p className="text-[#8F8F8F] text-sm">Chef</p>
                <div className="flex flex-row gap-4 pt-4 text-[#ef5934ab]">
                  <AiOutlineTwitter size={25} />
                  <AiFillFacebook size={25} />
                  <AiOutlineGooglePlus size={25} />
                  <AiOutlineInstagram size={25} />
                </div>
              </div>
            </div>
            <div>
              <div className="h-80">
                <img
                  src="images/chef-4.jpeg"
                  alt=""
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-[#23212B] text-xl font-bold">
                  Jackson James
                </h2>
                <p className="text-[#8F8F8F] text-sm">Chef</p>
                <div className="flex flex-row gap-4 pt-4 text-[#ef5934ab]">
                  <AiOutlineTwitter size={25} />
                  <AiFillFacebook size={25} />
                  <AiOutlineGooglePlus size={25} />
                  <AiOutlineInstagram size={25} />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Chefs;
