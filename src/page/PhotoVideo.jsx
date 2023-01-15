import React, { useState, useEffect } from "react";
import IMG1 from "../components/assets/thumb_photovideo/photo.png";
import IMG2 from "../components/assets/thumb_photovideo/video.png";
import { BsCheck } from "react-icons/bs";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Helmet from "react-helmet";
import SidebarProduct from "../components/SidebarProduct";
import ButtonNavigationProduct from "../components/ButtonNavigationProduct";
import ClockLoader from "react-spinners/ClockLoader";

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
    }, 2500);
  }, []);
  return (
    <>
      {loading ? (
        <div className="h-screen flex justify-center items-center bg-[#2B333E]">
          <ClockLoader
            color="#F4AD24"
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Helmet>
            <title>Product - Photo & Video</title>
            <meta
              name="description"
              content="Photo & Video adalah Bla bla bla"
            />
          </Helmet>
          <div className="flex">
            <SidebarProduct />
            <div className="w-[100%]">
              <button
                className="bg-slate-200 text-slate-400 text-sm font-semibold flex justify-between items-center gap-1 px-3 py-2 mt-1 rounded-r-md hover:text-white hover:bg-orange-400 duration-300"
                onClick={clickToPageTiga}
              >
                <HiChevronDoubleLeft size={15} />
                Back
              </button>
              <div className="lg:h-screen">
                <div className="lg:grid lg:grid-cols-2">
                  <div className="lg:h-screen lg:pt-[75px] lg:px-6 px-3 pt-3">
                    <h1 className="text-2xl font-semibold lg:text-3xl lg:font-bold text-slate-700">
                      Photo & Video
                    </h1>
                    <div className="bg-orange-500 h-[3px] w-20 my-2"></div>
                    <div className="grid grid-cols-2 gap-2 lg:mt-16 my-10">
                      <Link
                        to={"/printing/calendar"}
                        className="group relative border-2 border-transparent rounded-md hover:border-orange-500 duration-200"
                      >
                        <img
                          src={IMG1}
                          alt=""
                          className="object-cover md:w-[400px] md:h-[300px] lg:w-[300px] lg:h-[200px] w-[200px] h-[150px]"
                        />
                        <div className="hidden absolute top-0 left-0 w-full lg:flex flex-col justify-center items-center bg-[#121111] opacity-0 group-hover:h-[85%] group-hover:opacity-80 group-hover:cursor-pointer duration-500">
                          <h1 className="uppercase text-[#F4AD24] font-semibold  ">
                            view
                          </h1>
                        </div>
                        <p className="hidden lg:block text-orange-500 bg-black opacity-80 font-semibold text-center rounded-sm py-2">
                          Photography
                        </p>
                        <div className="lg:hidden flex justify-between text-orange-500 bg-black opacity-80 font-semibold text-xs rounded-sm py-2 px-1 md:py-6 md:px-3 md:text-lg">
                          <p>Photography</p>
                          <p>Detail</p>
                        </div>
                      </Link>
                      <Link
                        to={"/printing/calendar"}
                        className="group relative border-2 border-transparent rounded-md hover:border-orange-500 duration-200"
                      >
                        <img
                          src={IMG2}
                          alt=""
                          className="object-cover md:w-[400px] md:h-[300px] lg:w-[300px] lg:h-[200px] w-[200px] h-[150px]"
                        />
                        <div className="hidden absolute top-0 left-0 w-full lg:flex flex-col justify-center items-center bg-[#121111] opacity-0 group-hover:h-[85%] group-hover:opacity-80 group-hover:cursor-pointer duration-500">
                          <h1 className="uppercase text-[#F4AD24] font-semibold  ">
                            view
                          </h1>
                        </div>
                        <p className="hidden lg:block text-orange-500 bg-black opacity-80 font-semibold text-center rounded-sm py-2">
                          Videography
                        </p>
                        <div className="lg:hidden flex justify-between text-orange-500 bg-black opacity-80 font-semibold text-xs rounded-sm py-2 px-1 md:py-6 md:px-3 md:text-lg">
                          <p>Videography</p>
                          <p>Detail</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="lg:h-screen lg:pt-[83px] lg:px-6 px-3 pt-6">
                    <h1 className="text-2xl font-semibold lg:text-3xl lg:font-bold text-slate-700">
                      Vivo V11 Indonesia
                    </h1>
                    <p
                      align="justify"
                      className="text-slate-400 leading-[25px] mt-[28px] lg:mt-[58px] lg:leading-[35px]"
                    >
                      Menyisipkan suatu produk dalam balutan tips dan trik
                      adalah salah satu metode yang efektif dalam marketing
                      suatu brand, karena pengguna akan mendapatkan suatu
                      pengetahuan dalam penggunaan produk sekaligus mengenal
                      keunggulan produk itu sendiri. Hal ini dituangkan dalam
                      video ini saat bekerjasama dengan Vivo untuk
                      memperkenalkan Vivo V11.
                    </p>
                    <div className="bg-orange-500 h-[1px] w-full my-8"></div>
                    <div className="flex justify-start items-center my-2">
                      <BsCheck size={25} className="text-orange-500 mr-2" />
                      <p className="font-semibold text-slate-400">
                        Client : VIVO Indonesia
                      </p>
                    </div>
                    <div className="flex justify-start items-center my-2">
                      <BsCheck size={25} className="text-orange-500 mr-2" />
                      <p className="font-semibold text-slate-400">
                        Project URL :{" "}
                        <span className="text-orange-500 cursor-pointer">
                          View Here
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-start items-center my-2">
                      <BsCheck size={25} className="text-orange-500 mr-2" />
                      <p className="font-semibold text-slate-400">
                        Categories : Mini Drama Video Commercial – Technology
                        Product
                      </p>
                    </div>
                    <div className="bg-orange-500 h-[1px] w-full my-8"></div>
                  </div>
                </div>
              </div>
              <BackToTop />
              <ButtonNavigationProduct />
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoVideo;
