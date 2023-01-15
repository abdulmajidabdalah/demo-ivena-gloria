import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { imgdetails } from "../../../data/imgdetails";

const Banner = () => {
  const [sliderData, setSliderData] = useState(imgdetails[0]);

  const handleClick = (index) => {
    const slider = imgdetails[index];
    setSliderData(slider);
  };
  return (
    <div>
      <Helmet>
        <title>Printing - Banner</title>
      </Helmet>
      <div className="flex justify-center items-center h-screen">
        <div className="lg:grid lg:grid-cols-2 lg:h-[90%] lg:w-[80%] h-screen w-full rounded-xl shadow-sm shadow-slate-600 lg:p-0 p-2">
          <div className="lg:hidden flex justify-between font-bold text-xl">
            <h1>Banner</h1>
            <Link to={"/printing"}>x</Link>
          </div>
          <div className="flex justify-center items-center lg:px-4 mt-10">
            <img
              src={sliderData.value}
              alt=""
              className="lg:h-[350px] h-[200px] object-cover"
            />
          </div>
          <div>
            <Link
              to={"/printing"}
              className="text-right font-bold pr-5 float-right hidden lg:block"
            >
              x
            </Link>
            <h1 className="font-bold my-10 text-4xl hidden lg:block">Banner</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p className="font-bold text-xl my-5">Select Image Product</p>
            <div className="grid grid-cols-5 gap-2">
              {imgdetails.map((item, i) => (
                <div
                  key={i}
                  className={
                    sliderData.id === i
                      ? "lg:w-[100px] lg:h-[100px] bg-slate-200 flex justify-center items-center border-2 border-transparent border-orange-400 hover:cursor-pointer rounded-md"
                      : ""
                  }
                >
                  <img
                    src={item.value}
                    alt=""
                    className="lg:w-[90px] lg:h-[90px] w-[50px] h-[50px] cursor-pointer"
                    onClick={() => handleClick(i)}
                  />
                </div>
              ))}
            </div>
            <button className="bg-slate-500 px-3 py-2 my-8 rounded-md text-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
