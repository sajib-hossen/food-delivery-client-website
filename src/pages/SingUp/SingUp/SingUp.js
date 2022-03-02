import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import longImage from "../../../images/pexels-mart-production-7706574-removebg-preview.png";

const SingUp = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Container fluid className="bg-secondary text-dark">
        <Row className="text-center">
          <Col sm={12} md={6} lg={6}>
            <form onSubmit={handleSubmit(onSubmit)} className="form_container">
              <h1 className="text-white"> Please Sing Up </h1>
              <input {...register("name")} placeholder="Enter your name" />
              <input {...register("email")} placeholder="Enter your Email" />
              <input
                type="password"
                {...register("password")}
                placeholder="Enter your Password"
              />

              <input type="submit" value="Sing In" />
              <p></p>
              <Button variant="outline-secondary">
                <Link to="/singup" className="text-white">
                  Already Sing Up? Please Sing In
                </Link>
              </Button>

              <p>--------------Or -----------------</p>
              <Button variant="outline-dark"> Google Sing In </Button>
            </form>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="long_image">
              <img src={longImage} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingUp;
