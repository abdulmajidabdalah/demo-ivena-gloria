import React from "react";
import "../components/css/sideBar.css";
import About from "../components/About";
import Work from "../components/Work";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ContactIcon from "../components/ContactIcon";
import Header from "../components/Header";
import HeaderForMobile from "../components/HeaderForMobile";
import Aside from "../components/Aside";
import WorkFlow from "../components/WorkFlow";
import NavbarMobile from "../components/NavbarMobile";

const Home = () => {
  return (
    <>
      <div className="flex">
        <Aside />
        <main className="w-[100%]">
          <NavbarMobile />
          <Header />
          <HeaderForMobile />
          <About />
          <Work />
          <WorkFlow />
          <Clients />
          <Contact />
          <ContactIcon />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Home;
