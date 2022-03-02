import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigetion/Navigation";
import Banner from "../Banner/Banner";
import BannerImage from "../BannerImage/BannerImage";
import FoodCetagory from "../FoodCetagory/FoodCetagory";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner />
      <BannerImage />
      <FoodCetagory />
      <Footer />
    </div>
  );
};

export default Home;
