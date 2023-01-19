import React, { useState, useEffect } from "react";
import { BsCheck } from "react-icons/bs";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { Helmet } from "react-helmet";

import { thumbEditorial } from "../data/thumbEditorial";
import SidebarProduct from "../components/SidebarProduct";

import ClockLoader from "react-spinners/ClockLoader";
import NavbarProduct from "../components/NavbarProduct";

const Editorial = () => {
  let navigate = useNavigate();
  const nextNav = () => {
    navigate("/printing");
  };
  const clickBackToHome = () => {
    navigate("/");
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
            <title>Product - Editorial</title>
            <meta
              name="description"
              content="Editorial berisi tentang bla bla bla"
            />
          </Helmet>
          <section className="flex">
            <SidebarProduct />
            <div className="w-[100%] mt-2">
              <main>
                <header className="flex justify-between mt-16 lg:mt-0">
                  <button
                    className="bg-slate-200 text-slate-400 text-sm font-semibold flex justify-between items-center gap-1 px-3 py-2 mt-1 rounded-r-md hover:text-white hover:bg-orange duration-300"
                    onClick={clickBackToHome}
                  >
                    <HiChevronDoubleLeft size={15} />
                    Back to home
                  </button>
                  <button
                    className="bg-slate-200 text-slate-400 text-sm font-semibold flex justify-between items-center gap-1 px-3 py-2 mt-1 rounded-l-md hover:text-white hover:bg-orange duration-300"
                    onClick={nextNav}
                  >
                    Next
                    <HiChevronDoubleRight size={15} />
                  </button>
                </header>
                <div className="lg:grid lg:grid-cols-2">
                  <div className="lg:px-6 px-3 pt-3">
                    <h1 className="text-2xl font-semibold lg:text-3xl lg:font-bold text-slate-700">
                      Editorial
                    </h1>
                    <div className="bg-orange h-[3px] w-20 my-2"></div>
                    <div className="grid grid-cols-2 gap-3 md:grid md:grid-cols-3 lg:grid lg:grid-cols-2 lg:mt-16 my-10">
                      <Link
                        to={"/editorial/magazine"}
                        className="group relative border-2 border-transparent rounded-md hover:border-orange-500 duration-200"
                      >
                        <img
                          src={thumbEditorial[0].image}
                          alt=""
                          className="object-cover lg:w-[300px] lg:h-[200px] w-[200px] h-[150px]"
                        />
                        <div className="hidden absolute top-0 left-0 w-full lg:flex flex-col justify-center items-center bg-[#121111] opacity-0 group-hover:h-[85%] group-hover:opacity-80 group-hover:cursor-pointer duration-500">
                          <h1 className="uppercase text-[#F4AD24] font-semibold  ">
                            view
                          </h1>
                        </div>
                        <p className="hidden lg:block text-orange bg-black opacity-80 font-semibold text-center rounded-sm py-2">
                          {thumbEditorial[0].desc}
                        </p>
                        <div className="lg:hidden flex justify-between bg-black opacity-80 font-semibold text-xs rounded-sm py-2 px-1 text-orange">
                          <p>{thumbEditorial[0].desc}</p>
                          <p>Detail</p>
                        </div>
                      </Link>
                      <Link
                        to={"/editorial/company_profile"}
                        className="group relative border-2 border-transparent rounded-md hover:border-orange-500 duration-200"
                      >
                        <img
                          src={thumbEditorial[1].image}
                          alt=""
                          className="object-cover lg:w-[300px] lg:h-[200px] w-[200px] h-[150px]"
                        />
                        <div className="hidden absolute top-0 left-0 w-full lg:flex flex-col justify-center items-center bg-[#121111] opacity-0 group-hover:h-[85%] group-hover:opacity-80 group-hover:cursor-pointer duration-500">
                          <h1 className="uppercase text-[#F4AD24] font-semibold  ">
                            view
                          </h1>
                        </div>
                        <p className="hidden lg:block text-orange bg-black opacity-80 font-semibold text-center rounded-sm py-2">
                          {thumbEditorial[1].desc}
                        </p>
                        <div className="lg:hidden flex justify-between bg-black opacity-80 font-semibold text-xs rounded-sm py-2 px-1 text-orange">
                          <p>{thumbEditorial[1].desc}</p>
                          <p>Detail</p>
                        </div>
                      </Link>
                      <Link
                        to={"/editorial/sustainability_report"}
                        className="group relative border-2 border-transparent rounded-md hover:border-orange-500 duration-200"
                      >
                        <img
                          src={thumbEditorial[2].image}
                          alt=""
                          className="object-cover lg:w-[300px] lg:h-[200px] w-[200px] h-[150px]"
                        />
                        <div className="hidden absolute top-0 left-0 w-full lg:flex flex-col justify-center items-center bg-[#121111] opacity-0 group-hover:h-[85%] group-hover:opacity-80 group-hover:cursor-pointer duration-500">
                          <h1 className="uppercase text-[#F4AD24] font-semibold  ">
                            view
                          </h1>
                        </div>
                        <p className="hidden lg:block text-orange bg-black opacity-80 font-semibold text-center rounded-sm py-2">
                          {thumbEditorial[2].desc}
                        </p>
                        <div className="lg:hidden flex justify-between bg-black opacity-80 font-semibold text-xs rounded-sm py-2 px-1 text-orange">
                          <p>{thumbEditorial[2].desc}</p>
                          <p>Detail</p>
                        </div>
                      </Link>
                      <Link
                        to={"/editorial/corporate_book"}
                        className="group relative border-2 border-transparent rounded-md hover:border-orange-500 duration-200"
                      >
                        <img
                          src={thumbEditorial[3].image}
                          alt=""
                          className="object-cover lg:w-[300px] lg:h-[200px] w-[200px] h-[150px]"
                        />
                        <div className="hidden absolute top-0 left-0 w-full lg:flex flex-col justify-center items-center bg-[#121111] opacity-0 group-hover:h-[85%] group-hover:opacity-80 group-hover:cursor-pointer duration-500">
                          <h1 className="uppercase text-[#F4AD24] font-semibold  ">
                            view
                          </h1>
                        </div>
                        <p className="hidden lg:block text-orange bg-black opacity-80 font-semibold text-center rounded-sm py-2">
                          {thumbEditorial[3].desc}
                        </p>
                        <div className="lg:hidden flex justify-between bg-black opacity-80 font-semibold text-xs rounded-sm py-2 px-1 text-orange">
                          <p>{thumbEditorial[3].desc}</p>
                          <p>Detail</p>
                        </div>
                      </Link>
                      <Link
                        to={"/editorial/annual_report"}
                        className="group relative border-2 border-transparent rounded-md hover:border-orange-500 duration-200"
                      >
                        <img
                          src={thumbEditorial[4].image}
                          alt=""
                          className="object-cover lg:w-[300px] lg:h-[200px] w-[200px] h-[150px]"
                        />
                        <div className="hidden absolute top-0 left-0 w-full lg:flex flex-col justify-center items-center bg-[#121111] opacity-0 group-hover:h-[85%] group-hover:opacity-80 group-hover:cursor-pointer duration-500">
                          <h1 className="uppercase text-[#F4AD24] font-semibold  ">
                            view
                          </h1>
                        </div>
                        <p className="hidden lg:block text-orange bg-black opacity-80 font-semibold text-center rounded-sm py-2">
                          {thumbEditorial[4].desc}
                        </p>
                        <div className="lg:hidden flex justify-between bg-black opacity-80 font-semibold text-xs rounded-sm py-2 px-1 text-orange">
                          <p>{thumbEditorial[4].desc}</p>
                          <p>Detail</p>
                        </div>
                      </Link>
                      <Link
                        to={"/editorial/catalog_book"}
                        className="group relative border-2 border-transparent rounded-md hover:border-orange-500 duration-200"
                      >
                        <img
                          src={thumbEditorial[5].image}
                          alt=""
                          className="object-cover lg:w-[300px] lg:h-[200px] w-[200px] h-[150px]"
                        />
                        <div className="hidden absolute top-0 left-0 w-full lg:flex flex-col justify-center items-center bg-[#121111] opacity-0 group-hover:h-[85%] group-hover:opacity-80 group-hover:cursor-pointer duration-500">
                          <h1 className="uppercase text-[#F4AD24] font-semibold  ">
                            view
                          </h1>
                        </div>
                        <p className="hidden lg:block text-orange bg-black opacity-80 font-semibold text-center rounded-sm py-2">
                          {thumbEditorial[5].desc}
                        </p>
                        <div className="lg:hidden flex justify-between bg-black opacity-80 font-semibold text-xs rounded-sm py-2 px-1 text-orange">
                          <p>{thumbEditorial[5].desc}</p>
                          <p>Detail</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="lg:h-screen lg:px-6 px-3 pt-6 lg:sticky lg:top-0">
                    <h1 className="text-2xl font-semibold lg:text-3xl lg:font-bold text-slate-700">
                      POCO M3 by POCO Indonesia
                    </h1>
                    <article
                      align="justify"
                      className="text-slate-400 lg:mt-[58px] lg:leading-[35px] leading-[25px] mt-[28px]"
                    >
                      Video yang membahas keunggulan produk telepon seluler,
                      yaitu Poco M3 dengan mengambil ide berdasarkan situasi
                      yang sedang terjadi dalam sudut pandang anak muda sebagai
                      pangsa pasar produk tersebut, sehingga lebih terasa
                      natural dan ringan untuk ditonton karena dibalut dengan
                      sentuhan komedi dan fun.
                    </article>
                    <div className="bg-orange h-[1px] w-full my-8"></div>
                    <div className="flex justify-start items-center my-2">
                      <BsCheck size={25} className="text-orange mr-2" />
                      <p className="font-semibold text-slate-400">
                        Client : POCO Indonesia
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
                        Categories : Video Komersial – Technology Product
                      </p>
                    </div>
                    <div className="bg-orange h-[1px] w-full my-8"></div>
                  </div>
                </div>
              </main>
              <BackToTop />
              <Footer />
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Editorial;
