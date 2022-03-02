import Home from "./pages/Home/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ContactUs from "./pages/ContactUs/ContactUs/ContactUs";

import AboutUs from "./pages/AboutUs/AboutUs/AboutUs";

import SingUpContainer from "./pages/SingUp/SingUpContainer/SingUpContainer";
import SingInContainer from "./pages/SingIn/SingInContainer/SingInContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/singin" element={<SingInContainer />}></Route>
          <Route path="/singup" element={<SingUpContainer />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
