import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import {} from "react-icons/ai";
import LOGO from "../components/assets/LogoIvena.png";
import { Link } from "react-scroll";

const NavbarMobile = () => {
  return (
    <div>
      <nav className="flex justify-between items-center lg:hidden fixed top-0 z-50 w-full bg-white border-b-1 border-slate-400">
        <Link
          to="headerMobile"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          data-bs-dismiss="offcanvas"
        >
          <img
            src={LOGO}
            alt="logo"
            className="w-[200px] h-[70px] object-cover"
          />
        </Link>
        <GiHamburgerMenu
          size={20}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          className="cursor-pointer mr-2"
        />
      </nav>

      <div
        className="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-96"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header flex items-center justify-end pt-6 px-4">
          <AiOutlineClose
            size={20}
            data-bs-dismiss="offcanvas"
            className="cursor-pointer"
          />
        </div>
        <div className="offcanvas-body flex justify-start items-center p-4">
          <ul className="grid grid-cols-1 gap-y-4 text-2xl font-poppins">
            <Link
              to="headerMobile"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              data-bs-dismiss="offcanvas"
              className="flex justify-start items-center gap-2"
            >
              <i className="icofont-home"></i>
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              data-bs-dismiss="offcanvas"
              className="flex justify-start items-center gap-2"
            >
              <i className="icofont-info-circle"></i>
              About
            </Link>
            <Link
              to="work"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              data-bs-dismiss="offcanvas"
              className="flex justify-start items-center gap-2"
            >
              <i className="icofont-bag-alt"></i>
              Portfolio
            </Link>
            <Link
              to="workflow"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              data-bs-dismiss="offcanvas"
              className="flex justify-start items-center gap-2"
            >
              <i className="icofont-badge"></i>
              Workflow
            </Link>
            <Link
              to="clients"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              data-bs-dismiss="offcanvas"
              className="flex justify-start items-center gap-2"
            >
              <i className="icofont-people"></i>
              Clients
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              data-bs-dismiss="offcanvas"
              className="flex justify-start items-center gap-2"
            >
              <i className="icofont-ui-contact-list"></i>
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
