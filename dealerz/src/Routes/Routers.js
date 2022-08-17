import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/Home/Home";
import Gallery from "../components/Gallery/Gallery";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ProductDetails from "../components/ProductDetails/ProductDetail";
import Shop from "../components/Shop/Shop";
import Cart from "../components/Cart/Cart";
// import About from '../components/About/About'; To be implemented

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/productdetails/:id" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
};

export default Routers;
