import React from "react";
import IMG2 from "./assets/home/workflow.jpg";
import { FiArrowDown } from "react-icons/fi";
import { Link as Button } from "react-scroll";

const WorkFlow = () => {
  return (
    <div
      className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-3"
      id="workflow"
    >
      <div className="col-span-2 bg-[#1C212A] px-6 pb-8 text-[#6E8890] font-poppins lg:text-sm text-xs tracking-wide lg:pt-0 pt-4">
        <h1 className="text-6xl font-extrabold text-[#282F3C] mt-8">
          Work Flow
        </h1>
        <p className="font-semibold mt-2">
          bagaimana kami memproses produk <br /> dari awal hingga akhir
        </p>
        <div className="lg:grid lg:grid-cols-3 grid grid-cols-2 gap-x-3 mt-8 pt-2 gap-y-5">
          <div className="">
            <i className="icofont-law-document icofont-3x"></i>
            <div className="h-[2px] bg-orange my-2"></div>
            <p className="lg:text-4xl text-2xl text-orange">01</p>
            <p className="uppercase font-semibold font-poppins">
              Permintaan harga
            </p>
            <p className="text-[#6E8890] font-poppins text-sm tracking-wide">
              Pelanggan mengirimkan spesifikasi untuk kami memberikan penawaran
            </p>
          </div>
          <div className="">
            <i className="icofont-calculator icofont-3x"></i>
            <div className="h-[2px] bg-orange my-2"></div>
            <p className="lg:text-4xl text-2xl text-orange">02</p>
            <p className="uppercase font-semibold">
              perkiraan harga & penawaran
            </p>
            <p>
              Kami mengirimkan email tentang harga dari spesifikasi yang
              diberikan
            </p>
          </div>
          <div>
            <i className="icofont-attachment icofont-3x"></i>
            <div className="h-[2px] bg-orange my-2"></div>
            <p className="lg:text-4xl text-2xl text-orange">03</p>
            <p className="uppercase font-semibold">penerimaan pesanan</p>
            <p>
              Kami menerima pemesanan setelah spesifikasi dan harga disetujui
            </p>
          </div>
          <div>
            <i className="icofont-retweet icofont-3x"></i>
            <div className="h-[2px] bg-orange my-2"></div>
            <p className="lg:text-4xl text-2xl text-orange">04</p>
            <p className="uppercase font-semibold">pesanan baru/ulang</p>
            <ul className="list-disc">
              <li> Pesanan baru akan dilanjutkan ke pembuatan mockup</li>
              <li>Pesanan ulang akan langsung ke tahap perencanaan produk</li>
            </ul>
          </div>
          <div>
            <i className="icofont-book icofont-3x"></i>
            <div className="h-[2px] bg-orange my-2"></div>
            <p className="lg:text-4xl text-2xl text-orange">05</p>
            <p className="uppercase font-semibold">pembuaTan moCkup</p>
            <p>
              Kami menyediakan mockup sebagai contoh produk untuk pelanggan
              mendapat gambaran produk akhir
            </p>
          </div>
          <div>
            <i className="icofont-checked icofont-3x"></i>
            <div className="h-[2px] bg-orange my-2"></div>
            <p className="lg:text-4xl text-2xl text-orange">06</p>
            <p className="uppercase font-semibold">perseTuJuan moCkup</p>
            <p>
              Pelanggan membubuhkan tanda tangan sebagai bukti persetujuan
              mockup
            </p>
          </div>
          <div>
            <i className="icofont-ui-calendar icofont-3x"></i>
            <div className="h-[2px] bg-orange my-2"></div>
            <p className="lg:text-4xl text-2xl text-orange">07</p>
            <p className="uppercase font-semibold">perencanaan produk</p>
            <p>
              Kami merencanakan dan menjadwalkan produk Anda secara rapi untuk
              dikirimkan tepat waktu
            </p>
          </div>
          <div>
            <i className="icofont-file-document icofont-3x"></i>
            <div className="h-[2px] bg-orange my-2"></div>
            <p className="lg:text-4xl text-2xl text-orange">08</p>
            <p className="uppercase font-semibold">persiapan cetak</p>
            <ul className="list-disc">
              <li>Mengatur posisi artwork dan pengecekan ejaan</li>
              <li>Pembuatan CTP</li>
            </ul>
          </div>
          <div>
            <i className="icofont-print icofont-3x"></i>
            <div className="h-[2px] bg-orange my-2"></div>
            <p className="lg:text-4xl text-2xl text-orange">09</p>
            <p className="uppercase font-semibold">cetak</p>
            <p>Proses cetak</p>
          </div>
          <div>
            <i className="icofont-stamp icofont-3x"></i>
            <div className="h-[2px] bg-orange my-2"></div>
            <p className="lg:text-4xl text-2xl text-orange">10</p>
            <p className="uppercase font-semibold">pasca cetak</p>
            <p>Proses finishing</p>
          </div>
          <div>
            <i className="icofont-package icofont-3x"></i>
            <div className="h-[2px] bg-orange my-2"></div>
            <p className="lg:text-4xl text-2xl text-orange">11</p>
            <p className="uppercase font-semibold">
              pengemasan & perminTaan pengiriman
            </p>
            <p>
              Kami bisa mengemas produk ke lebih dari satu tujuan dan
              mengirimkannya ke seluruh dunia
            </p>
          </div>
          <div>
            <i className="icofont-mail icofont-3x"></i>
            <div className="h-[2px] bg-orange my-2"></div>
            <p className="lg:text-4xl text-2xl text-orange">12</p>
            <p className="uppercase font-semibold">Tagihan</p>
            <p>Setelah produk dikirimkan maka kami akan mengirimkan tagihan</p>
          </div>
        </div>
        <Button
          to="clients"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="
            flex justify-center items-center hover:cursor-pointer hover:font-extrabold duration-200 w-[136px] h-[43px] bg-[#F4AD24] text-white font-poppins text-2x mt-[60px] mb-[70px] tracking-wider"
        >
          <p>Clients</p>
          <FiArrowDown size={20} className="ml-2" />
        </Button>
      </div>
      <aside className="hidden md:block lg:flex justify-center items-center bg-slate-200">
        <img src={IMG2} alt="" className="object-cover h-full" />
      </aside>
    </div>
  );
};

export default WorkFlow;
