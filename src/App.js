import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Editorial from "./page/Editorial";
import Printing from "./page/Printing";
import Merchandise from "./page/Merchandise";
import PhotoVideo from "./page/PhotoVideo";
import PageNotFound from "./page/PageNotFound";
import { Helmet } from "react-helmet";
import CompanyProfile from "./page/ProductsDetails/Editorial/CompanyProfile";
import Magazine from "./page/ProductsDetails/Editorial/Magazine";
import AnnualReport from "./page/ProductsDetails/Editorial/AnnualReport";
import CatalogBook from "./page/ProductsDetails/Editorial/CatalogBook";
import CorporateBook from "./page/ProductsDetails/Editorial/CorporateBook";
import SustainabilityReport from "./page/ProductsDetails/Editorial/SustainabilityReport";
import Souvenir from "./page/ProductsDetails/Merchandise/Souvenir";
import Trophy from "./page/ProductsDetails/Merchandise/Trophy";
import Tshirt from "./page/ProductsDetails/Merchandise/Tshirt";
import Packaging from "./page/ProductsDetails/Merchandise/Packaging";
import Calendar from "./page/ProductsDetails/Printing/Calendar";
import Brochure from "./page/ProductsDetails/Printing/Brochure";
import Billboard from "./page/ProductsDetails/Printing/Billboard";
import Banner from "./page/ProductsDetails/Printing/Banner";
import GreetingCard from "./page/ProductsDetails/Printing/GreetingCard";
import Sticker from "./page/ProductsDetails/Printing/Sticker";
import Stationary from "./page/ProductsDetails/Printing/Stationary";
import { initLightboxJS } from "lightbox.js-react";
import Photo from "./page/ProductsDetails/PhotoVideo/Photo";
import Video from "./page/ProductsDetails/PhotoVideo/Video";
import NavbarMobile from "./components/NavbarMobile";

const App = () => {
  useEffect(() => {
    initLightboxJS("B687FA0A3438D2C6", "Individu");
  }, []);
  return (
    <>
      <Helmet>
        <title>Home - Ivena Gloria Ardana</title>
        <meta
          name="description"
          content="Ivena Gloria ardana adalah bla bla bla"
        />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editorial" element={<Editorial />} />
        <Route path="/printing" element={<Printing />} />
        <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/photo&video" element={<PhotoVideo />} />
        <Route path="/editorial/company_profile" element={<CompanyProfile />} />
        <Route path="/editorial/magazine" element={<Magazine />} />
        <Route path="/editorial/annual_report" element={<AnnualReport />} />
        <Route path="/editorial/catalog_book" element={<CatalogBook />} />
        <Route path="/editorial/corporate_book" element={<CorporateBook />} />
        <Route
          path="/editorial/sustainability_report"
          element={<SustainabilityReport />}
        />
        <Route path="/merchandise/souvenir" element={<Souvenir />} />
        <Route path="/merchandise/trophy" element={<Trophy />} />
        <Route path="merchandise/t-shirt" element={<Tshirt />} />
        <Route path="merchandise/packaging" element={<Packaging />} />
        <Route path="/printing/calendar" element={<Calendar />} />
        <Route path="/printing/brochure" element={<Brochure />} />
        <Route path="/printing/billboard" element={<Billboard />} />
        <Route path="/printing/banner" element={<Banner />} />
        <Route path="/printing/greeting_card" element={<GreetingCard />} />
        <Route path="/printing/sticker" element={<Sticker />} />
        <Route path="/printing/stationary" element={<Stationary />} />
        <Route path="/photo&video/photo" element={<Photo />} />
        <Route path="/photo&video/video" element={<Video />} />
        <Route path="/test" element={<NavbarMobile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
