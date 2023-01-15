import React, { useState } from "react";
import Logo from "./assets/Logo Ivena.png";
import { BsFillPersonFill } from "react-icons/bs";
import { TbBriefcase } from "react-icons/tb";
import { MdMiscellaneousServices } from "react-icons/md";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { Link } from "react-scroll";

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
        <nav className="bg-[#2B333E] border-b-[0.5px] border-gray-500 flex justify-center items-center text-center text-gray-500 hover:text-[#F4AD24] hover:cursor-pointer duration-150">
          <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
            <div>
              <p className="text-4xl ml-2">
                <BsFillPersonFill />
              </p>
              <p className="font-poppins font-bold">About</p>
            </div>
          </Link>
        </nav>
        <nav className="bg-[#2B333E] border-b-[0.5px] border-gray-500 flex justify-center items-center text-center text-gray-500 hover:text-[#F4AD24] hover:cursor-pointer duration-150">
          <Link to="work" spy={true} smooth={true} offset={0} duration={500}>
            <div>
              <p className="text-4xl">
                <TbBriefcase />
              </p>
              <p className="font-poppins font-bold">Work</p>
            </div>
          </Link>
        </nav>
        <nav className="bg-[#2B333E] border-b-[0.5px] border-gray-500 flex justify-center items-center text-center text-gray-500 hover:text-[#F4AD24] hover:cursor-pointer duration-150">
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div>
              <p className="text-4xl ml-2 mb-1">
                <MdMiscellaneousServices />
              </p>
              <p className="font-poppins font-bold">Services</p>
            </div>
          </Link>
        </nav>
        <nav className="bg-[#2B333E] border-b-[0.5px] border-gray-500 flex justify-center items-center text-center text-gray-500 hover:text-[#F4AD24] hover:cursor-pointer duration-150">
          <Link to="clients" spy={true} smooth={true} offset={0} duration={500}>
            <div>
              <p className="text-4xl ml-2 mb-1">
                <BsFillEmojiLaughingFill />
              </p>
              <p className="font-poppins font-bold">Clients</p>
            </div>
          </Link>
        </nav>
        <nav className="bg-[#2B333E] border-b-[0.5px] border-gray-500 flex justify-center items-center text-center text-gray-500 hover:text-[#F4AD24] hover:cursor-pointer duration-150">
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
