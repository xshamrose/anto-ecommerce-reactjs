import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Product.css";
import antologo from "../assets/antologo.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateTotalItems } from "../CartReducer";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const addproductTocart = (product) => {
    dispatch(addToCart(product));
  };

  const cartData = useSelector((state) => state.cart.cart);
  const totalItems = cartData.reduce((total, item) => total + item.quantity, 0);
  useEffect(() => {
    dispatch(updateTotalItems(totalItems));
  }, [totalItems, dispatch]);

  useEffect(() => {
    setLoading(true);
    axios({ method: "GET", url: "https://fakestoreapi.com/products" })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Fragment>
      <div className="products">
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/Home">
              {" "}
              <img
                src={antologo}
                alt="Logo"
                style={{ height: "60px", width: "60px", marginTop: "auto" }}
              />
            </a>
            <div
              className="collapse navbar-collapse row justify-content-between"
              id="navbarTogglerDemo02"
            >
              <form className="d-flex justify-content-center" role="search">
                <input
                  className="form-control col-lg"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div>
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => navigate("/Cart")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-cart3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    <span className="cart-count">{totalItems}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </nav>

        <div className="products-container">
          {loading && (
            <div>
              <div className="spinner-border text-dark" role="status"></div>
              <div>
                {" "}
                <h5>Loading...</h5>
              </div>
            </div>
          )}
          {data
            .filter((product) => {
              return search.toLowerCase() === ""
                ? product
                : product.title.toLowerCase().includes(search) ||
                    product.category.toLowerCase().includes(search);
            })
            .map((product) => (
              <div key={product.id} className="card">
                <div>
                  <img src={product.image} alt="#" className="img" />
                </div>
                <div className="card-descrip">
                  <h6> {product.title} </h6>
                  <h6> price: Rs.{product.price} </h6>
                  <button
                    className="cart-btn"
                    onClick={() => addproductTocart(product)}
                  >
                    Add to Cart
                  </button>

                  <p>Category: {product.category}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
