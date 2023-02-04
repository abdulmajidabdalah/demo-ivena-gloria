import React from "react";
import ReactWhatsapp from "react-whatsapp";

const Footer = () => {
  return (
    <>
      <footer className="lg:flex lg:justify-between md:items-center md:flex md:justify-between bg-[#2B333E] text-white md:h-0 lg:h-[14px] px-6 lg:px-12 py-8 md:pb-40 lg:pb-20 font-poppins">
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
        <div className="grid grid-cols-4 lg:gap-7 md:gap-5 items-center mx-12 lg:mx-8 mt-4 lg:mt-auto text-gray-500">
          <a
            href="https://www.instagram.com/ivenagloriardana/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="icofont-instagram icofont-2x"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCh7PRO94pak4f7K_BmC4hSw"
            target="_blank"
            rel="noreferrer"
          >
            <i className="icofont-youtube icofont-2x"></i>
          </a>
          <ReactWhatsapp number="+6285782189711" message="please ask something">
            <i className="icofont-brand-whatsapp icofont-2x"></i>
          </ReactWhatsapp>
          <a
            href="mailto:abdulmajidabdalah27@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="icofont-email icofont-2x"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
