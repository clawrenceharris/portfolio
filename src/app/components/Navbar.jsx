"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import  { blue, teal } from "tailwindcss/colors";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
const activeStyle = `text-blue`
const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
document.addEventListener('DOMContentLoaded', function () {
  // Function to update active link based on scroll position
  function updateActiveLink() {
    var scrollPosition = window.scrollY;

    // Set the threshold for each section
    var homeThreshold = document.getElementById('home').offsetTop - 1;
    var aboutThreshold = document.getElementById('about').offsetTop - 1;
    var skillThreshold = document.getElementById('skills').offsetTop - 1;
    // Add more thresholds for additional sections as needed

    // Determine the active link based on the scroll position
    var activeLink;
    if (scrollPosition < homeThreshold) {
      activeLink = document.querySelector('nav a[href="#home"]');
    } else if (scrollPosition < aboutThreshold) {
      activeLink = document.querySelector('nav a[href="#about"]');
    } else if(scrollPosition < skillThreshold) {
      activeLink = document.querySelector('nav a[href="#skills"]');
    }

    // Add more conditions for additional sections as needed

    // Remove the active-link class from all links
    document.querySelectorAll('nav a').forEach(function (link) {
      link.classList.remove(activeStyle);
    });
    console.log(activeLink);

    // Add the active-link class to the determined active link
    if (activeLink) {
      console.log(activeLink);
      activeLink.classList.add(activeStyle);
    }
  }

  // Listen for scroll events
  window.addEventListener('scroll', updateActiveLink);

  // Set the initial active link on page load
  updateActiveLink();
});
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
       
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            <a  href={"#home"} >Home</a>
            <a  href={"#about"}>About</a>
            <a  href={"#skills"}>Skills</a>
            <a  href={"#projects"}>Projects</a>
            <a id href={"#contact"}>Contact</a>

          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
