import { Link } from "react-scroll";

const NavLink = ({ className, to, children }) => {
  return (
    <Link
      className={`${className} cursor-pointer`}
      smooth
      duration={500}
      to={to}
    >
      {children}
    </Link>
  );
};

export default NavLink;
