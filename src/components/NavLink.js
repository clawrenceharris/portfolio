import { Link } from "react-scroll";

const NavLink = ({ to, children }) => {
  return (
    <Link
      className="cursor-pointer block py-4 pl-3 pr-4 text-blue bg-blue sm:text-xl rounded md:p-0 hover:text-white"
      smooth
      duration={500}
      to={to}
    >
      {children}
    </Link>
  );
};

export default NavLink;
