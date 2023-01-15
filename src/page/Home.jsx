import React from "react";
import "../components/css/sideBar.css";
import About from "../components/About";
import Work from "../components/Work";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ContactIcon from "../components/ContactIcon";
import Header from "../components/Header";
import HeaderForMobile from "../components/HeaderForMobile";
import ButtonNavigasiMobile from "../components/ButtonNavigasiMobile";
import Aside from "../components/Aside";

const Home = () => {
  return (
    <>
      <div className="flex">
        <Aside />
        <main className="w-[100%]">
          <Header />
          <HeaderForMobile />
          <About />
          <Work />
          <Services />
          <Clients />
          <Contact />
          <ContactIcon />
          <ButtonNavigasiMobile />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Home;
