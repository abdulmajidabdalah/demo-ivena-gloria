import React from "react";
import IMG2 from "./assets/home/about.jpeg";
import { FiArrowDown } from "react-icons/fi";
import { Link } from "react-scroll";
import ModalForm from "./ModalForm";

const About = () => {
  return (
    <section className="pt-4 md:pt-[-2.1rem] lg:pt-0" id="about">
      <div className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-3">
        <main className="col-span-2 mx-4 lg:mx-[68px] lg:mt-[68px]">
          <h1 className="text-6xl md:text-8xl lg:text-8xl text-[#F2F2F2] font-poppins font-bold">
            SEKILAS
          </h1>
          <div className="flex md:block lg:block">
            <h2 className="font-extrabold font-poppins text-lg md:text-3xl lg:text-3xl">
              PROFILE <br /> IVENA GLORIA ARDANA
            </h2>
          </div>
          <article
            align="justify"
            className="mt-[20px] md:mt-[20px] lg:mt-[20px] tracking-wider leading-loose text-[#7E8890]"
          >
            Perusahaan yang memiliki kompetensi dalam bidang Design Grafis dan
            Percetakan. Didukung Sumber Daya Manusia (SDM) yang yang
            berpengalaman di bidangnya serta dengan harga yang sangat
            kompetitif, proses cepat dan tepat waktu, kualitas yang terjamin,
            menjadikan kami dipercaya untuk menjadi mitra penerbitan dan
            percetakan bagi beberapa Departemen Pemerintahan, perusahaan BUMN,
            maupun swasta dalam skala regional maupun nasional.
          </article>
          <article
            align="justify"
            className="mt-[20px] md:mt-[20px] lg:mt-[20px] tracking-wider leading-loose text-[#7E8890]"
          >
            Dengan segala produk percetakan offset, seperti Company Profile,
            Annual Report, Wording Polis, Cover Polis, Agenda, Kalender, Brosur,
            Buku-buku, Banner, Baliho, Backdrop, Souvenir Perusahaan, maupun
            form-form kebutuhan administrasi bersifat rutin.
          </article>
          <article
            align="justify"
            className="mt-4 md:mt-[20px] lg:mt-[20px] tracking-wider leading-loose text-[#7E8890]"
          >
            Hal ini merupakan bukti nyata dari loyalitas dan kepercayaan
            mitra/pelanggan terhadap kami. Dengan pengalaman dan kemampuan yang
            kami miliki tersebut Dalam Penyusunan Annual Report yang pernah kami
            buat berhasil mendapatkan Penghargaan dalam Annual Report Award
            (ARA) yang diselenggarakan Bapepam dan Kementerian BUMN.
          </article>
          <div className="flex justify-start items-start mt-[40px] lg:mt-[60px] md:mt-[60px] mb-[70px] gap-3">
            <Link
              to="work"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="flex justify-center items-center hover:cursor-pointer hover:font-extrabold duration-200 w-[136px] h-[43px] bg-[#F4AD24] text-white font-poppins"
            >
              <p>portfolio</p>
              <FiArrowDown size={20} className="ml-2" />
            </Link>
            <ModalForm />
          </div>
        </main>
        <aside className="hidden md:flex lg:flex justify-center items-center md:mt-[-3.3rem]">
          <img src={IMG2} alt="" className="object-cover h-full" />
        </aside>
      </div>
    </section>
  );
};

export default About;
