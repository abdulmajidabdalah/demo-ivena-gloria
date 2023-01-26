import React, { useEffect, useState } from "react";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { Helmet } from "react-helmet";
import SidebarProduct from "../components/SidebarProduct";
import NavbarProduct from "../components/NavbarProduct";
import IMG from "../components/assets/folder-svgrepo-com.svg";
import RingLoader from "react-spinners/RingLoader";

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
            <title>Product - Editorial</title>
            <meta
              name="description"
              content="Editorial berisi tentang bla bla bla"
            />
          </Helmet>
          <section className="flex">
            <SidebarProduct />
            <div className="w-full">
              <main className="p-3 md:h-screen lg:h-auto">
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
                <h1 className="text-2xl font-semibold lg:text-3xl lg:font-bold text-slate-700 mt-3">
                  Editorial
                </h1>
                <div className="bg-orange h-[3px] w-20 my-2"></div>
                <div className="grid grid-cols-2 gap-3 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 lg:mt-16 my-10">
                  <Link
                    to={"/editorial/magazine"}
                    className="shadow-black shadow-md rounded-lg"
                  >
                    <img src={IMG} alt="" className="h-[200px] w-full" />
                    <p className="text-center font-poppins text-xl mb-3 font-bold">
                      Magazine
                    </p>
                  </Link>
                  <Link
                    to={"/editorial/company_profile"}
                    className="shadow-black shadow-md rounded-lg"
                  >
                    <img src={IMG} alt="" className="h-[200px] w-full" />
                    <p className="text-center font-poppins text-xl mb-3 font-bold">
                      Company Profile
                    </p>
                  </Link>
                  <Link
                    to={"/editorial/sustainability_report"}
                    className="shadow-black shadow-md rounded-lg"
                  >
                    <img src={IMG} alt="" className="h-[200px] w-full" />
                    <p className="text-center font-poppins text-xl mb-3 font-bold">
                      Sustainability Report
                    </p>
                  </Link>
                  <Link
                    to={"/editorial/corporate_book"}
                    className="shadow-black shadow-md rounded-lg"
                  >
                    <img src={IMG} alt="" className="h-[200px] w-full" />
                    <p className="text-center font-poppins text-xl mb-3 font-bold">
                      Corporate Book
                    </p>
                  </Link>
                  <Link
                    to={"/editorial/annual_report"}
                    className="shadow-black shadow-md rounded-lg"
                  >
                    <img src={IMG} alt="" className="h-[200px] w-full" />
                    <p className="text-center font-poppins text-xl mb-3 font-bold">
                      Annual Report
                    </p>
                  </Link>
                  <Link
                    to={"/editorial/catalog_book"}
                    className="shadow-black shadow-md rounded-lg"
                  >
                    <img src={IMG} alt="" className="h-[200px] w-full" />
                    <p className="text-center font-poppins text-xl mb-3 font-bold">
                      Catalog Book
                    </p>
                  </Link>
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
