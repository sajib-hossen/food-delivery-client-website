import Home from "./pages/Home/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs/ContactUs/ContactUs";
import AboutUs from "./pages/AboutUs/AboutUs/AboutUs";
import LoginHeader from "./pages/Login/LoginHeader";
import RegisterHeader from "./Register/RegisterHeader";
import AuthProvider from "./Contexts/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ProductContainer from "./pages/AddProducts/ProductContainer";
import OrderProduct from "./pages/Home/OrderProduct/OrderProduct";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/contact" element={<ContactUs />}></Route>
            <Route path="/order/:orderId" element={<OrderProduct />}></Route>
            <Route path="/addproduct" element={<ProductContainer />}></Route>
            <Route path="/loginheader" element={<LoginHeader />}></Route>
            <Route path="/registerheader" element={<RegisterHeader />}></Route>
            <Route
              path="/about"
              element={
                <PrivateRoute>
                  <AboutUs />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
