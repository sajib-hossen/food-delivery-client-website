import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container className="mt-5">
          <Row>
            <Col sm={12} md={6} lg={5}>
              <div className="footer_left_section">
                <div>
                  <h1 className="mb-4">Fitmeal</h1>
                </div>
                <div className="footer_link my-4">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100018329389359">
                      Facabook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/sajibhossensa90/">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/sajib-hossen/">
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/sajibhossensa/_saved/">
                      Pinterest
                    </a>
                  </li>
                </div>
                <div className="footer_rider">
                  <h3 className="my-4">Become a Rider</h3>
                  <input
                    type="text"
                    name=""
                    placeholder="Enter E-Mail Addresse"
                    id=""
                  />
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <h2>Quick Link</h2>
              <p>Features</p>
              <p>Food Menu</p>
              <p>Offer</p>
              <p>Review</p>
              <p>Rider</p>
            </Col>
            <Col sm={12} md={6} lg={2}>
              <h3>News</h3>
              <p>Blog</p>
              <p>FAQ</p>
              <p>Lift Media</p>
              <p>Press</p>
              <p>Press Kit</p>
            </Col>
            <Col sm={12} md={6} lg={2}>
              <h3>Download App</h3>
              <div className="footer_button">
                <button>App Store</button>
                <button>Google Store</button>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col sm={12} md={6} lg={6}>
              <h6 className="footer_copy">
                &copy; 2021 Besnik.All right reserved
              </h6>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="footer_policy">
                <p>Privacy</p>
                <p>Policy</p>
                <p>Terms</p>
                <p>Services</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
