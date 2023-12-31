import { Link } from "react-scroll";

import logo from "../assets/images/logo.png";
import ThemeBar from "./Themebar";

function Navbar() {
  return (
    // <div className="navbar bg-base-100 sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white">
    <div className="navbar bg-base-100 sticky top-0 z-50 ">
      {/* <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70"></div> */}
      <div className="flex-1 md:ml-4">
        <Link
          to="hero"
          className="btn btn-ghost"
          smooth={true}
          offset={0}
          duration={1000}
        >
          <img src={logo} alt="logo" className="object-fill h-10" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to="aboutUs"
              // spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="contactUs"
              // spy={true}
              smooth={true}
              offset={-30}
              duration={1000}
            >
              Contact Us
            </Link>
          </li>
          <ThemeBar />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
