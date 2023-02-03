import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../../../components/Footer";
import AsideDetailProduct from "../../../components/AsideDetailProduct";
import { IoMdCloseCircle } from "react-icons/io";
import NavbarProduct from "../../../components/NavbarProduct";
import ContactIcon from "../../../components/ContactIcon";

const SustainabilityReport = () => {
  let navigate = useNavigate();
  const back = () => {
    navigate("/editorial");
  };

  return (
    <>
      <div>
        <NavbarProduct />
        <Helmet>
          <title>Editorial - Sustainability Report</title>
        </Helmet>
        <section className="flex">
          <AsideDetailProduct />
          <div className="w-[100%] mt-2">
            <main className="px-4 h-screen">
              <h1 className="my-4 text-xl font-bold hidden lg:block">
                Sustainability Report
              </h1>
              <div className="lg:hidden flex justify-between text-lg font-bold my-8 mt-16">
                <p>Sustainability Report</p>
                <button onClick={back}>
                  <IoMdCloseCircle size={20} />
                </button>
              </div>
              <p>
                Photo Masih kosong{" "}
                <i className="icofont-brand-nexus text-red-600 ml-2"></i>
              </p>
            </main>
            <ContactIcon />
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
};

export default SustainabilityReport;
