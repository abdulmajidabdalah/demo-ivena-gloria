import React from "react";
import { useNavigate } from "react-router-dom";
import IMG from "../components/assets/error.png";
import Helmet from "react-helmet";

const PageNotFound = () => {
  let navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };
  return (
    <section className="bg-slate-200 h-screen">
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <main className="flex justify-center items-center">
        <img src={IMG} alt="" className="h-[500px]" />
      </main>
      <p className="text-center font-semibold">Oopss.. page not found</p>
      <p className="text-center text-lg font-semibold">
        back to{" "}
        <span
          className="text-[#F4AD24] hover:cursor-pointer"
          onClick={backToHome}
        >
          ivena gloria ardana
        </span>
      </p>
    </section>
  );
};

export default PageNotFound;
