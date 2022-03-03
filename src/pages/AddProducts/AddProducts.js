import axios from "axios";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddPruducts.css";

const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/products", data).then((res) => {
      if (res.data.insertedId) {
        alert("Successfully this product added");
        reset();
      }
      console.log(res);
    });
  };
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}></Col>
          <Col sm={12} md={6} lg={6}>
            <div className="addform">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="Enter your product Name"
                  className="w-75 m-2"
                  type="text"
                  {...register("name", { required: true, maxLength: 20 })}
                />
                <textarea
                  className="w-75 m-2 p-4"
                  placeholder="Enter your  product description"
                  {...register("description")}
                />
                <input
                  className="w-75 m-2"
                  placeholder="Enter your  product price"
                  type="number"
                  {...register("price")}
                />
                <input
                  className="w-75 m-2"
                  placeholder="Enter your product image url"
                  type="text"
                  {...register("image")}
                />
                <input className="w-75 m-2" type="submit" />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddProducts;
