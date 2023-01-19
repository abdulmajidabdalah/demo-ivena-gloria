import React, { useState, useEffect } from "react";
import { BsChatText } from "react-icons/bs";
import { FaWindowClose } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import ReactWhatsapp from "react-whatsapp";
import IMGWA from "../components/assets/whatsapp-icon-logo-svgrepo-com.svg";
import IMGEMAIL from "../components/assets/gmail.svg";

const ContactIcon = () => {
  const [showButton, setShowButton] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showButton && (
        <>
          <div className="fixed top-[73%] lg:top-[67%] right-5 lg:right-8 w-11 h-11 cursor-pointer">
            <a
              href="mailto:abdulmajidabdalah27@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={IMGEMAIL} alt="" />
            </a>
          </div>
          <div className="fixed top-[82%] lg:top-[75%] right-5 lg:right-8 w-10 h-10 cursor-pointer">
            <ReactWhatsapp
              number="+6285782189711"
              message="please ask something"
            >
              <img src={IMGWA} alt="" />
            </ReactWhatsapp>
          </div>
        </>
      )}

      <div
        className="fixed top-[90%] lg:top-[83%] right-5 h-12 w-12 lg:w-14 lg:h-14 rounded-[50%] bg-purple-400 text-white flex items-center justify-center cursor-pointer"
        onClick={() => setShowButton(!showButton)}
      >
        <div className="text-white">
          {showButton === true ? (
            <FaWindowClose size={25} className="text-white" />
          ) : (
            <BsChatText size={25} className="text-white" />
          )}
        </div>
      </div>
      <div className="relative hidden lg:block">
        {showTopBtn && (
          <FaAngleUp
            size={45}
            className="icon-position icon-style fixed bottom-0 right-[30px] z-20 bg-black opacity-60 border border-solid border-[#fff] rounded-t-md h-[40px] w-[40px] cursor-pointer text-white"
            onClick={goToTop}
          />
        )}
      </div>
    </div>
  );
};

export default ContactIcon;
