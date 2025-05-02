import React from "react";
import NavLink from "./NavLink";

const Footer = () => {
  return (
    <footer className=" flex text-center  justify-center items-center  ">
     <NavLink to={"home"}> <p>Back To Top </p></NavLink>
    </footer>
  );
};

export default Footer;
