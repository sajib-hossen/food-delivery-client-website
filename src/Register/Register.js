import React, { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import loginimage from "../images/register.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { newRegister, isLoading, user, error, singInWithGoogle } = useAuth();
  let location = useLocation();
  let navigate = useNavigate();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your Password did not match");
      return;
    }
    newRegister(loginData.email, loginData.password, loginData.name, navigate);
    e.preventDefault();
  };
  const handleGoogleSingIn = () => {
    singInWithGoogle(location, navigate);
  };
  return (
    <div>
      <Container>
        <Row className="gx-2">
          <Col sm={12} md={6} lg={6}>
            <img src={loginimage} alt="" style={{ width: " 90%" }} />
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="form_container">
              {!isLoading && (
                <Form onSubmit={handleLoginSubmit}>
                  <h1>Please Register</h1>
                  <Form.Control
                    type="text"
                    className="my-3 input_field"
                    placeholder="Your Name"
                    name="name"
                    onBlur={handleOnBlur}
                  />
                  <Form.Control
                    type="email"
                    className="my-3 input_field"
                    placeholder="Enter email"
                    name="email"
                    onBlur={handleOnBlur}
                  />
                  <Form.Control
                    type="password"
                    className="my-4"
                    placeholder="Password"
                    name="password"
                    onBlur={handleOnBlur}
                  />
                  <Form.Control
                    type="password"
                    className="my-4"
                    placeholder="Re-type Password"
                    name="password2"
                    onBlur={handleOnBlur}
                  />
                  <Button className="w-100" variant="primary" type="submit">
                    Register
                  </Button>

                  <p className="w-100 my-2"></p>

                  <Link to="/loginheader">
                    <Button className="w-100 mt-2" variant="light">
                      Already Registation? Please Login
                    </Button>
                  </Link>
                  <Button
                    onClick={handleGoogleSingIn}
                    className="w-100 mt-2"
                    variant="primary"
                  >
                    Google Sing In
                  </Button>
                </Form>
              )}
              {isLoading && <Spinner animation="border" />}
              <br />
              {user?.email && (
                <Alert class="alert alert-primary mx-3" role="alert">
                  User created Successfully
                </Alert>
              )}
              {error && (
                <Alert class="alert alert-danger mx-3" role="alert">
                  {error}
                </Alert>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
