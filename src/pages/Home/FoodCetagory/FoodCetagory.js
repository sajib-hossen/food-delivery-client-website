import React from "react";
import { Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cartimage from "../../../images/anna-8Ak1i3KLthc-unsplash.jpg";
import cartimage2 from "../../../images/jj-ying-9Qwbfa_RM94-unsplash.jpg";
import cartimage3 from "../../../images/markus-spiske-A_6KbwLuVgk-unsplash.jpg";
import cartimage4 from "../../../images/pexels-mart-production-7706574.png";
import "./FoodCetagory.css";

const FoodCetagory = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container className="my-5">
        <div className="food_category_text">
          <p>Quality Food </p>
          <h2> Explore by Category </h2>
          <p>
            The food at your doorstep .Why starve when you have us . You hunger{" "}
            <br />
            partner. Straignt out of the oven to your dootstep
          </p>
        </div>
        <div>
          <Slider {...settings}>
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={cartimage} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={cartimage} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={cartimage} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={cartimage} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={cartimage2} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={cartimage3} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={cartimage4} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default FoodCetagory;
