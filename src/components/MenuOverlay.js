import React from "react";
import NavLink from "./NavLink";
import { Link } from "react-scroll";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            className="cursor-pointer"
            smooth
            duration={500}
            to={link.path}
          >
            {link.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
