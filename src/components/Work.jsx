import React from "react";
import { Link } from "react-router-dom";
import IMG2 from "./assets/home/portfolio.jpg";
import Editorial from "./assets/thumb_product/editorial.png";
import Printing from "./assets/thumb_product/printing.png";
import Merchandise from "./assets/thumb_product/merchandise.png";
import PhotoVideo from "./assets/thumb_product/photovideo.png";
import { FiArrowDown } from "react-icons/fi";
import { Link as Button } from "react-scroll";

const Work = () => {
  return (
    <section id="work">
      <div>
        <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 bg-[#F2F2F2] h-[100vh] md:h-full lg:h-auto">
          <main className="col-span-2 mx-4 lg:mx-[68px] lg:mt-[62px]">
            <p className="text-6xl md:text-8xl lg:text-8xl text-white font-poppins font-bold tracking-wider pt-[50px] lg:pt-0">
              Portfolio
            </p>
            <p className="font-extrabold font-poppins text-2xl md:text-4xl lg:text-4xl text-[#333C4E] tracking-wider mt-2 lg:mt-0">
              Our Project
            </p>
            <div className="grid grid-cols-2 lg:grid lg:grid-cols-2 gap-[20px] mt-[70px] lg:mt-[95px]">
              <Link to="/editorial" className="group relative">
                <img src={Editorial} alt="" className="ml-[-1rem] mt-[1rem]" />
                <div className="hidden absolute top-0 left-0 w-full h-0 lg:flex flex-col justify-center items-center bg-[#121111] opacity-0 group-hover:h-full group-hover:rounded-md group-hover:opacity-80 group-hover:cursor-pointer duration-500">
                  <h1 className="uppercase text-[#F4AD24] text-xl font-semibold tracking-widest ">
                    editorial
                  </h1>
                </div>
              </Link>
              <Link to="/printing" className="group relative">
                <img src={Printing} alt="" className="ml-[-1rem] mt-[1rem]" />
                <div className="hidden absolute top-0 left-0 w-full h-0 lg:flex flex-col justify-center items-center bg-[#121111] opacity-0 group-hover:h-full group-hover:rounded-md group-hover:opacity-80 group-hover:cursor-pointer duration-500">
                  <h1 className="uppercase text-[#F4AD24] text-xl font-semibold tracking-widest ">
                    printing
                  </h1>
                </div>
              </Link>
              <Link to="/merchandise" className="group relative">
                <img
                  src={Merchandise}
                  alt=""
                  className="ml-[-1rem] mt-[1rem]"
                />
                <div className="hidden absolute top-0 left-0 w-full h-0 lg:flex flex-col justify-center items-center bg-[#121111] opacity-0 group-hover:h-full group-hover:rounded-md group-hover:opacity-80 group-hover:cursor-pointer duration-500">
                  <h1 className="uppercase text-[#F4AD24] text-xl font-semibold tracking-widest ">
                    merchandise
                  </h1>
                </div>
              </Link>
              <Link to="/photo&video" className="group relative">
                <img src={PhotoVideo} alt="" className="ml-[-1rem] mt-[1rem]" />
                <div className="hidden absolute top-0 left-0 w-full h-0 lg:flex flex-col justify-center items-center bg-[#121111] opacity-0 group-hover:h-full group-hover:rounded-md group-hover:opacity-80 group-hover:cursor-pointer duration-500">
                  <h1 className="uppercase text-[#F4AD24] text-xl font-semibold tracking-widest ">
                    photo & video
                  </h1>
                </div>
              </Link>
            </div>
            <Button
              to="workflow"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="
            flex justify-center items-center hover:cursor-pointer hover:font-extrabold duration-200 px-2 w-[170px] h-[43px] bg-[#F4AD24] text-white font-poppins text-2x mt-[60px] mb-[70px] tracking-wider"
            >
              <p>Our Workflow</p>
              <FiArrowDown size={20} className="ml-2" />
            </Button>
          </main>
          <aside className="hidden md:block lg:flex justify-center items-center bg-white">
            <img src={IMG2} alt="" className="h-full w-full object-cover" />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Work;
