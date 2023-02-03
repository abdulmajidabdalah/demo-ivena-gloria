import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../../../components/Footer";
import AsideDetailProduct from "../../../components/AsideDetailProduct";
import { SlideshowLightbox } from "lightbox.js-react";
import IMG1 from "../../../components/assets/products/01 EDITORIAL/02 MAJALAH/1.png";
import IMG2 from "../../../components/assets/products/01 EDITORIAL/02 MAJALAH/2.png";
import { IoMdCloseCircle } from "react-icons/io";
import NavbarProduct from "../../../components/NavbarProduct";
import ContactIcon from "../../../components/ContactIcon";

const Magazine = () => {
  let navigate = useNavigate();
  const back = () => {
    navigate("/editorial");
  };

  return (
    <>
      <div>
        <NavbarProduct />
        <Helmet>
          <title>Editorial - Magazine</title>
          <meta
            name="description"
            content="Editorial berisi tentang bla bla bla"
          />
        </Helmet>
        <section className="flex">
          <AsideDetailProduct />
          <div className="w-[100%] mt-2">
            <main className="px-4 h-screen">
              <h1 className="my-4 text-xl font-bold hidden lg:block">
                Magazine
              </h1>
              <div className="lg:hidden flex justify-between text-lg font-bold my-8 mt-16">
                <p>Magazine</p>
                <button onClick={back}>
                  <IoMdCloseCircle size={20} />
                </button>
              </div>
              <SlideshowLightbox
                theme="lightbox"
                className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 grid grid-cols-3 gap-1"
              >
                <img className="lg:mt-0 mt-4" src={IMG2} alt="" />
                <img className="lg:mt-0 mt-4" src={IMG1} alt="" />
              </SlideshowLightbox>
            </main>
            <ContactIcon />
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
};

export default Magazine;
