import React from "react";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "Home",
    path: "home",
  },
  {
    title: "About",
    path: "about",
  },
  {
    title: "Skills",
    path: "skills",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "Contact",
    path: "contact",
  },
];
const Navbar = () => {

  return (
    <nav className="sticky max-w-[90%] mx-auto rounded-full top-6 py-4 px-10 left-0 right-0 z-10 bg-[#ffffff50]  backdrop-blur-md">
      
          <ul className="flex font-bold md:space-x-8 space-x-5 text-white">
            <NavLink to="home">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="skills">Skills</NavLink>
            <NavLink to="projects">Projects</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </ul>
    </nav>
  );
};

export default Navbar;
