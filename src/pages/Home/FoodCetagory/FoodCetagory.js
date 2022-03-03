import React from "react";
import { Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cartimage1 from "../../../images/bief-burger.png";
import cartimage2 from "../../../images/delicious-pizza.png";
import cartimage3 from "../../../images/eggs-burger.png";
import cartimage4 from "../../../images/french-fires.png";
import cartimage5 from "../../../images/rice-bowl.png";
import cartimage6 from "../../../images/sandwich.png";
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
                <Card.Img variant="top" src={cartimage1} />
                <Card.Body>
                  <Card.Title>Bief Burger</Card.Title>
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
                  <Card.Title>Delicious Pizza</Card.Title>
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
                  <Card.Title>Eggs Bendict Burger</Card.Title>
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
                  <Card.Title>French fries</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={cartimage5} />
                <Card.Body>
                  <Card.Title>Sandwich</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={cartimage6} />
                <Card.Body>
                  <Card.Title>Rice Bowl</Card.Title>
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
                  <Card.Title>French Fries</Card.Title>
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
