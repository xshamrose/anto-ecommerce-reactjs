import React from "react";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@reduxjs/toolkit";
import Home from "./components/Home";
import Store from "./Store";
import Login from "./components/login&signup/Login";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import Signup from "./components/login&signup/Signup";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
