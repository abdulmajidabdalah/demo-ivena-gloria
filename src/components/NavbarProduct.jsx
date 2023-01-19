import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import {} from "react-icons/ai";
import LOGO from "../components/assets/LogoIvena.png";
import { useNavigate } from "react-router-dom";
import "animate.css";

const NavbarProduct = () => {
  let navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const clickSidebar = () => {
    setSidebar(!sidebar);
  };

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
    navigate("/#workflow");
  };
  const clickBackToClients = () => {
    navigate("/#clients");
  };
  const clickBackToContact = () => {
    navigate("/#contact");
  };
  return (
    <div>
      <nav className="flex justify-between items-center lg:hidden fixed top-0 z-50 w-full bg-white border-b-1 border-slate-400">
        <a href="#headerMobile" onClick={clickBackToHeader}>
          <img
            src={LOGO}
            alt="logo"
            className="w-[200px] h-[70px] object-cover"
          />
        </a>
        <GiHamburgerMenu
          size={20}
          onClick={clickSidebar}
          className="cursor-pointer mr-2"
        />
      </nav>
      {sidebar ? (
        <div className="h-screen w-full fixed bg-white z-[100] animate__animated animate__fadeInRight">
          <div className="flex items-center justify-end pt-6 px-4">
            <AiOutlineClose
              size={20}
              className="cursor-pointer"
              onClick={clickSidebar}
            />
          </div>
          <div className="flex justify-start items-center p-4">
            <ul className="grid grid-cols-1 gap-y-4 text-2xl font-poppins">
              <a
                href="#headerMobile"
                onClick={clickBackToHeader}
                className="flex justify-start items-center gap-2"
              >
                <i className="icofont-home"></i>
                Home
              </a>
              <a
                href="#about"
                onClick={clickBackToAbout}
                className="flex justify-start items-center gap-2"
              >
                <i className="icofont-info-circle"></i>
                About
              </a>
              <a
                href="#work"
                onClick={clickBackToWork}
                className="flex justify-start items-center gap-2"
              >
                <i className="icofont-bag-alt"></i>
                Portfolio
              </a>
              <a
                href="#workflow"
                onClick={clickBackToServices}
                className="flex justify-start items-center gap-2"
              >
                <i className="icofont-badge"></i>
                Workflow
              </a>
              <a
                href="#clients"
                onClick={clickBackToClients}
                className="flex justify-start items-center gap-2"
              >
                <i className="icofont-people"></i>
                Clients
              </a>
              <a
                href="#contact"
                onClick={clickBackToContact}
                className="flex justify-start items-center gap-2"
              >
                <i className="icofont-ui-contact-list"></i>
                Contact
              </a>
            </ul>
          </div>
        </div>
      ) : undefined}
    </div>
  );
};

export default NavbarProduct;
