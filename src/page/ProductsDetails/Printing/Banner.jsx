import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../../../components/Footer";
import BackToTop from "../../../components/BackToTop";
import AsideDetailProduct from "../../../components/AsideDetailProduct";
import { IoMdCloseCircle } from "react-icons/io";
import NavbarProduct from "../../../components/NavbarProduct";
import { SlideshowLightbox } from "lightbox.js-react";
import { banner } from "../../../data/banner";

const Banner = () => {
  let navigate = useNavigate();
  const back = () => {
    navigate("/printing");
  };

  return (
    <>
      <div>
        <NavbarProduct />
        <Helmet>
          <title>Printing - Banner</title>
          <meta
            name="description"
            content="Editorial berisi tentang bla bla bla"
          />
        </Helmet>
        <section className="flex">
          <AsideDetailProduct />
          <div className="w-[100%] mt-2">
            <main className="px-4 h-screen">
              <h1 className="my-4 text-xl font-bold hidden lg:block">Banner</h1>
              <div className="lg:hidden flex justify-between text-lg font-bold my-8 mt-16">
                <p>Banner</p>
                <button onClick={back}>
                  <IoMdCloseCircle size={20} />
                </button>
              </div>
              <SlideshowLightbox
                theme="lightbox"
                className="lg:grid lg:grid-cols-4 gap-1"
              >
                {banner.map((item, index) => (
                  <img
                    key={index}
                    className="lg:mt-0 mt-4 mb-4"
                    src={item.image}
                    alt=""
                  />
                ))}
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

export default Banner;
