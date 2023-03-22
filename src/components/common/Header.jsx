import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 hero-description">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-black"
      >
        <a href="#" className="flex items-center text-[#EF5A34]">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-[#23212B]">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-[#23212B]">
          Menu
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-[#23212B]">
          Book a Table
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto  py-2 px-4 lg:px-8 lg:py-4 sticky top-0 z-20 w-full ">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal text-[#23212B]"
        >
          <span className="self-center text-3xl whitespace-nowrap text-[#23212B] nav-logo">
            Spice <span className="text-[#EF5A34]">Route</span>
          </span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Button
          variant="gradient"
          size="sm"
          className="hidden lg:inline-block text-[#23212B]"
        >
          <input
            type="search"
            id="default-search"
            class="block w-full p-2 pl-10 text-sm text-[#23212B] border rounded-3xl bg-white dark:bg-white dark:placeholder-[#B0ADAE] dark:text-[#23212B] hero-description"
            placeholder="Search"
            required
          />
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="black"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="black"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-2 text-[#23212B]"
          >
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-[#23212B] border rounded-3xl bg-white dark:bg-white dark:placeholder-[#B0ADAE] dark:text-[#23212B] hero-description"
              placeholder="Search"
              required
            />
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
};
