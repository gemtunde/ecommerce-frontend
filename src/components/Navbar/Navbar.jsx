// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUser, BiCart } from "react-icons/bi";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="nav-top">
          <Link to="/">
            <h2>GemWave</h2>
          </Link>
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="search for products...."
            />
            <button className="search-btn">Search</button>
          </div>
          <div className="icons">
            <div className="profile-group">
              <BiUser className="icon" />
              <div className="dropdown-menu">
                <Link to="/login">
                  <p className="dropdown-item">Account</p>
                </Link>
                <p className="dropdown-item">Logout</p>
              </div>
            </div>
            <div className="cart-icon" onClick={() => handleNavigate("/cart")}>
              <BiCart className="icon" />
              <span className="cart-count">9</span>
            </div>
          </div>
        </div>
        <div className="nav-bottom">
          <div className="nav-container">
            <div
              onClick={() => handleNavigate("/category/men")}
              className="nav-link"
            >
              Men
            </div>
            <div
              onClick={() => handleNavigate("/category/women")}
              className="nav-link"
            >
              Women
            </div>
            <div
              onClick={() => handleNavigate("/category/kids")}
              className="nav-link"
            >
              Kids
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
