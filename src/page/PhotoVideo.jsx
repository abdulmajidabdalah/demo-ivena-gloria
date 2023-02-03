import React, { useState, useEffect } from "react";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Helmet from "react-helmet";
import SidebarProduct from "../components/SidebarProduct";
import RingLoader from "react-spinners/RingLoader";
import IMG from "../components/assets/folder-svgrepo-com.svg";
import NavbarProduct from "../components/NavbarProduct";
import ContactIcon from "../components/ContactIcon";

const PhotoVideo = () => {
  let toPageDua = useNavigate();
  const clickToPageTiga = () => {
    toPageDua("/merchandise");
  };
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <RingLoader color="black" size={120} />
        </div>
      ) : (
        <div>
          <NavbarProduct />
          <Helmet>
            <title>Product - Photo & Video</title>
            <meta
              name="description"
              content="Photo & Video adalah Bla bla bla"
            />
          </Helmet>
          <div className="flex">
            <SidebarProduct />
            <div className="w-full mt-16 lg:mt-0">
              <div className="lg:h-screen md:h-screen h-screen p-3">
                <h1 className="text-2xl font-semibold lg:text-3xl lg:font-bold text-slate-700">
                  Photo & Video
                </h1>
                <div className="bg-orange h-[3px] w-20 my-2"></div>
                <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 grid grid-cols-1 gap-y-2 gap-2 lg:mt-16 my-10">
                  <Link
                    to={"/photo&video/photo"}
                    className="border border-slate-400 rounded-lg h-[70px] flex justify-start items-center px-4 gap-4"
                  >
                    <img src={IMG} alt="" className="h-[50px] w-[50px]" />
                    <p className="text-center font-poppins tracking-wider">
                      Photography
                    </p>
                  </Link>
                  <Link
                    to={"/photo&video/video"}
                    className="border border-slate-400 rounded-lg h-[70px] flex justify-start items-center px-4 gap-4"
                  >
                    <img src={IMG} alt="" className="h-[50px] w-[50px]" />
                    <p className="text-center font-poppins tracking-wider">
                      Videography
                    </p>
                  </Link>
                </div>
                <button
                  className="bg-slate-200 text-slate-400 text-sm font-semibold flex justify-between items-center gap-1 px-3 py-2 mt-1 rounded-md hover:text-white hover:bg-orange duration-300"
                  onClick={clickToPageTiga}
                >
                  <HiChevronDoubleLeft size={15} />
                  Back
                </button>
              </div>
              <ContactIcon />
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoVideo;
