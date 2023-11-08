import React from "react";
import antologo from "../assets/antologo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const navigateProducts = () => {
    navigate("/Products");
  };
  const navigateCart = () => {
    navigate("/Cart");
  };
  const navigateOut = () => {
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/Home">
            {" "}
            <img
              src={antologo}
              alt="Logo"
              style={{ height: "60px", width: "60px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse row justify-content-between"
            id="navbarTogglerDemo02"
          >
            <form className="d-flex  justify-content-center" role="search">
              <input
                className="form-control col-lg "
                type="search"
                placeholder="Search"
                aria-label="Search"
                disabled
              />
              <button
                type="button"
                className="btn btn-dark"
                onClick={navigateOut}
              >
                Log out
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={navigateProducts}
              >
                Products
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={navigateCart}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
