// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUser, BiCart } from "react-icons/bi";
import { FaCentos } from "react-icons/fa";
import "./Navbar.css";
import { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContex";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState("");

  const handleNavigate = (path) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    navigate(path);
  };

  const { updateSearchTerm, getCartCount, token, setToken } =
    useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
  };
  const getToken = localStorage.getItem("token");
  //const searchedProduct = products.map((item) => item.name.includes(items));
  const handleSearch = () => {
    updateSearchTerm(items);
  };

  return (
    <div>
      {isLoading && (
        <div className="loader-container">
          <div className="loader">
            <FaCentos className="loader-icon" />
          </div>
        </div>
      )}
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
              value={items}
              onChange={(e) => setItems(e.target.value)}
            />
            <button onClick={handleSearch} className="search-btn">
              Search
            </button>
          </div>
          <div className="icons">
            <div className="profile-group">
              <BiUser className="icon" />
              <div className="dropdown-menu">
                <Link to="/login">
                  <p className="dropdown-item">Account</p>
                </Link>
                {getToken === "" ? null : (
                  <p onClick={logout} className="dropdown-item">
                    Logout
                  </p>
                )}
              </div>
            </div>
            <div className="cart-icon" onClick={() => handleNavigate("/cart")}>
              <BiCart className="icon" />
              <span className="cart-count">{getCartCount()}</span>
            </div>
          </div>
        </div>
        <div className="nav-bottom">
          <div className="nav-container">
            <div
              onClick={() => handleNavigate("/category/Men")}
              className="nav-link"
            >
              Men
            </div>
            <div
              onClick={() => handleNavigate("/category/Women")}
              className="nav-link"
            >
              Women
            </div>
            <div
              onClick={() => handleNavigate("/category/Kids")}
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
