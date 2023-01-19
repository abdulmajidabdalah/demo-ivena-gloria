import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../../../components/Footer";
import BackToTop from "../../../components/BackToTop";
import AsideDetailProduct from "../../../components/AsideDetailProduct";
import { SlideshowLightbox } from "lightbox.js-react";
import IMG1 from "../../../components/assets/products/01 EDITORIAL/01 COMPANY PROFILE/1.png";
import IMG2 from "../../../components/assets/products/01 EDITORIAL/01 COMPANY PROFILE/2.png";
import { IoMdCloseCircle } from "react-icons/io";
import NavbarProduct from "../../../components/NavbarProduct";

const CompanyProfile = () => {
  let navigate = useNavigate();
  const back = () => {
    navigate("/editorial");
  };

  return (
    <>
      <div>
        <NavbarProduct />
        <Helmet>
          <title>Editorial - CompanyProfile</title>
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
                CompanyProfile
              </h1>
              <div className="lg:hidden flex justify-between text-lg font-bold my-8 mt-16">
                <p>CompanyProfile</p>
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

export default CompanyProfile;
