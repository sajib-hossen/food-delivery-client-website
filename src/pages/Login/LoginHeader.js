import React from "react";
import Navigation from "../Shared/Navigetion/Navigation";
import Login from "./Login";

const LoginHeader = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Login></Login>
    </div>
  );
};

export default LoginHeader;
