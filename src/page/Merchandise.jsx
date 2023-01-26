import React, { useState, useEffect } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { Helmet } from "react-helmet";
import SidebarProduct from "../components/SidebarProduct";
import RingLoader from "react-spinners/RingLoader";
import IMG from "../components/assets/folder-svgrepo-com.svg";
import NavbarProduct from "../components/NavbarProduct";

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
            <meta
              name="description"
              content="Editorial berisi tentang bla bla bla"
            />
          </Helmet>
          <div className="flex">
            <SidebarProduct />
            <div className="w-full">
              <div className="flex justify-between mt-16 lg:mt-0">
                <button
                  className="bg-slate-200 text-slate-400 text-sm font-semibold flex justify-between items-center gap-1 px-3 py-2 mt-1 rounded-r-md hover:text-white hover:bg-orange duration-300"
                  onClick={clickToPageDua}
                >
                  <HiChevronDoubleLeft size={15} />
                  Prev
                </button>
                <button
                  className="bg-slate-200 text-slate-400 text-sm font-semibold flex justify-between items-center gap-1 px-3 py-2 mt-1 rounded-l-md hover:text-white hover:bg-orange duration-300"
                  onClick={clickToPageEmpat}
                >
                  Next
                  <HiChevronDoubleRight size={15} />
                </button>
              </div>
              <div className="p-3 md:h-screen lg:h-auto">
                <h1 className="text-2xl font-semibold lg:text-3xl lg:font-bold text-slate-700">
                  Merchandise
                </h1>
                <div className="bg-orange h-[3px] w-20 my-2"></div>
                <div className="grid grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 gap-3 lg:mt-16 my-10">
                  <Link
                    to={"/merchandise/souvenir"}
                    className="shadow-black shadow-md rounded-lg"
                  >
                    <img src={IMG} alt="" className="h-[200px] w-full" />
                    <p className="text-center font-poppins text-xl mb-3 font-bold">
                      Souvenir
                    </p>
                  </Link>
                  <Link
                    to={"/merchandise/trophy"}
                    className="shadow-black shadow-md rounded-lg"
                  >
                    <img src={IMG} alt="" className="h-[200px] w-full" />
                    <p className="text-center font-poppins text-xl mb-3 font-bold">
                      Trophy
                    </p>
                  </Link>
                  <Link
                    to={"/merchandise/t-shirt"}
                    className="shadow-black shadow-md rounded-lg"
                  >
                    <img src={IMG} alt="" className="h-[200px] w-full" />
                    <p className="text-center font-poppins text-xl mb-3 font-bold">
                      T-shirt
                    </p>
                  </Link>
                  <Link
                    to={"/merchandise/packaging"}
                    className="shadow-black shadow-md rounded-lg"
                  >
                    <img src={IMG} alt="" className="h-[200px] w-full" />
                    <p className="text-center font-poppins text-xl mb-3 font-bold">
                      Packaging
                    </p>
                  </Link>
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

export default Merchandise;
