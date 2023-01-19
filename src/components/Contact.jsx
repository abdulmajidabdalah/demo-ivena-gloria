import React, { useRef, useState } from "react";
import IMG2 from "./assets/home/contac.jpg";
import { FiArrowDown } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import ClipLoader from "react-spinners/ClipLoader";
import { Link as Button } from "react-scroll";

const Contact = () => {
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
    <section id="contact">
      <head className="flex justify-center items-center uppercase w-full h-[101px] bg-[#F4AD24] text-white font-poppins text-xl tracking-wider cursor-pointer">
        <Button
          to="contact"
          spy={true}
          smooth={true}
          offset={500}
          duration={500}
          className="flex justify-center hover:font-extrabold duration-200"
        >
          <p className="uppercase tracking-wider">get in touch</p>
          <FiArrowDown size={20} className="ml-2 mt-1" />
        </Button>
      </head>
      <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 bg-[#FFFFFF]">
        <main className="col-span-2 mx-4 mt-[40px] lg:mx-[68px] lg:mt-[80px] ">
          <h1 className="text-6xl lg:text-8xl text-[#F2F2F2] font-poppins font-extrabold tracking-wider">
            Contact.
          </h1>
          <h2 className="font-extrabold font-poppins uppercase text-2xl lg:text-4xl text-[#333C4E] tracking-wider mt-1 mb-5 lg:mt-[25px] lg:mb-[45px]">
            let's talk
          </h2>
          <article
            align="justify"
            className="text-[#7E8890] tracking-wider leading-loose"
          >
            Is there any problem you want to discuss? Or you just need some
            partner to enjoy a coffee talk? Let’s drop us your detail and our
            team will get back to you as soon as possible.
          </article>
          <form ref={form} onSubmit={sendEmail} autoComplete="off">
            <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 md:gap-3 lg:gap-[22px] mb-4 lg:mb-[30px]">
              <label className="block mt-4 lg:mt-[35px]">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-[#7E8890]">
                  Nama
                </span>
                <input
                  type="text"
                  name="nama"
                  className="mt-1 h-[53px] text-[#7E8890] px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none  block w-full sm:text-sm"
                  placeholder="John Doe"
                  required
                />
              </label>
              <label className="block mt-4 lg:mt-[35px]">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-[#7E8890]">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  className="mt-1 h-[53px] text-[#7E8890] px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none  block w-full sm:text-sm"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block mt-4 lg:mt-[35px]">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-[#7E8890]">
                  Phone
                </span>
                <input
                  type="number"
                  name="phone"
                  className="mt-1 h-[53px] text-[#7E8890] px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none  block w-full sm:text-sm"
                  placeholder="08225455768"
                />
              </label>
              <label className="block mt-4 lg:mt-[35px]">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-[#7E8890]">
                  Company
                </span>
                <input
                  type="text"
                  name="company"
                  className="mt-1 h-[53px] text-[#7E8890] px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none  block w-full sm:text-sm"
                  placeholder="You Company Indonesia"
                />
              </label>
              <label className="block mt-4 md:col-span-2 lg:col-span-2 lg:mt-[35px]">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-[#7E8890]">
                  Message
                </span>
                <textarea
                  type="text"
                  name="message"
                  className="mt-1 h-[138px] text-[#7E8890] px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none  block w-full sm:text-sm resize-none"
                  placeholder="Your Message"
                />
              </label>
            </div>
            <button type="submit" onClick={handleClick} className="">
              {!showLoader ? (
                <div className="w-[136px] h-[43px] flex justify-center items-center uppercase bg-[#F4AD24]  text-white font-poppins mb-[70px] tracking-wider">
                  <span className="text-xs ml-2">Let's talk</span>
                </div>
              ) : (
                <div className="w-[136px] h-[43px] flex justify-center items-center uppercase bg-[#7E8890]  text-white font-poppins mb-[70px] tracking-wider cursor-not-allowed">
                  <ClipLoader color="#FFF" size={15} />
                  <span className="text-xs ml-2">Loading...</span>
                </div>
              )}
              {/*   */}
            </button>
          </form>
        </main>
        <aside className="min-w-0 hidden md:block lg:block">
          <img src={IMG2} alt="" className="object-cover h-full" />
        </aside>
      </div>
    </section>
  );
};

export default Contact;
