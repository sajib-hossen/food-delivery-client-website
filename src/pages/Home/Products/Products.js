import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container>
      <div className="products-text">
        <p> Quality Food </p>

        <h2>Our Popular Menu</h2>
        <p>
          The food at your doorstep .Why stave when you have us . You hunger
          <br /> partner. Strainght out of the oven to your doorstep.
        </p>
      </div>
      <Row className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-3">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
