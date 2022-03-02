import React from "react";
import { Container } from "react-bootstrap";
import bannerimg from "../../../images/pexels-mart-production-7706574.png";
import "./BnnerImage.css";

const BannerImage = () => {
  return (
    <>
      <Container className="my-5">
        <div className="banner_image">
          <img src={bannerimg} alt="" />
        </div>
      </Container>
    </>
  );
};

export default BannerImage;
