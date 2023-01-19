import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const BackToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
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
      <div className="relative">
        {showTopBtn && (
          <FaAngleUp
            size={45}
            className="icon-position icon-style fixed bottom-0 lg:bottom-0 right-[30px] z-20 bg-black opacity-60 border border-solid border-[#fff] rounded-t-md h-[40px] w-[40px] cursor-pointer text-white"
            onClick={goToTop}
          />
        )}
      </div>
    </div>
  );
};

export default BackToTop;
