import React, { useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import IMG2 from "./assets/home/client.jpg";
import { clients } from "../data/clients";
import { Link as Button } from "react-scroll";

const Clients = () => {
  const [noOfElement, setNoOfElement] = useState(24);
  const loadMore = () => {
    setNoOfElement(noOfElement + 16);
  };
  const slice = clients.slice(0, noOfElement);
  return (
    <section id="clients">
      <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 bg-[#FFFFFF]">
        <main className="col-span-2 mx-4 md:mt-[50px] lg:mx-[68px] lg:mt-[87px] ">
          <h1 className="text-6xl pt-[50px] lg:pt-0 lg:text-8xl text-[#F2F2F2] font-poppins font-bold tracking-wider">
            Clients.
          </h1>
          <h2 className="font-extrabold font-poppins text-lg lg:text-4xl text-[#333C4E] tracking-wider mb-[45px] lg:mt-[30px] lg:mb-[75px]">
            OUR HAPPY CLIENTS.
          </h2>
          <div className="grid grid-cols-4 md:grid md:grid-cols-6 lg:grid lg:grid-cols-8 gap-2 mb-[40px] lg:mb-[40px]">
            {slice.map((item) => (
              <>
                <img src={item.image} alt="" />
              </>
            ))}
          </div>
          <button
            className={
              noOfElement === 40
                ? "hidden"
                : "block bg-slate-200 text-slate-400 px-5 py-2 mb-[35px] lg:mb-[45px] m-auto rounded-sm tracking-[0.2em] hover:bg-[#F4AD24] hover:text-white duration-300"
            }
            onClick={() => loadMore()}
          >
            Load More
          </button>
          <Button
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="
            flex justify-center items-center hover:cursor-pointer hover:font-extrabold duration-200 w-[136px] h-[43px] bg-[#F4AD24] text-white font-poppins text-2x mt-[60px] mb-[70px] tracking-wider"
          >
            <p>Contact</p>
            <FiArrowDown size={20} className="ml-2" />
          </Button>
        </main>
        <aside className="hidden lg:block md:block bg-slate-100">
          <img src={IMG2} alt="" className="object-cover h-full" />
        </aside>
      </div>
    </section>
  );
};

export default Clients;
