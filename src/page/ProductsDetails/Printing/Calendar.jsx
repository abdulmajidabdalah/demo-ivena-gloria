import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../../../components/Footer";
import BackToTop from "../../../components/BackToTop";
import AsideDetailProduct from "../../../components/AsideDetailProduct";
import { SlideshowLightbox } from "lightbox.js-react";
import { calendar } from "../../../data/calendar";
import { IoMdCloseCircle } from "react-icons/io";
import NavbarProduct from "../../../components/NavbarProduct";

const Calendar = () => {
  let navigate = useNavigate();
  const back = () => {
    navigate("/printing");
  };

  return (
    <>
      <div>
        <NavbarProduct />
        <Helmet>
          <title>Printing - Calendar</title>
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
                Calendar
              </h1>
              <div className="lg:hidden flex justify-between text-lg font-bold my-8 mt-16">
                <p>Calendar</p>
                <button onClick={back}>
                  <IoMdCloseCircle size={20} />
                </button>
              </div>
              <SlideshowLightbox
                theme="lightbox"
                className="lg:grid lg:grid-cols-4 gap-1"
              >
                {calendar.map((item, index) => (
                  <img
                    key={index}
                    className="lg:mt-0 mt-4"
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

export default Calendar;
