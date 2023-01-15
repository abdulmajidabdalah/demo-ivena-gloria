import React from "react";
import Logo from "../components/assets/Logo Ivena.png";
import { BsFillPersonFill } from "react-icons/bs";
import { TbBriefcase } from "react-icons/tb";
import { MdMiscellaneousServices } from "react-icons/md";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const SidebarProduct = () => {
  let navigate = useNavigate();

  const clickBackToAbout = () => {
    navigate("/#about");
  };
  const clickBackToWork = () => {
    navigate("/#work");
  };
  const clickBackToServices = () => {
    navigate("/#services");
  };
  const clickBackToClients = () => {
    navigate("/#clients");
  };
  const clickBackToContact = () => {
    navigate("/#contact");
  };
  return (
    <div className="hidden lg:block">
      <div className="w-[220px] grid grid-rows-6 h-screen sticky top-1">
        <nav className="bg-white border-b-[0.5px] border-gray-500 flex justify-center items-center cursor-pointer">
          <Link to="/" className="">
            <img src={Logo} alt="logo" />
          </Link>
        </nav>
        <nav className="bg-[#2B333E] border-b-[0.5px] border-gray-500 flex justify-center items-center text-center text-gray-500 hover:text-[#F4AD24] hover:cursor-pointer duration-150">
          <a href="#about" onClick={clickBackToAbout}>
            <p className="text-4xl ml-2">
              <BsFillPersonFill />
            </p>
            <p className="font-poppins font-bold">About</p>
          </a>
        </nav>
        <nav className="bg-[#2B333E] border-b-[0.5px] border-gray-500 flex justify-center items-center text-center text-gray-500 hover:text-[#F4AD24] hover:cursor-pointer duration-150">
          <a href="#work" onClick={clickBackToWork}>
            <p className="text-4xl">
              <TbBriefcase />
            </p>
            <p className="font-poppins font-bold">Work</p>
          </a>
        </nav>
        <nav className="bg-[#2B333E] border-b-[0.5px] border-gray-500 flex justify-center items-center text-center text-gray-500 hover:text-[#F4AD24] hover:cursor-pointer duration-150">
          <a href="#services" onClick={clickBackToServices}>
            <p className="text-4xl ml-2 mb-1">
              <MdMiscellaneousServices />
            </p>
            <p className="font-poppins font-bold">Services</p>
          </a>
        </nav>
        <nav className="bg-[#2B333E] border-b-[0.5px] border-gray-500 flex justify-center items-center text-center text-gray-500 hover:text-[#F4AD24] hover:cursor-pointer duration-150">
          <a href="#clients" onClick={clickBackToClients}>
            <p className="text-4xl ml-2 mb-1">
              <BsFillEmojiLaughingFill />
            </p>
            <p className="font-poppins font-bold">Clients</p>
          </a>
        </nav>
        <nav className="bg-[#2B333E] border-b-[0.5px] border-gray-500 flex justify-center items-center text-center text-gray-500 hover:text-[#F4AD24] hover:cursor-pointer duration-150">
          <a href="#contact" onClick={clickBackToContact}>
            <p className="text-4xl ml-2">
              <MdCall />
            </p>
            <p className="font-poppins font-bold">Contact</p>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default SidebarProduct;
