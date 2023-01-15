import React from "react";
import { MdSlideshow } from "react-icons/md";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="w-[223px] h-[54px] bg-[#F4AD24] text-white font-poppins 
        mt-12 lg:mt-[77px] ml-4 lg:ml-0"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className="flex justify-center hover:font-extrabold duration-200 uppercase">
          <p className="tracking-[0.4em]">showreel</p>
          <MdSlideshow size={25} className="ml-2" />
        </div>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[100%] lg:w-3/4 my-6 px-3 lg:mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-1 lg:p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="lg:text-3xl font-semibold">
                    Video Company Profile
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right lg:text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black h-6 w-6 lg:text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative hidden md:block lg:block lg:p-6 flex-auto">
                  <iframe
                    width="400"
                    height="350"
                    src="https://www.youtube.com/embed/mZTAOIYX2P8"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="relative md:hidden lg:hidden flex-auto p-1">
                  <iframe
                    width="355"
                    height="200"
                    src="https://www.youtube.com/embed/mZTAOIYX2P8"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
