import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/userActions";

export default function Navbar() {
  const cartreducer = useSelector((state) => state.cartReducer);
  const { cartItems } = cartreducer;
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand mx-2" href="/">
            ELECTRICA
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end mx-5"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {currentUser ? (
                <div class="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {currentUser.name}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="/profile">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/orders">
                        Orders
                      </a>
                    </li>
                    <li>
                      <button
                        className="btn btn-dark m-3"
                        type="button"
                        onClick={() => {
                          dispatch(logoutUser());
                        }}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <li className="nav-item mr-2 ml-5">
                  <a className="nav-link" href="login">
                    Login
                  </a>
                </li>
              )}

              <li className="nav-item mx-2">
                <a className="nav-link" href="/cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                  {cartItems.length}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
