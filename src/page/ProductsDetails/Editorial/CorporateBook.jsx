import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../../../components/Footer";
import BackToTop from "../../../components/BackToTop";
import ButtonNavigationProduct from "../../../components/ButtonNavigationProduct";
import AsideDetailProduct from "../../../components/AsideDetailProduct";
import { SlideshowLightbox } from "lightbox.js-react";
import IMG1 from "../../../components/assets/products/01 EDITORIAL/04 BUKU PERUSAHAAN/a5-taspen_life.png";
import IMG2 from "../../../components/assets/products/01 EDITORIAL/04 BUKU PERUSAHAAN/Panduan kominfo.png";
import IMG3 from "../../../components/assets/products/01 EDITORIAL/04 BUKU PERUSAHAAN/PNPM book.png";
import { IoMdCloseCircle } from "react-icons/io";

const CorporateBook = () => {
  let navigate = useNavigate();
  const back = () => {
    navigate("/editorial");
  };

  return (
    <>
      <div>
        <Helmet>
          <title>Editorial - CorporateBook</title>
          <meta
            name="description"
            content="Editorial berisi tentang bla bla bla"
          />
        </Helmet>
        <section className="flex">
          <AsideDetailProduct />
          <div className="w-[100%] mt-2">
            <main className="px-4 lg:h-screen">
              <h1 className="my-4 text-xl font-bold hidden lg:block">
                CorporateBook
              </h1>
              <div className="lg:hidden flex justify-between text-lg font-bold my-8">
                <p>CorporateBook</p>
                <button onClick={back}>
                  <IoMdCloseCircle size={20} />
                </button>
              </div>
              <SlideshowLightbox
                theme="lightbox"
                className="lg:grid lg:grid-cols-4 gap-1"
              >
                <img className="lg:mt-0 mt-4" src={IMG2} alt="" />
                <img className="lg:mt-0 mt-4" src={IMG1} alt="" />
                <img className="lg:mt-0 mt-4" src={IMG3} alt="" />
              </SlideshowLightbox>
            </main>
            <BackToTop />
            <ButtonNavigationProduct />
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
};

export default CorporateBook;
