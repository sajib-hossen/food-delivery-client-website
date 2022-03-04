import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import accordinImage from "../../../images/foodaccodin.svg";

const AccordionOrder = () => {
  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <img src={accordinImage} alt="" />
          </Col>
          <Col sm={12} md={6} lg={6} className="mt-5">
            <Accordion className="mt-5">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What is the difference between hamburger and burger?
                </Accordion.Header>
                <Accordion.Body>
                  You will find meat or vegetables in between the buns as
                  filling in terms of a burger. On the other hand, you will also
                  find a filling in hamburgers but consists of ground meat
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Why are fries called fries?</Accordion.Header>
                <Accordion.Body>
                  American soldiers stationed in Belgium were first introduced
                  to French fries during World War I. As the official language
                  of the Belgian army was French, soldiers nicknamed the
                  delicious fried potatoes “French fries." The name stuck, and
                  decades later we're still giving credit to the wrong country.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Which country is famous for pizza?
                </Accordion.Header>
                <Accordion.Body>
                  But the modern birthplace of pizza is southwestern Italy's
                  Campania region, home to the city of Naples. Founded around
                  600 B.C. as a Greek settlement, Naples in the 1700s and early
                  1800s was a thriving waterfront city. Technically an
                  independent kingdom, it was notorious for its throngs of
                  working poor, or lazzaroni.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  What are the different types of spaghetti?
                </Accordion.Header>
                <Accordion.Body>
                  Spaghetti. Characteristics: These long, round strands are the
                  most popular type of pasta in the United States. Spaghetti
                  means "little twine," and variations include spaghettini
                  (thinner), spaghettoni (thicker), bucatini (thicker and
                  straw-like, with a hollow center), capellini (very thin) and
                  angel's hair (thinnest).
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  Why is a burger not a sandwich?
                </Accordion.Header>
                <Accordion.Body>
                  Originally Answered: Why is a burger called a burger and not
                  just a sandwich? A burger is not called a sandwich because it
                  isn't sandwich. A sandwich is made by putting a filling,
                  traditionally sliced meat, but now anything goes, between 2
                  slices of cut bread.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AccordionOrder;
