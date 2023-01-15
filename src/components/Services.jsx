import React from "react";
import IMG2 from "./assets/services.png";
import { FiArrowDown } from "react-icons/fi";
import { Link as Button } from "react-scroll";

const Services = () => {
  return (
    <section id="services">
      <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 bg-[#1C212A]">
        <main className="col-span-2 mx-4 mt-[-1.5rem] md:mt-4 lg:mx-[68px] lg:mt-[62px]">
          <h1 className="text-4xl pt-[50px] md:text-8xl lg:pt-0 lg:text-8xl text-[#282F3C] font-poppins font-extrabold tracking-wider">
            Services.
          </h1>
          <h2 className="font-extrabold font-poppins text-2xl md:text-4xl text-[#FFFFFF] tracking-wider">
            YOUR DESIRE IS <br /> MATTERS.
          </h2>
          <article>
            <h2 className="text-[#FFFFFF] font-poppins font-extrabold tracking-wider text-xl mt-[88px]">
              01. CREATIVE & STRATEGY.
            </h2>
            <div className="w-[130px] h-[1px] bg-[#F4AD24] mb-[33px] mt-[24px]"></div>
            <p
              align="justify"
              className="text-[#6E8890] font-poppins text-sm tracking-wide mb-[75px]"
            >
              We believe that creativity plays a big part in conveying the true
              essence of an idea. We can be part of your team to create
              interesting wild ideas with mature strategies so that they are
              capable and ready to be applied to the product campaign you want
              to launch with the right deadline.
            </p>
          </article>
          <article>
            <h2 className="text-[#FFFFFF] font-poppins font-extrabold tracking-wider text-xl mt-[88px]">
              02. PHOTO & VIDEO PRODUCTION.
            </h2>
            <div className="w-[130px] h-[1px] bg-[#F4AD24] mb-[33px] mt-[24px]"></div>
            <p
              align="justify"
              className="text-[#6E8890] font-poppins text-sm tracking-wide mb-[75px]"
            >
              We have a professional photographer and video team, and we have
              the latest equipment for high-quality video production. So don’t
              be hesitate, because we can improve the quality of your video
              content from basic to professional techniques to create what you
              really desire.
            </p>
          </article>
          <article>
            <h2 className="text-[#FFFFFF] font-poppins font-extrabold tracking-wider text-xl mt-[88px]">
              03. INFLUENCER & COMMUNITY MARKETING.
            </h2>
            <div className="w-[130px] h-[1px] bg-[#F4AD24] mb-[33px] mt-[24px]"></div>
            <p
              align="justify"
              className="text-[#6E8890] font-poppins text-sm tracking-wide mb-[75px]"
            >
              We have collaborated with influencers and communities on a small
              and large scales. entrust your brand to us and we will improve
              your marketing management performance with an efficient budget and
              attractive campaign strategies to achieve brand awareness
              expansion and increase customer engagement.
            </p>
          </article>
          <article>
            <h2 className="text-[#FFFFFF] font-poppins font-extrabold tracking-wider text-xl mt-[88px]">
              04. CREATIVE SOCIAL MEDIA CAMPAIGN.
            </h2>
            <div className="w-[130px] h-[1px] bg-[#F4AD24] mb-[33px] mt-[24px]"></div>
            <p
              align="justify"
              className="text-[#6E8890] font-poppins text-sm tracking-wide mb-[82px]"
            >
              It doesn’t stop at making videos or photos of content, we also
              care about how your project affects the wider community. We can
              help you attract the right customers with the right information at
              the right time and help you showcase your product or brand to
              potential customers.
            </p>
          </article>
          <Button
            to="clients"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="
            flex justify-center items-center hover:cursor-pointer hover:font-extrabold duration-200 w-[136px] h-[43px] bg-[#F4AD24] text-white font-poppins text-2x mt-[60px] mb-[70px] tracking-wider"
          >
            <p>Clients</p>
            <FiArrowDown size={20} className="ml-2" />
          </Button>
        </main>
        <aside className="hidden md:block lg:flex justify-center items-center bg-slate-200">
          <img src={IMG2} alt="" cl className="object-cover" />
        </aside>
      </div>
    </section>
  );
};

export default Services;
