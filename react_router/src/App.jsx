import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Products from "./pages/Products";
import CheckOut from "./pages/CheckOut";
import ThankYou from "./pages/ThankYou";
import Error from "./pages/Error";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Auth from "./pages/auth/Auth";
import AuthIndex from "./pages/auth/Index";
import ProductDetail from "./pages/ProductDetail";
import Orders from "./pages/orders/Orders";
import OrdersCompleted from "./pages/orders/OrdersCompleted";
import AuthMiddlewares from "./middlewares/AuthMiddlewares";
import ScrollTop from "./components/ScrollTop";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <ScrollTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gioi-thieu" element={<About />} />
            <Route path="san-pham">
              <Route index element={<Products />} />
              <Route path="chi-tiet/:slug/:id" element={<ProductDetail />} />
            </Route>
            <Route path="/dat-hang" element={<CheckOut />} />
            <Route path="/cam-on" element={<ThankYou />} />
            <Route path="/auth" element={<Auth />}>
              {/* <Route index element={<AuthIndex />} /> */}
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="orders" element={<AuthMiddlewares />}>
              <Route index element={<Orders />} />
              <Route path="completed" element={<OrdersCompleted />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
