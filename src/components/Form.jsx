import React from "react";

const Form = () => {
  return (
    <div className="form-section bg-cover bg-center pt-40 bg-white h-[1000px] lg:h-[700px] hero-description">
      <div class="inset-0 flex flex-col justify-center items-center bg-white w-full lg:w-[600px] lg:ml-72 p-4 lg:p-10">
        <div>
          <h1 className="mb-14 text-center">
            <span className="nav-logo text-[#EF5A34] text-6xl">Chefs</span>{" "}
            <br />
            <span className="hero-title text-3xl">Our Master Chef</span>
          </h1>
        </div>

        <form className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <div className="flex flex-col">
            <label htmlFor="name" className="lg:text-xl">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border p-2 text"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="lg:text-xl">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border p-2"
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="lg:text-xl">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="border p-2"
              placeholder="Your Phone"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="date" className="lg:text-xl">Date:</label>
            <input type="date" id="date" name="date" className="border p-2" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="time" className="lg:text-xl">Time:</label>
            <input type="time" id="time" name="time" className="border p-2" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="person" className="lg:text-xl">Person:</label>
            <input
              type="number"
              id="person"
              name="person"
              className="border p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-[#3EA86B] hover:bg-[#EF5A34] text-white font-bold py-2 px-4 rounded lg:text-xl"
          >
            Make a Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
