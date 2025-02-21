//import React from "react";
import { FaShippingFast } from "react-icons/fa";
import hero_img from "../../assets/woman1.png";
import { BiSupport } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { MdPayment } from "react-icons/md";
import "./Hero.css";
const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero_top">
          <div className="hero_left">
            <h2>Unleash Your Unique Style</h2>
            <h1>With Collections that let Your Style and Fashion Speaks</h1>
            <p>
              Shop the latest trend and classic essentials from our collections
            </p>
          </div>
          <div className="hero_right">
            <img src={hero_img} alt="woman" />
          </div>
        </div>
        <div className="hero_bottom">
          <div className="hero_content">
            <div className="info_icon">
              <FaShippingFast className="hero_icon" />
            </div>
            <div className="detail">
              <h3>Free Shipping</h3>
              <p>Free Shipping on order</p>
            </div>
          </div>
          <div className="hero_content">
            <div className="info_icon">
              <FiSend className="hero_icon" />
            </div>
            <div className="detail">
              <h3>Worldwide Delivery</h3>
              <p>We deliver to all countries</p>
            </div>
          </div>
          <div className="hero_content">
            <div className="info_icon">
              <BiSupport className="hero_icon" />
            </div>
            <div className="detail">
              <h3>247 Support</h3>
              <p>Full support n process</p>
            </div>
          </div>
          <div className="hero_content">
            <div className="info_icon">
              <MdPayment className="hero_icon" />
            </div>
            <div className="detail">
              <h3>Secure Payment</h3>
              <p>Your Payment is secure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
