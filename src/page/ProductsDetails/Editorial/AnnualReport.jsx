import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../../../components/Footer";
import ContactIcon from "../../../components/ContactIcon";
import AsideDetailProduct from "../../../components/AsideDetailProduct";
import { SlideshowLightbox } from "lightbox.js-react";
import { IoMdCloseCircle } from "react-icons/io";
import { annualReportImg } from "../../../data/annualReportImg";
import NavbarProduct from "../../../components/NavbarProduct";

const AnnualReport = () => {
  let navigate = useNavigate();
  const back = () => {
    navigate("/editorial");
  };

  return (
    <>
      <div>
        <NavbarProduct />
        <Helmet>
          <title>Editorial - Annual Report</title>
          <meta
            name="description"
            content="Editorial berisi tentang bla bla bla"
          />
        </Helmet>
        <section className="flex">
          <AsideDetailProduct />
          <div className="w-[100%] mt-2">
            <main className="px-4">
              <h1 className="my-4 text-xl font-bold hidden lg:block">
                Annual Report
              </h1>
              <div className="lg:hidden flex justify-between text-lg font-bold my-8 mt-16">
                <p>Annual Report</p>
                <button onClick={back}>
                  <IoMdCloseCircle size={20} />
                </button>
              </div>
              <SlideshowLightbox
                theme="lightbox"
                className="lg:grid lg:grid-cols-4 gap-1 grid grid-cols-2"
              >
                {annualReportImg.map((item, index) => (
                  <img
                    key={index}
                    className="lg:mt-0 mt-4"
                    src={item.image}
                    alt=""
                  />
                ))}
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

export default AnnualReport;
