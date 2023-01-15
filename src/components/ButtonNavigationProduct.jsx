import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { SlInfo } from "react-icons/sl";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ButtonNavigationProduct = () => {
  let navigate = useNavigate();

  const clickBackToHeader = () => {
    navigate("/#headerMobile");
  };
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
    <div>
      <div className="fixed top-[90%] lg:hidden block w-full">
        <div className="grid grid-cols-6 gap-3 text-white px-5 bg-black h-20 md:h-28 opacity-70">
          <div className="flex justify-center items-center">
            <a href="#headerMobile" onClick={clickBackToHeader}>
              <AiOutlineHome size={30} />
              <p className="text-xs uppercase">home</p>
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href="#about" onClick={clickBackToAbout}>
              <SlInfo size={30} />
              <p className="text-xs uppercase">about</p>
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href="#work" onClick={clickBackToWork}>
              <MdOutlineWorkOutline size={30} />
              <p className="text-xs uppercase">work</p>
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href="#services" onClick={clickBackToServices}>
              <MdMiscellaneousServices size={30} />
              <p className="text-xs uppercase">services</p>
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href="#clients" onClick={clickBackToClients}>
              <FaUserFriends size={30} />
              <p className="text-xs uppercase">clients</p>
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href="#contact" onClick={clickBackToContact}>
              <RiContactsBook2Fill size={30} />
              <p className="text-xs uppercase">contact</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonNavigationProduct;
