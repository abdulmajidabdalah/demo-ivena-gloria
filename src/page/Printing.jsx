import React, { useState, useEffect } from "react";
import { BsCheck } from "react-icons/bs";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { Helmet } from "react-helmet";
import SidebarProduct from "../components/SidebarProduct";
import ClockLoader from "react-spinners/ClockLoader";
import { thumbPrinting } from "../data/thumbPrinting";
import NavbarProduct from "../components/NavbarProduct";

const Printing = () => {
  let navigate = useNavigate();
  const clickNext = () => {
    navigate("/merchandise");
  };
  const clickPrev = () => {
    navigate("/editorial");
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
          <NavbarProduct />
          <Helmet>
            <title>Product - Printing</title>
            <meta
              name="description"
              content="Editorial berisi tentang bla bla bla"
            />
          </Helmet>
          <div className="flex">
            <SidebarProduct />
            <div className="w-[100%]">
              <div className="flex justify-between mt-16 lg:mt-0">
                <button
                  className="bg-slate-200 text-slate-400 text-sm font-semibold flex justify-between items-center gap-1 px-3 py-2 mt-1 rounded-r-md hover:text-white hover:bg-orange duration-300"
                  onClick={clickPrev}
                >
                  <HiChevronDoubleLeft size={15} />
                  Prev
                </button>
                <button
                  className="bg-slate-200 text-slate-400 text-sm font-semibold flex justify-between items-center gap-1 px-3 py-2 mt-1 rounded-l-md hover:text-white hover:bg-orange duration-300"
                  onClick={clickNext}
                >
                  Next
                  <HiChevronDoubleRight size={15} />
                </button>
              </div>
              <div className="">
                <div className="lg:grid lg:grid-cols-2">
                  <div className="lg:pt-[75px] lg:px-6 px-3 pt-3">
                    <h1 className="text-2xl font-semibold lg:text-3xl lg:font-bold text-slate-700">
                      Printing
                    </h1>
                    <div className="bg-orange-500 h-[3px] w-20 my-2"></div>
                    <div className="grid grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-2 gap-3 lg:mt-16 my-10">
                      <Link
                        to={"/printing/calendar"}
                        className="group relative border-2 border-transparent rounded-md hover:border-orange-500 duration-200"
                      >
                        <img
                          src={thumbPrinting[0].image}
                          alt=""
                          className="object-cover lg:w-[300px] lg:h-[200px] w-[200px] h-[150px]"
                        />
                        <div className="hidden absolute top-0 left-0 w-full lg:flex flex-col justify-center items-center bg-[#121111] opacity-0 group-hover:h-[85%] group-hover:opacity-80 group-hover:cursor-pointer duration-500">
                          <h1 className="uppercase text-[#F4AD24] font-semibold  ">
                            view
                          </h1>
                        </div>
                        <p className="hidden lg:block text-orange bg-black opacity-80 font-semibold text-center rounded-sm py-2">
                          {thumbPrinting[0].desc}
                        </p>
                        <div className="lg:hidden flex justify-between text-orange bg-black opacity-80 font-semibold text-xs rounded-sm py-2 px-1">
                          <p>{thumbPrinting[0].desc}</p>
                          <p>Detail</p>
                        </div>
                      </Link>
                      <Link
                        to={"/printing/brochure"}
                        className="group relative border-2 border-transparent rounded-md hover:border-orange-500 duration-200"
                      >
                        <img
                          src={thumbPrinting[1].image}
                          alt=""
                          className="object-cover lg:w-[300px] lg:h-[200px] w-[200px] h-[150px]"
                        />
                        <div className="hidden absolute top-0 left-0 w-full lg:flex flex-col justify-center items-center bg-[#121111] opacity-0 group-hover:h-[85%] group-hover:opacity-80 group-hover:cursor-pointer duration-500">
                          <h1 className="uppercase text-[#F4AD24] font-semibold  ">
                            view
                          </h1>
                        </div>
                        <p className="hidden lg:block text-orange bg-black opacity-80 font-semibold text-center rounded-sm py-2">
                          {thumbPrinting[1].desc}
                        </p>
                        <div className="lg:hidden flex justify-between text-orange bg-black opacity-80 font-semibold text-xs rounded-sm py-2 px-1">
                          <p>{thumbPrinting[1].desc}</p>
                          <p>Detail</p>
                        </div>
                      </Link>
                      <Link
                        to={"/printing/billboard"}
                        className="group relative border-2 border-transparent rounded-md hover:border-orange-500 duration-200"
                      >
                        <img
                          src={thumbPrinting[2].image}
                          alt=""
                          className="object-cover lg:w-[300px] lg:h-[200px] w-[200px] h-[150px]"
                        />
                        <div className="hidden absolute top-0 left-0 w-full lg:flex flex-col justify-center items-center bg-[#121111] opacity-0 group-hover:h-[85%] group-hover:opacity-80 group-hover:cursor-pointer duration-500">
                          <h1 className="uppercase text-[#F4AD24] font-semibold  ">
                            view
                          </h1>
                        </div>
                        <p className="hidden lg:block text-orange bg-black opacity-80 font-semibold text-center rounded-sm py-2">
                          {thumbPrinting[2].desc}
                        </p>
                        <div className="lg:hidden flex justify-between text-orange bg-black opacity-80 font-semibold text-xs rounded-sm py-2 px-1">
                          <p>{thumbPrinting[2].desc}</p>
                          <p>Detail</p>
                        </div>
                      </Link>
                      <Link
                        to={"/printing/banner"}
                        className="group relative border-2 border-transparent rounded-md hover:border-orange-500 duration-200"
                      >
                        <img
                          src={thumbPrinting[3].image}
                          alt=""
                          className="object-cover lg:w-[300px] lg:h-[200px] w-[200px] h-[150px]"
                        />
                        <div className="hidden absolute top-0 left-0 w-full lg:flex flex-col justify-center items-center bg-[#121111] opacity-0 group-hover:h-[85%] group-hover:opacity-80 group-hover:cursor-pointer duration-500">
                          <h1 className="uppercase text-[#F4AD24] font-semibold  ">
                            view
                          </h1>
                        </div>
                        <p className="hidden lg:block text-orange bg-black opacity-80 font-semibold text-center rounded-sm py-2">
                          {thumbPrinting[3].desc}
                        </p>
                        <div className="lg:hidden flex justify-between text-orange bg-black opacity-80 font-semibold text-xs rounded-sm py-2 px-1">
                          <p>{thumbPrinting[3].desc}</p>
                          <p>Detail</p>
                        </div>
                      </Link>
                      <Link
                        to={"/printing/greeting_card"}
                        className="group relative border-2 border-transparent rounded-md hover:border-orange-500 duration-200"
                      >
                        <img
                          src={thumbPrinting[4].image}
                          alt=""
                          className="object-cover lg:w-[300px] lg:h-[200px] w-[200px] h-[150px]"
                        />
                        <div className="hidden absolute top-0 left-0 w-full lg:flex flex-col justify-center items-center bg-[#121111] opacity-0 group-hover:h-[85%] group-hover:opacity-80 group-hover:cursor-pointer duration-500">
                          <h1 className="uppercase text-[#F4AD24] font-semibold  ">
                            view
                          </h1>
                        </div>
                        <p className="hidden lg:block text-orange bg-black opacity-80 font-semibold text-center rounded-sm py-2">
                          {thumbPrinting[4].desc}
                        </p>
                        <div className="lg:hidden flex justify-between text-orange bg-black opacity-80 font-semibold text-xs rounded-sm py-2 px-1">
                          <p>{thumbPrinting[4].desc}</p>
                          <p>Detail</p>
                        </div>
                      </Link>
                      <Link
                        to={"/printing/sticker"}
                        className="group relative border-2 border-transparent rounded-md hover:border-orange-500 duration-200"
                      >
                        <img
                          src={thumbPrinting[5].image}
                          alt=""
                          className="object-cover lg:w-[300px] lg:h-[200px] w-[200px] h-[150px]"
                        />
                        <div className="hidden absolute top-0 left-0 w-full lg:flex flex-col justify-center items-center bg-[#121111] opacity-0 group-hover:h-[85%] group-hover:opacity-80 group-hover:cursor-pointer duration-500">
                          <h1 className="uppercase text-[#F4AD24] font-semibold  ">
                            view
                          </h1>
                        </div>
                        <p className="hidden lg:block text-orange bg-black opacity-80 font-semibold text-center rounded-sm py-2">
                          {thumbPrinting[5].desc}
                        </p>
                        <div className="lg:hidden flex justify-between text-orange bg-black opacity-80 font-semibold text-xs rounded-sm py-2 px-1">
                          <p>{thumbPrinting[5].desc}</p>
                          <p>Detail</p>
                        </div>
                      </Link>
                      <Link
                        to={"/printing/stationary"}
                        className="group relative border-2 border-transparent rounded-md hover:border-orange-500 duration-200"
                      >
                        <img
                          src={thumbPrinting[6].image}
                          alt=""
                          className="object-cover lg:w-[300px] lg:h-[200px] w-[200px] h-[150px]"
                        />
                        <div className="hidden absolute top-0 left-0 w-full lg:flex flex-col justify-center items-center bg-[#121111] opacity-0 group-hover:h-[85%] group-hover:opacity-80 group-hover:cursor-pointer duration-500">
                          <h1 className="uppercase text-[#F4AD24] font-semibold  ">
                            view
                          </h1>
                        </div>
                        <p className="hidden lg:block text-orange bg-black opacity-80 font-semibold text-center rounded-sm py-2">
                          {thumbPrinting[6].desc}
                        </p>
                        <div className="lg:hidden flex justify-between text-orange bg-black opacity-80 font-semibold text-xs rounded-sm py-2 px-1">
                          <p>{thumbPrinting[6].desc}</p>
                          <p>Detail</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="lg:h-screen lg:pt-[83px] lg:px-6 px-3 pt-6 lg:sticky lg:top-0 bottom-0">
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
                    <div className="bg-orange h-[1px] w-full my-8"></div>
                    <div className="flex justify-start items-center my-2">
                      <BsCheck size={25} className="text-orange mr-2" />
                      <p className="font-semibold text-slate-400">
                        Client : VIVO Indonesia
                      </p>
                    </div>
                    <div className="flex justify-start items-center my-2">
                      <BsCheck size={25} className="text-orange mr-2" />
                      <p className="font-semibold text-slate-400">
                        Project URL :{" "}
                        <span className="text-orange cursor-pointer">
                          View Here
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-start items-center my-2">
                      <BsCheck size={25} className="text-orange mr-2" />
                      <p className="font-semibold text-slate-400">
                        Categories : Mini Drama Video Commercial – Technology
                        Product
                      </p>
                    </div>
                    <div className="bg-orange h-[1px] w-full my-8"></div>
                  </div>
                </div>
              </div>
              <BackToTop />
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Printing;
