import React from "react";
import VIDEO from "../components/assets/Ivena Gloria Ardana - Company Profile.mp4";
import Modal from "./Modal";
import Typewriter from "typewriter-effect";

const HeaderForMobile = () => {
  return (
    <div className="lg:hidden md:hidden block" id="headerMobile">
      <div>
        <video autoPlay muted controlsList="nodownload">
          <source src={VIDEO} type="video/mp4" />
        </video>
      </div>
      <div className="h-[50vh] bg-[#F2F2F2] py-7">
        <div
          className="flex text-black font-poppins font-extrabold text-4xl 
              ml-6 tracking-wide"
        >
          <p className="font-poppins font-extrabold text-4xl mr-2">Solid</p>
          <Typewriter
            options={{
              strings: ["Creative", "Investment"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="font-poppins font-extrabold text-2xl ml-6 mt-4">
          Ivena Gloria - Creative & Production House
        </p>
        <div className="flex ml-2 lg:ml-16">
          <Modal />
        </div>
      </div>
    </div>
  );
};

export default HeaderForMobile;
