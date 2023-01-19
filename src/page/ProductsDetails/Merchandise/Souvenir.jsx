import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../../../components/Footer";
import BackToTop from "../../../components/BackToTop";
import AsideDetailProduct from "../../../components/AsideDetailProduct";
import { SlideshowLightbox } from "lightbox.js-react";
import IMG1 from "../../../components/assets/products/03 MERCHANDISE/01 SOUVENIR/PEN Set.jpg";
import IMG2 from "../../../components/assets/products/03 MERCHANDISE/01 SOUVENIR/POWERBANK.jpg";
import IMG3 from "../../../components/assets/products/03 MERCHANDISE/01 SOUVENIR/SOUVENIR Batik Pigura.jpg";
import IMG4 from "../../../components/assets/products/03 MERCHANDISE/01 SOUVENIR/SOUVENIR Jam.jpg";
import IMG5 from "../../../components/assets/products/03 MERCHANDISE/01 SOUVENIR/SOUVENIR plakat kayu.jpg";
import IMG6 from "../../../components/assets/products/03 MERCHANDISE/01 SOUVENIR/SOUVENIR Plakat.jpg";
import { IoMdCloseCircle } from "react-icons/io";
import NavbarProduct from "../../../components/NavbarProduct";

const Souvenir = () => {
  let navigate = useNavigate();
  const back = () => {
    navigate("/merchandise");
  };

  return (
    <>
      <div>
        <NavbarProduct />
        <Helmet>
          <title>Merchandise - Souvenir</title>
          <meta
            name="description"
            content="Merchandise berisi tentang bla bla bla"
          />
        </Helmet>
        <section className="flex">
          <AsideDetailProduct />
          <div className="w-[100%] mt-2">
            <main className="px-4 lg:h-screen">
              <h1 className="my-4 text-xl font-bold hidden lg:block">
                Souvenir
              </h1>
              <div className="lg:hidden flex justify-between text-lg font-bold my-8 mt-16">
                <p>Souvenir</p>
                <button onClick={back}>
                  <IoMdCloseCircle size={20} />
                </button>
              </div>
              <SlideshowLightbox
                theme="lightbox"
                className="lg:grid lg:grid-cols-3 gap-1"
              >
                <img className="lg:mt-0 mt-4" src={IMG2} alt="" />
                <img className="lg:mt-0 mt-4" src={IMG1} alt="" />
                <img className="lg:mt-0 mt-4" src={IMG3} alt="" />
                <img className="lg:mt-0 mt-4" src={IMG4} alt="" />
                <img className="lg:mt-0 mt-4" src={IMG5} alt="" />
                <img className="lg:mt-0 mt-4 mb-4" src={IMG6} alt="" />
              </SlideshowLightbox>
            </main>
            <BackToTop />
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
};

export default Souvenir;
