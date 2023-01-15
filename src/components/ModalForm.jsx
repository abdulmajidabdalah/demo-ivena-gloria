import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Download from "./Download";
import ClipLoader from "react-spinners/ClipLoader";
import { FaDownload } from "react-icons/fa";

const ModalForm = () => {
  const [download, setdownload] = useState(false);

  const [showLoader, setShowLoader] = useState(false);
  const handleClick = () => {
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), 2000);
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x6kvssq",
        "template_y00e6kw",
        form.current,
        "0-gblegitiFe5HGnc"
      )
      .then(
        () => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message sent!",
            showConfirmButton: false,
            timer: 1500,
          });
          setdownload(true);
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: `<h5 style='color:#F4AD24'>Ooops, something went wrong</h5>`,
            confirmButtonColor: "#F4AD24",
          });
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <button
        type="button"
        className="flex justify-center items-center hover:cursor-pointer hover:font-extrabold duration-200 h-[43px] bg-[#F4AD24] text-white font-poppins px-4 gap-2"
        data-bs-toggle="modal"
        data-bs-target="#modalForm"
      >
        Unduh PDF
        <FaDownload />
      </button>

      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="modalForm"
        tabindex="-1"
        aria-labelledby="exampleModalLgLabel"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-lg relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-[#2B333E] bg-clip-padding rounded-md outline-none text-current">
            {download ? (
              <Download />
            ) : (
              <div className="modal-body relative p-4">
                <p className="lg:text-2xl text-sm text-center font-poppins font-semibold mt-7 text-[#F4AD24]">
                  Untuk dapat mendownload file ini, silahkan mengisi form
                  dibawah ini terlebih dahulu
                </p>
                <form ref={form} onSubmit={sendEmail} className="my-7">
                  <div className="lg:grid lg:grid-cols-2 gap-2 px-4">
                    <label>
                      <span className="after:content-['*'] text-center after:ml-0.5 after:text-[#F4AD24] block text-lg font-medium text-[#F4AD24]">
                        Nama
                      </span>
                      <input
                        type="text"
                        name="nama"
                        className="mt-1 text-[#7E8890] px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none  block w-full sm:text-sm rounded-md"
                        placeholder="John Doe"
                        required
                      />
                    </label>
                    <label>
                      <span className="after:content-['*'] text-center after:ml-0.5 after:text-[#F4AD24] block text-lg font-medium text-[#F4AD24]">
                        Email
                      </span>
                      <input
                        type="email"
                        name="email"
                        className="mt-1 text-[#7E8890] px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none  block w-full sm:text-sm rounded-md"
                        placeholder="ivenagloriaardana@gmail.com"
                        required
                      />
                    </label>
                    <label>
                      <span className="after:content-['*'] text-center after:ml-0.5 after:text-[#F4AD24] block text-lg font-medium text-[#F4AD24]">
                        No. HP
                      </span>
                      <input
                        type="number"
                        name="phone"
                        className="mt-1 text-[#7E8890] px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none  block w-full sm:text-sm rounded-md"
                        placeholder="085782189711"
                        required
                      />
                    </label>
                    <label>
                      <span className="after:content-['*'] text-center after:ml-0.5 after:text-[#F4AD24] block text-lg font-medium text-[#F4AD24]">
                        Nama Perusahaan
                      </span>
                      <input
                        type="text"
                        name="company"
                        className="mt-1 text-[#7E8890] px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none  block w-full sm:text-sm rounded-md"
                        placeholder="PT. Ivena Gloria Ardana"
                        required
                      />
                    </label>
                    <label className="col-span-2">
                      <span className="after:content-['*'] text-center after:ml-0.5 after:text-[#F4AD24] block text-lg font-medium text-[#F4AD24]">
                        Keperluan
                      </span>
                      <textarea
                        type="text"
                        name="message"
                        className="mt-1 text-[#7E8890] px-3 py-2 h-40 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none  block w-full sm:text-sm rounded-md resize-none"
                        placeholder="Untuk keperluan bisnis"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex justify-center items-center mt-4">
                    <button type="submit" onClick={handleClick} className="">
                      {!showLoader ? (
                        <button className="bg-[#F4AD24] text-white px-4 py-2 rounded-md tracking-widest">
                          Kirim
                        </button>
                      ) : (
                        <div className="bg-[#F4AD24] text-white px-4 py-2 rounded-md cursor-not-allowed">
                          <ClipLoader color="#FFF" size={15} />
                          <span className="ml-2">Loading...</span>
                        </div>
                      )}
                      {/*   */}
                    </button>
                  </div>
                </form>
                <div className="bg-[#7E8890] h-[2px] w-full my-4"></div>
                <button
                  type="button"
                  className="tracking-wider text-white hover:text-[#F4AD24] float-right mb-4 mr-4"
                  data-bs-dismiss="modal"
                >
                  Close{" "}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
