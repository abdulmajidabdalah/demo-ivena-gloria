import React from "react";
import Typewriter from "typewriter-effect";
import { Carousel } from "react-responsive-carousel";
import VIDEO from "./assets/Ivena Gloria Ardana - Company Profile.mp4";
import Modal from "./Modal";

const Header = () => {
  return (
    <div id="header" className="hidden md:block lg:block lg:h-screen">
      <Carousel autoPlay showArrows={true} showThumbs={true}>
        <div className="lg:h-screen md:h-screen bg-bg-header bg-cover bg-fixed bg-center flex justify-start items-center ">
          <div className="">
            <div className="flex text-white font-poppins font-extrabold md:text-6xl lg:text-6xl tracking-wide w-10">
              <p className="text-white font-poppins font-extrabold md:text-6xl md:ml-6 lg:text-6xl lg:ml-16 mr-4">
                Solid
              </p>
              <Typewriter
                options={{
                  strings: ["Creative", "Investment"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="text-white font-poppins font-extrabold text-2xl md:ml-6 lg:ml-[4.3rem] mt-1 lg:mt-3">
              Ivena Gloria - Creative & Production House
            </p>
            <div className="flex ml-2 lg:ml-16">
              <Modal />
            </div>
          </div>
        </div>
        <div className=" h-[100vh] bg-black bg-cover bg-center flex justify-start items-center">
          <video autoPlay muted controlsList="nodownload">
            <source src={VIDEO} type="video/mp4" />
          </video>
        </div>
      </Carousel>
    </div>
  );
};

export default Header;
