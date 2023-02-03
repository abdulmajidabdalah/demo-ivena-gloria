import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../../../components/Footer";
import AsideDetailProduct from "../../../components/AsideDetailProduct";
import NavbarProduct from "../../../components/NavbarProduct";
import { SlideshowLightbox } from "lightbox.js-react";
import IMG1 from "../../../components/assets/products/01 EDITORIAL/04 BUKU PERUSAHAAN/a5-taspen_life.png";
import IMG2 from "../../../components/assets/products/01 EDITORIAL/04 BUKU PERUSAHAAN/Panduan kominfo.png";
import IMG3 from "../../../components/assets/products/01 EDITORIAL/04 BUKU PERUSAHAAN/PNPM book.png";
import { IoMdCloseCircle } from "react-icons/io";
import ContactIcon from "../../../components/ContactIcon";

const Trophy = () => {
  let navigate = useNavigate();
  const back = () => {
    navigate("/merchandise");
  };

  return (
    <>
      <div>
        <NavbarProduct />
        <Helmet>
          <title>Merchandise - Trophy</title>
          <meta
            name="description"
            content="Editorial berisi tentang bla bla bla"
          />
        </Helmet>
        <section className="flex">
          <AsideDetailProduct />
          <div className="w-[100%] mt-2">
            <main className="px-4 ;g:h-screen">
              <h1 className="my-4 text-xl font-bold hidden lg:block">Trophy</h1>
              <div className="lg:hidden flex justify-between text-lg font-bold my-8 mt-16">
                <p>Trophy</p>
                <button onClick={back}>
                  <IoMdCloseCircle size={20} />
                </button>
              </div>
              <SlideshowLightbox
                theme="lightbox"
                className="lg:grid lg:grid-cols-4 gap-1"
              >
                <img
                  className="lg:mt-0 mt-4 rounded-lg w-full h-40 bg-detail-product"
                  src={IMG2}
                  alt=""
                />
                <img
                  className="lg:mt-0 mt-4 rounded-lg w-full h-40 bg-detail-product"
                  src={IMG1}
                  alt=""
                />
                <img
                  className="lg:mt-0 mt-4 rounded-lg w-full h-40 bg-detail-product"
                  src={IMG3}
                  alt=""
                />
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

export default Trophy;
