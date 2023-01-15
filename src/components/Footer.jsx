import React from "react";
import IMG1 from "../components/assets/instagram-1-svgrepo-com.svg";
import IMG2 from "../components/assets/youtube-icon.svg";
import IMG3 from "../components/assets/whatsapp-icon-logo-svgrepo-com.svg";
import IMG4 from "../components/assets/gmail.svg";
import ReactWhatsapp from "react-whatsapp";

const Footer = () => {
  return (
    <>
      <footer className="lg:flex lg:justify-between md:items-center md:flex md:justify-between bg-[#2B333E] text-white h-[35vh] md:h-0 lg:h-[14px] px-6 lg:px-12 py-8 md:pb-40 lg:pb-20 font-poppins">
        <article className="block">
          <p className="text-gray-500 text-sm md:mt-6">
            &copy;Copyright 2023 |{" "}
            <span className="text-white text-sm">PT. Ivena Gloria Ardana</span>
          </p>
          <p className="text-gray-500 mt-2 lg:mt-4 text-sm">
            Rukan Sentra Bisnis Grand Galaxy City RSA 5 No 20, RT.001/RW.002,{" "}
            <br />
            Jaka Setia, Kec. Bekasi Seletan, Kota Bekasi, Jawa Barat 17147
          </p>
        </article>
        <div className="grid grid-cols-4 lg:gap-7 md:gap-5 items-center mx-12 lg:mx-8 mt-4 lg:mt-auto">
          <a
            href="https://www.instagram.com/ivenagloriardana/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={IMG1} alt="" className="h-[40px] w-[40px] object-cover" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCh7PRO94pak4f7K_BmC4hSw"
            target="_blank"
            rel="noreferrer"
          >
            <img src={IMG2} alt="" className="h-[40px] w-[40px] object-cover" />
          </a>
          <ReactWhatsapp number="+6285782189711" message="please ask something">
            <img src={IMG3} alt="" className="h-[40px] w-[40px] object-cover" />
          </ReactWhatsapp>
          <a
            href="mailto:abdulmajidabdalah27@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={IMG4} alt="" className="h-[40px] w-[40px] object-cover" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
