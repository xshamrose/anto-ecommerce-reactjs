import React, { useState } from "react";
import Navbar from "./Navbar";
import speaker from "../assets/speaker.png";
import shoe from "../assets/shoe.webp";
import ref from "../assets/ref.webp";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import "./Home.css";
import Footer from "./Footer";

function Home() {
  const [data, setData] = useState([]);
  const [jew, setJew] = useState([]);
  const [ele, setEle] = useState([]);
  const navigate = useNavigate();
  const navigateProduct = () => {
    navigate("/Products");
  };
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products?limit=5",
    }).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  useEffect(() => {
    axios("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => {
        console.log(res.data);
        setJew(res.data);
      })
      .catch((error) => {
        console.error("Error fetching jewelery:", error);
      });
  }, []);
  useEffect(() => {
    axios("https://fakestoreapi.com/products/category/electronics")
      .then((res) => {
        console.log(res.data);
        setEle(res.data);
      })
      .catch((error) => {
        console.error("Error fetching jewelery:", error);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            data-bs-interval="1000"
            onClick={navigateProduct}
          >
            <img src={ref} className="d-block w-100" alt="..." />
          </div>
          <div
            className="carousel-item"
            data-bs-interval="10000"
            onClick={navigateProduct}
          >
            <img src={shoe} className="d-block w-100" alt="..." />
          </div>
          <div
            className="carousel-item"
            data-bs-interval="20000"
            onClick={navigateProduct}
          >
            <img src={speaker} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h2>
        <center>Deal Of the day</center>
      </h2>
      {data.map((product) => (
        <div key={product.id} className="card-home" onClick={navigateProduct}>
          <div>
            <img src={product.image} alt="#" className="img" />
          </div>
          <div className="card-descrip">
            <h6> price: Rs.{product.price} </h6>
            <p>Category:{product.category}</p>
          </div>
        </div>
      ))}
      <div>
        <h2>
          <center>jewelery</center>
        </h2>
        {jew.map((item) => (
          <div key={item.id} className="card-home" onClick={navigateProduct}>
            <div>
              <img src={item.image} alt="#" className="img" />
            </div>
            <div className="card-descrip">
              <h6> price: Rs.{item.price} </h6>
              <p>Category:{item.category}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2>
          <center>Electronics</center>
        </h2>
        {ele.map((elc) => (
          <div key={elc.id} className="card-home" onClick={navigateProduct}>
            <div>
              <img src={elc.image} alt="#" className="img" />
            </div>
            <div className="card-descrip">
              <h6> price: Rs.{elc.price} </h6>
              <p>Category:{elc.category}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
