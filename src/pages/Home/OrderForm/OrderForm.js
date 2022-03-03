import axios from "axios";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import deliveryimg from "../../../images/deliveryimg.svg";
import "./OrderForm.css";

const OrderForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    axios.post("http://localhost:5000/orders", data).then((res) => {
      if (res.data.insertedId) {
        alert("Your Order Details Successfully Added");
      }
      reset();
    });
  };
  return (
    <div className="orderForm">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}>
            {" "}
            <img src={deliveryimg} alt="" />{" "}
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="mx-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="Enter your name"
                  className="w-75 m-2  p-2"
                  {...register("name", { required: true, maxLength: 20 })}
                />{" "}
                <br />
                <input
                  className="w-75 m-2 p-2"
                  defaultValue={user.email}
                  placeholder=""
                  {...register("email")}
                />{" "}
                <br />
                <input
                  className="w-75 m-2 p-2"
                  placeholder="Enter your address"
                  {...register("address")}
                />{" "}
                <br />
                <input
                  className="w-75 m-2 p-2"
                  placeholder="Enter your City"
                  {...register("city")}
                />{" "}
                <br />
                <input
                  className="w-75 m-2 p-2"
                  type="number"
                  placeholder="Enter your phon number"
                  {...register("phone")}
                />{" "}
                <br />
                <input className="w-75 m-2" type="submit" />
                <p></p>
                <p></p>
                <Link to="/">
                  <Button className="w-75 m-2"> Go to Home Page</Button>
                </Link>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OrderForm;
