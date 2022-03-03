import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./OrderProduct.css";

const OrderProduct = () => {
  const { orderId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://evening-oasis-39423.herokuapp.com/products/${orderId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <Container fluid className="order_container">
      <div style={{ width: "400px" }} className="card mb-3 h-25">
        <img src={product.image} className="card-img-top w-100" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">$ {product.price}</p>
          <Link to="/orderform">
            <Button className="w-100">Purchase</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default OrderProduct;
