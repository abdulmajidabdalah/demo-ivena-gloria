import React from "react";
import Logo from "../components/assets/LogoIvena.png";
import { Link, useNavigate } from "react-router-dom";

const AsideDetailProduct = () => {
  let navigate = useNavigate();

  const clickBackToEditorial = () => {
    navigate("/editorial");
  };
  const clickBackToPrinting = () => {
    navigate("/printing");
  };
  const clickBackToMerchandise = () => {
    navigate("/merchandise");
  };
  const clickBackToPhotoVideo = () => {
    navigate("/photo&video");
  };

  return (
    <div className="hidden lg:block">
      <div className="w-[230px] grid grid-rows-5 h-screen sticky top-1">
        <nav className="bg-white flex justify-center items-center cursor-pointer">
          <Link to="/" className="">
            <img src={Logo} alt="logo" />
          </Link>
        </nav>
        <nav className="bg-bg-aside border-b-[0.5px] border-gray-500 flex justify-center items-center text-center text-gray-500">
          <button
            onClick={clickBackToEditorial}
            className="hover:text-orange hover:cursor-pointer"
          >
            <div>
              <i className="icofont-book-alt icofont-2x"></i>
              <p className="font-poppins font-bold text-xl">Editorial</p>
            </div>
          </button>
        </nav>
        <nav className="bg-bg-aside border-b-[0.5px] border-gray-500 flex justify-center items-center text-center text-gray-500">
          <button
            onClick={clickBackToPrinting}
            className="hover:text-orange hover:cursor-pointer duration-200"
          >
            <div>
              <i className="icofont-paint-brush icofont-2x"></i>
              <p className="font-poppins font-bold text-xl">Printing</p>
            </div>
          </button>
        </nav>
        <nav className="bg-bg-aside border-b-[0.5px] border-gray-500 flex justify-center items-center text-center text-gray-500">
          <button
            onClick={clickBackToMerchandise}
            className="hover:text-orange hover:cursor-pointer duration-200"
          >
            <div>
              <i className="icofont-package icofont-2x"></i>
              <p className="font-poppins font-bold text-xl">Merchandise</p>
            </div>
          </button>
        </nav>
        <nav className="bg-bg-aside border-b-[0.5px] border-gray-500 flex justify-center items-center text-center text-gray-500">
          <button
            onClick={clickBackToPhotoVideo}
            className="hover:text-orange hover:cursor-pointer duration-200"
          >
            <div>
              <i className="icofont-camera icofont-2x"></i>
              <p className="font-poppins font-bold text-xl">Photo & Video</p>
            </div>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default AsideDetailProduct;
