import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { SlInfo } from "react-icons/sl";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-scroll";

const ButtonNavigasiMobile = () => {
  return (
    <div>
      <div className="fixed top-[90%] lg:hidden block w-full">
        <div className="grid grid-cols-6 gap-3 text-white px-5 bg-black h-20 md:h-28 opacity-70">
          <div className="md:hidden flex justify-center items-center">
            <Link
              to="headerMobile"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <AiOutlineHome size={30} />
              <p className="text-xs uppercase">home</p>
            </Link>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <Link
              to="header"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <AiOutlineHome size={30} />
              <p className="text-xs uppercase">home</p>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              <SlInfo size={30} />
              <p className="text-xs uppercase">about</p>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Link to="work" spy={true} smooth={true} offset={10} duration={500}>
              <MdOutlineWorkOutline size={30} />
              <p className="text-xs uppercase">work</p>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <MdMiscellaneousServices size={30} />
              <p className="text-xs uppercase">services</p>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Link
              to="clients"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <FaUserFriends size={30} />
              <p className="text-xs uppercase">clients</p>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <RiContactsBook2Fill size={30} />
              <p className="text-xs uppercase">contact</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonNavigasiMobile;
