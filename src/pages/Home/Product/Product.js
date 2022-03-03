import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, description, image, price } = product;
  return (
    <Card style={{ width: "18rem" }} className=" my-5 mx-auto">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>`{description.slice(1, 130)} ----`</Card.Text>
        <Card.Text>learn More ----</Card.Text>
        <Card.Text> ${price}</Card.Text>
        <Link to={`/order/${_id}`}>
          <Button variant="primary">Order Now</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Product;
