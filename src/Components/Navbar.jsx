import { Link } from "react-scroll";

import logo from "../assets/images/logo.png";
import ThemeBar from "./Themebar";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost">
          <img src={logo} alt="logo" className="object-fill h-10" />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <ThemeBar />
          <li>
            <Link
              to="aboutUs"
              // spy={true}
              smooth={true}
              offset={50}
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
              offset={50}
              duration={1000}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
