import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import img1 from "../../../images/anna-8Ak1i3KLthc-unsplash.jpg";
import img2 from "../../../images/jj-ying-9Qwbfa_RM94-unsplash.jpg";
import img3 from "../../../images/markus-spiske-A_6KbwLuVgk-unsplash.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Container className="mb-5 ">
        <Carousel activeIndex={index} onSelect={handleSelect} className="h-25">
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "550px" }}
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "550px" }}
              src={img2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "550px" }}
              src={img3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default Banner;
