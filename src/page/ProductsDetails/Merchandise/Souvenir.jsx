import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../../../components/Footer";
import AsideDetailProduct from "../../../components/AsideDetailProduct";
import { SlideshowLightbox } from "lightbox.js-react";
import IMG1 from "../../../components/assets/products/03 MERCHANDISE/01 SOUVENIR/souvenir.jpeg";
import IMG2 from "../../../components/assets/products/03 MERCHANDISE/01 SOUVENIR/souvenir2.jpeg";
import IMG3 from "../../../components/assets/products/03 MERCHANDISE/01 SOUVENIR/souvenir3.jpeg";
import IMG4 from "../../../components/assets/products/03 MERCHANDISE/01 SOUVENIR/souvenir4.jpeg";
import IMG5 from "../../../components/assets/products/03 MERCHANDISE/01 SOUVENIR/souvenir5.jpeg";
import IMG6 from "../../../components/assets/products/03 MERCHANDISE/01 SOUVENIR/souvenir6.jpeg";
import IMG7 from "../../../components/assets/products/03 MERCHANDISE/01 SOUVENIR/souvenir1.jpeg";
import { IoMdCloseCircle } from "react-icons/io";
import NavbarProduct from "../../../components/NavbarProduct";
import ContactIcon from "../../../components/ContactIcon";

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
          <div className="w-full mt-2">
            <main className="px-4">
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
                <img className="lg:mt-0 mt-4" src={IMG6} alt="" />
                <img className="lg:mt-0 mt-4 mb-4" src={IMG7} alt="" />
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

export default Souvenir;
