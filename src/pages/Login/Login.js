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
import useAuth from "../../hooks/useAuth";
import loginimage from "../../images/login.svg";
import "./Login.css";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser, isLoading, user, error, singInWithGoogle } = useAuth();
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
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  const handleGoogleSingIn = () => {
    singInWithGoogle(location, navigate);
  };
  return (
    <Container>
      <Row className="gx-2">
        <Col sm={12} md={6} lg={6}>
          <img src={loginimage} alt="" style={{ width: " 90%" }} />
        </Col>
        <Col sm={12} md={6} lg={6}>
          <div className="form_container">
            {!isLoading && (
              <Form onSubmit={handleLoginSubmit}>
                <h1>Please Log In</h1>
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
                <Button className="w-100" variant="primary" type="submit">
                  Login
                </Button>
                <p className="w-100 my-2"></p>

                <Link to="/registerheader">
                  <Button className="w-100 mt-2" variant="light">
                    New User ? Please Registation
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
            {user?.email && (
              <Alert class="alert alert-primary mx-3" role="alert">
                User login Successfully
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
  );
};

export default Login;
