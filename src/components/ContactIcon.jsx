import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import ReactWhatsapp from "react-whatsapp";

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
          <div className="grid grid-rows-2 gap-2 fixed top-[71%] lg:top-[63%] right-5 cursor-pointer">
            <a
              href="mailto:abdulmajidabdalah27@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="h-12 w-12 lg:w-14 lg:h-14 bg-purple-400 text-white rounded-[50%] flex justify-center items-center"
            >
              <i className="icofont-email icofont-2x"></i>
            </a>
            <ReactWhatsapp
              number="+6285782189711"
              message="please ask something"
              className="h-12 w-12 lg:w-14 lg:h-14 bg-purple-400 text-white rounded-[50%] flex justify-center items-center"
            >
              <i className="icofont-brand-whatsapp icofont-2x"></i>
            </ReactWhatsapp>
          </div>
        </>
      )}

      <div
        className="fixed top-[88%] lg:top-[83%] right-5 h-12 w-12 lg:w-14 lg:h-14 rounded-[50%] bg-purple-400 text-white flex items-center justify-center cursor-pointer"
        onClick={() => setShowButton(!showButton)}
      >
        <div className="text-white">
          {showButton === true ? (
            <i className="icofont-close-circled icofont-2x"></i>
          ) : (
            <i className="icofont-ui-chat icofont-2x"></i>
          )}
        </div>
      </div>
      <div className="relative">
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
