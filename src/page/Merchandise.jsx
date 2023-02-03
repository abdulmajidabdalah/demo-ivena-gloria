import React, { useState, useEffect } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import SidebarProduct from "../components/SidebarProduct";
import RingLoader from "react-spinners/RingLoader";
import IMG from "../components/assets/folder-svgrepo-com.svg";
import NavbarProduct from "../components/NavbarProduct";
import ContactIcon from "../components/ContactIcon";

const Merchandise = () => {
  let toPageDua = useNavigate();
  const clickToPageDua = () => {
    toPageDua("/printing");
  };
  const clickToPageEmpat = () => {
    toPageDua("/photo&video");
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
            <title>Product - Merchandise</title>
            <meta name="description" content="Editorial" />
          </Helmet>
          <div className="flex">
            <SidebarProduct />
            <div className="w-full">
              <div className="p-3 md:h-screen lg:h-screen">
                <h1 className="text-2xl font-semibold lg:text-3xl lg:font-bold text-slate-700">
                  Merchandise
                </h1>
                <div className="bg-orange h-[3px] w-20 my-2"></div>
                <div className="grid grid-cols-1 gap-y-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-3 lg:mt-16 my-10">
                  <Link
                    to={"/merchandise/souvenir"}
                    className="border border-slate-400 rounded-lg h-[70px] flex justify-start items-center px-4 gap-4"
                  >
                    <img src={IMG} alt="" className="h-[50px] w-[50px]" />
                    <p className="text-center font-poppins tracking-wider">
                      Souvenir
                    </p>
                  </Link>
                  <Link
                    to={"/merchandise/trophy"}
                    className="border border-slate-400 rounded-lg h-[70px] flex justify-start items-center px-4 gap-4"
                  >
                    <img src={IMG} alt="" className="h-[50px] w-[50px]" />
                    <p className="text-center font-poppins tracking-wider">
                      Trophy
                    </p>
                  </Link>
                  <Link
                    to={"/merchandise/t-shirt"}
                    className="border border-slate-400 rounded-lg h-[70px] flex justify-start items-center px-4 gap-4"
                  >
                    <img src={IMG} alt="" className="h-[50px] w-[50px]" />
                    <p className="text-center font-poppins tracking-wider">
                      T-shirt
                    </p>
                  </Link>
                  <Link
                    to={"/merchandise/packaging"}
                    className="border border-slate-400 rounded-lg h-[70px] flex justify-start items-center px-4 gap-4"
                  >
                    <img src={IMG} alt="" className="h-[50px] w-[50px]" />
                    <p className="text-center font-poppins tracking-wider">
                      Packaging
                    </p>
                  </Link>
                </div>
                <div className="flex justify-between mt-16 lg:mt-0">
                  <button
                    className="bg-slate-200 text-slate-400 text-sm font-semibold flex justify-between items-center gap-1 px-3 py-2 mt-1 rounded-md hover:text-white hover:bg-orange duration-300"
                    onClick={clickToPageDua}
                  >
                    <HiChevronDoubleLeft size={15} />
                    Prev
                  </button>
                  <button
                    className="bg-slate-200 text-slate-400 text-sm font-semibold flex justify-between items-center gap-1 px-3 py-2 mt-1 rounded-md hover:text-white hover:bg-orange duration-300"
                    onClick={clickToPageEmpat}
                  >
                    Next
                    <HiChevronDoubleRight size={15} />
                  </button>
                </div>
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

export default Merchandise;
