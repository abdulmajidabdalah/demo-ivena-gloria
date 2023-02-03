import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../../../components/Footer";
import AsideDetailProduct from "../../../components/AsideDetailProduct";
import Video from "../../../components/assets/products/04 PHOTO VIDEO/01 PHOTOGRAPHY/PHOTOGRAPHY.mp4";
import { IoMdCloseCircle } from "react-icons/io";
import NavbarProduct from "../../../components/NavbarProduct";
import ContactIcon from "../../../components/ContactIcon";

const Photo = () => {
  let navigate = useNavigate();
  const back = () => {
    navigate("/photo&video");
  };

  return (
    <>
      <div>
        <NavbarProduct />
        <Helmet>
          <title>Photo & Video - Photo</title>
          <meta
            name="description"
            content="Editorial berisi tentang bla bla bla"
          />
        </Helmet>
        <section className="flex">
          <AsideDetailProduct />
          <div className="w-[100%] mt-2">
            <main className="px-4 lg:h-screen">
              <h1 className="my-4 text-xl font-bold hidden lg:block">Photo</h1>
              <div className="lg:hidden flex justify-between text-lg font-bold my-8 mt-16">
                <p>Photo</p>
                <button onClick={back}>
                  <IoMdCloseCircle size={20} />
                </button>
              </div>
              <div className="lg:grid lg:grid-cols-3 gap-1">
                <video controls controlsList="nodownload">
                  <source src={Video} type="video/mp4" />
                </video>
              </div>
            </main>
            <ContactIcon />
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
};

export default Photo;
