import React from "react";
import Fade from "react-reveal/Fade";

const Menu = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center mt-24 lg:mt-52 max-w-[1500px] m-auto">
        <Fade bottom distance="10%">
          <div className="mt-20">
            <h1 className="mb-14">
              <span className="nav-logo text-[#EF5A34] text-6xl">
                Specialties
              </span>{" "}
              <br />
              <span className="hero-title text-3xl text-[#23212B]">Our Menu</span>
            </h1>
          </div>
        </Fade>
        <div className="container mx-auto hero-description lg:w-[1200px] px-4 lf">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <Fade bottom distance="10%">
              <div className="border border-gray-300 h-60 order-1 md:order-1">
                <img
                  className="h-full w-full object-cover"
                  src="../public/images/menu-1.jpeg"
                  alt="Imagem 1"
                />
              </div>
              <div className="border border-gray-300 h-50 lg:h-60 order-2 md:order-2">
                <div className="m-4 flex flex-row justify-between text-xl font-bold text-[#23212B]">
                  <h2 className="lg:w-52 leading-8">
                    Pasta with spices and shrimp
                  </h2>
                  <p className="text-[#EF5A34]">$29</p>
                </div>
                <div className="m-4 flex-col">
                  <p className="pb-4 lg:w-52 text-[#8F8F8F] leading-8">
                    Pasta, peppers, arugula and shrimp
                  </p>
                  <button class="bg-[#3EA86B] hover:bg-[#EF5A34] text-[#F1EFF0] py-2 px-4 lg:py-3 lg:px-6 rounded-lg tracking-wide ease-in duration-200">
                    Order Now
                  </button>
                </div>
              </div>
              <div className="border border-gray-300 h-60 order-3 md:order-3">
                <img
                  className="h-full w-full object-cover"
                  src="../public/images/menu-2.jpg"
                  alt="Imagem 2"
                />
              </div>
              <div className="border border-gray-300 h-50 lg:h-60 order-4 md:order-4">
                <div className="m-4 flex flex-row justify-between text-xl font-bold text-[#23212B]">
                  <h2 className="lg:w-52 leading-8">Steak and baked potato</h2>
                  <p className="text-[#EF5A34]">$32</p>
                </div>
                <div className="m-4 flex-col">
                  <p className="pb-4 lg:w-52 text-[#8F8F8F] leading-8">
                    Steak, Baked Potatoes, Peppers, Sauce
                  </p>
                  <button class="bg-[#3EA86B] hover:bg-[#EF5A34] text-[#F1EFF0] py-2 px-4 lg:py-3 lg:px-6 rounded-lg tracking-wide ease-in duration-200">
                    Order Now
                  </button>
                </div>
              </div>
            </Fade>
            <Fade bottom distance="10%">
              <div className="border border-gray-300 h-50 lg:h-60 order-6 md:order-5">
                <div className="m-4 flex flex-row justify-between text-xl font-bold text-[#23212B]">
                  <h2 className="lg:w-52 leading-8">Grilled fish</h2>
                  <p className="text-[#EF5A34]">$15</p>
                </div>
                <div className="m-4 flex-col">
                  <p className="pb-4 lg:w-52 text-[#8F8F8F] leading-8">
                    Grilled Tilapia
                  </p>
                  <button class="bg-[#3EA86B] hover:bg-[#EF5A34] text-[#F1EFF0] py-2 px-4 lg:py-3 lg:px-6 rounded-lg tracking-wide ease-in duration-200">
                    Order Now
                  </button>
                </div>
              </div>
              <div className="border border-gray-300 h-60 order-5 md:order-6">
                <img
                  className="h-full w-full object-cover"
                  src="../public/images/menu-3.jpg"
                  alt="Imagem 3"
                />
              </div>
              <div className="border border-gray-300 h-50 lg:h-60 order-8 md:order-7">
                <div className="m-4 flex flex-row justify-between text-xl font-bold text-[#23212B]">
                  <h2 className="lg:w-52 leading-8">Rack of lamb</h2>
                  <p className="text-[#EF5A34]">$22</p>
                </div>
                <div className="m-4 flex-col">
                  <p className="pb-4 lg:w-52 text-[#8F8F8F] leading-8">
                    Rack of lamb, vegetables and potatoes
                  </p>
                  <button class="bg-[#3EA86B] hover:bg-[#EF5A34] text-[#F1EFF0] py-2 px-4 lg:py-3 lg:px-6 rounded-lg tracking-wide ease-in duration-200">
                    Order Now
                  </button>
                </div>
              </div>
              <div className="border border-gray-300 h-60 order-7 md:order-8">
                <img
                  className="h-full w-full object-cover"
                  src="../public/images/menu-4.jpeg"
                  alt="Imagem 3"
                />
              </div>
            </Fade>
            <Fade bottom distance="10%">
              <div className="border border-gray-300 h-60 order-9 md:order-9">
                <img
                  className="h-full w-full object-cover"
                  src="../public/images/menu-5.jpg"
                  alt="Imagem 3"
                />
              </div>
              <div className="border border-gray-300 h-50 lg:h-60 order-10 md:order-10">
                <div className="m-4 flex flex-row justify-between text-xl font-bold text-[#23212B]">
                  <h2 className="lg:w-52 leading-8">German Pie</h2>
                  <p className="text-[#EF5A34]">$32</p>
                </div>
                <div className="m-4 flex-col">
                  <p className="pb-4 lg:w-52 text-[#8F8F8F] leading-8">
                    White chocolate, semisweet chocolate, biscuit and cherry
                  </p>
                  <button class="bg-[#3EA86B] hover:bg-[#EF5A34] text-[#F1EFF0] py-2 px-4 lg:py-3 lg:px-6 rounded-lg tracking-wide ease-in duration-200">
                    Order Now
                  </button>
                </div>
              </div>
              <div className="border border-gray-300 h-60 order-11 md:order-11">
                <img
                  className="h-full w-full object-cover"
                  src="../public/images/menu-6.jpeg"
                  alt="Imagem 3"
                />
              </div>
              <div className="border border-gray-300 h-50 lg:h-60 order-12 md:order-12">
                <div className="m-4 flex flex-row justify-between text-xl font-bold text-[#23212B]">
                  <h2 className="lg:w-52 leading-8">
                    Casoncelli alla Bergamasca
                  </h2>
                  <p className="text-[#EF5A34]">$27</p>
                </div>
                <div className="m-4 flex-col">
                  <p className="pb-4 lg:w-52 text-[#8F8F8F] leading-8">
                    Pasta, cheese, bacon and broccoli
                  </p>
                  <button class="bg-[#3EA86B] hover:bg-[#EF5A34] text-[#F1EFF0] py-2 px-4 lg:py-3 lg:px-6 rounded-lg tracking-wide ease-in duration-200">
                    Order Now
                  </button>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
