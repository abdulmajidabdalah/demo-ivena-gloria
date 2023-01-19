import React from "react";
import Logo from "../components/assets/LogoIvena.png";
import { CiShop } from "react-icons/ci";
import { BsCamera } from "react-icons/bs";
import { BiBookBookmark, BiPaintRoll } from "react-icons/bi";
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
        <nav className="bg-[#2B333E] border-t-2 border-white flex justify-start items-center text-center text-gray-500  duration-150 pl-4">
          <button
            onClick={clickBackToEditorial}
            className="flex justify-between items-center gap-1 hover:text-[#F4AD24]"
          >
            <BiBookBookmark size={35} className="" />
            <p className="font-poppins font-bold text-xl mt-2">Editorial</p>
          </button>
        </nav>
        <nav className="bg-[#2B333E] border-t-2 border-white flex justify-start items-center text-center text-gray-500  duration-150 pl-4">
          <button
            onClick={clickBackToPrinting}
            className="flex justify-between items-center gap-2 hover:text-[#F4AD24]"
          >
            <BiPaintRoll size={35} className="" />
            <p className="font-poppins font-bold text-xl mt-2">Printing</p>
          </button>
        </nav>
        <nav className="bg-[#2B333E] border-t-2 border-white flex justify-start items-center text-center text-gray-500 duration-150 pl-4">
          <button
            onClick={clickBackToMerchandise}
            className="flex justify-between items-center gap-2 hover:text-[#F4AD24]"
          >
            <CiShop size={35} className="" />
            <p className="font-poppins font-bold text-xl mt-2">Merchandise</p>
          </button>
        </nav>
        <nav className="bg-[#2B333E] border-t-2 border-white flex justify-start items-center text-center text-gray-500 duration-150 pl-4">
          <button
            onClick={clickBackToPhotoVideo}
            className="flex justify-between items-center gap-2 hover:text-[#F4AD24]"
          >
            <BsCamera size={35} className="" />
            <p className="font-poppins font-bold text-xl mt-1">Photo & Video</p>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default AsideDetailProduct;
