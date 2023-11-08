import React from "react";
import Navbar from "./Navbar";
import "../components/Product.css";
import { useSelector } from "react-redux";
import "./Cart.css";
import { Fragment } from "react";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  let totalAmount = 0;
  return (
    <Fragment>
      <div>
        <Navbar />
        <h3>Shoping Cart</h3>
        <div className="flex">
          {cart.map((item) => {
            const subtotal = item.quantity * item.price;
            totalAmount += subtotal;
            return (
              <div className="cart-container">
                <div key={item.id} className="row cart">
                  <div className="col">
                    <div>
                      <img src={item.image} alt="#" className="img" />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <p>Category:{item.category}</p>
                      <h6> {item.title} </h6>
                      <label>Qty:</label>
                      <input
                        type="number"
                        className="quantitybox"
                        value={item.quantity}
                      ></input>
                      <h6> SubTotal price: &#8377;{subtotal} </h6>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}{" "}
        </div>
        <div className="total-amount">
          <p>Total Amount: Rs.{totalAmount.toFixed(2)}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Cart;
