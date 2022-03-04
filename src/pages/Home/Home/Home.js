import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigetion/Navigation";
import AccordionOrder from "../AccordionOrder/AccordionOrder";
import Banner from "../Banner/Banner";
import BannerImage from "../BannerImage/BannerImage";
import FoodCetagory from "../FoodCetagory/FoodCetagory";
import NewsLetter from "../NewsLetter/NewsLetter";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner />
      <BannerImage />
      <FoodCetagory />
      <Products />
      <AccordionOrder></AccordionOrder>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
