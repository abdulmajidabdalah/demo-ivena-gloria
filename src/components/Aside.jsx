import React, { useState } from "react";
import Logo from "./assets/LogoIvena.png";
import { BsFillPersonFill } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { Link } from "react-scroll";
import "./assets/icofont/icofont.min.css";

const Aside = () => {
  const [button, setButton] = useState("#");
  const handleClick = () => setButton("#header");
  return (
    <aside className="hidden lg:block">
      <div className="grid grid-rows-6 h-screen w-[220px] sticky top-1">
        <nav className="flex justify-center items-center">
          <a
            href="#header"
            onClick={handleClick}
            className={
              button === "#header"
                ? "bg-white cursor-pointer"
                : "bg-white cursor-pointer"
            }
          >
            <img src={Logo} alt="logo" className="w-[220px] object-cover" />
          </a>
        </nav>
        <nav className="bg-bg-aside border-b-[0.5px] border-gray-500 flex justify-center items-center text-center text-gray-500 hover:text-[#F4AD24] hover:cursor-pointer duration-150">
          <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
            <div>
              <p className="text-4xl ml-2">
                <BsFillPersonFill />
              </p>
              <p className="font-poppins font-bold">About</p>
            </div>
          </Link>
        </nav>
        <nav className="bg-bg-aside border-b-[0.5px] border-gray-500 flex justify-center items-center text-center text-gray-500 hover:text-[#F4AD24] hover:cursor-pointer duration-150">
          <Link to="work" spy={true} smooth={true} offset={0} duration={500}>
            <div>
              <i className="icofont-briefcase icofont-2x"></i>
              <p className="font-poppins font-bold">Portfolio</p>
            </div>
          </Link>
        </nav>
        <nav className="bg-bg-aside border-b-[0.5px] border-gray-500 flex justify-center items-center text-center text-gray-500 hover:text-[#F4AD24] hover:cursor-pointer duration-150">
          <Link
            to="workflow"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div>
              <i className="icofont-badge icofont-2x"></i>
              <p className="font-poppins font-bold">Our Workflow</p>
            </div>
          </Link>
        </nav>
        <nav className="bg-bg-aside border-b-[0.5px] border-gray-500 flex justify-center items-center text-center text-gray-500 hover:text-[#F4AD24] hover:cursor-pointer duration-150">
          <Link to="clients" spy={true} smooth={true} offset={0} duration={500}>
            <div>
              <i className="icofont-people icofont-2x"></i>
              <p className="font-poppins font-bold">Clients</p>
            </div>
          </Link>
        </nav>
        <nav className="bg-bg-aside border-b-[0.5px] border-gray-500 flex justify-center items-center text-center text-gray-500 hover:text-[#F4AD24] hover:cursor-pointer duration-150">
          <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
            <div>
              <p className="text-4xl ml-2">
                <MdCall />
              </p>
              <p className="font-poppins font-bold">Contact</p>
            </div>
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Aside;
