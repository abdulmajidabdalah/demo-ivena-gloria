import React, { useState } from "react";
import { data } from "../data/data.js";

const Product = () => {
  const [products, setProducts] = useState(data);

  // ! Filter Products

  const filterProducts = (category) => {
    setProducts(
      data.filter((product) => {
        return product.category === category;
      })
    );
  };

  return (
    <div className="h-[100%] bg-bg-product bg-cover" id="product">
      <h1 className="font-poppins font-bold text-3xl text-center pt-8 text-white">
        Our Products
      </h1>
      <div className="flex justify-center">
        <div className="w-[50%] bg-gray-100 h-[0.2rem] lg:h-[0.3rem] border text-center mt-1 mb-3"></div>
      </div>
      <p className="ml-4 font-poppins font-bold text-white">Filter Produk</p>
      <div className="h-[3px] bg-white w-[3rem] ml-4"></div>
      <div className="flex justify-start gap-[2px] lg:gap-1 flex-wrap">
        <button
          onClick={() => setProducts(data)}
          className="font-poppins text-white py-2 px-3 border border-white rounded-xl mt-3 mb-0 lg:mb-5 ml-4 hover:bg-white hover:text-blue-500 duration-150 active:bg-white active:text-blue-500 focus:bg-white focus:text-blue-500 focus:outline-blue-800 focus:outline-dotted"
        >
          Semua
        </button>
        <button
          className="font-poppins text-white py-2 px-3 border border-white rounded-xl mt-3 mb-0 lg:mb-5 ml-2 lg:ml-4 hover:bg-white hover:text-blue-500 duration-150 active:text-blue-500 focus:bg-white focus:text-blue-500 focus:outline-blue-800 focus:outline-dotted"
          onClick={() => filterProducts("editorial")}
        >
          Editorial
        </button>
        <button
          onClick={() => filterProducts("media&promosi")}
          className="font-poppins text-white py-2 px-3 border border-white rounded-xl mt-3 mb-0 lg:mb-5 ml-2 lg:ml-4 hover:bg-white hover:text-blue-500 duration-150 active:text-blue-500 focus:bg-white focus:text-blue-500 focus:outline-blue-800 focus:outline-dotted"
        >
          Media Promosi
        </button>
        <button
          onClick={() => filterProducts("souvenir&pakaian")}
          className="font-poppins text-white py-2 px-3 border border-white rounded-xl mt-3 mb-0 lg:mb-5 ml-4 hover:bg-white hover:text-blue-500 duration-150 active:text-blue-500 focus:bg-white focus:text-blue-500 focus:outline-blue-800 focus:outline-dotted"
        >
          Souvenir & Pakaian
        </button>
        <button
          onClick={() => filterProducts("kalender")}
          className="font-poppins text-white py-2 px-3 border border-white rounded-xl mt-3 mb-0 lg:mb-5 ml-2 lg:ml-4 hover:bg-white hover:text-blue-500 duration-150 active:text-blue-500 focus:bg-white focus:text-blue-500 focus:outline-blue-800 focus:outline-dotted"
        >
          Kalender
        </button>
      </div>
      {/* display produk */}
      <div className="grid grid-cols-2 lg:grid lg:grid-cols-5 my-4 ml-2">
        {products.map((product, index) => (
          <div
            className="shadow-lg rounded-lg mx-2 my-2  hover:scale-125 duration-400"
            key={index}
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-t-lg object-cover h-[200px] w-full "
            />
            <div className="bg-[#0078AA] z-0 py-2 px-2">
              <p className="font-poppins text-white">amplop surat</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
