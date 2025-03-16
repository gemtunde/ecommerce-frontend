import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContex";
import { toast } from "react-toastify";
import stripe from "../../assets/stripe_logo.png";
import razorpay from "../../assets/razorpay_logo.png";
// import CartTotal from "../../components/CartTotal/CartTotal";
import axios from "axios";
import "./Checkout.css";
import { backendUrl } from "../../App";

const Checkout = () => {
  const {
    cartItems,
    setCartItems,
    getCartAmount,
    products,
    delivery_fee,
    token,
  } = useContext(ShopContext);

  const [method, setMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    zipcode: "",
    country: "",
    state: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.value;
    const value = e.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };
      switch (method) {
        case "cod": {
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            {
              headers: { token },
            }
          );
          console.log("RESPNSE", response.data);
          break;
        }
        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <form className="form-container" onSubmit={onSubmitHandler}>
      {/* delivery info */}
      <div className="form-left">
        <fieldset className="payment-method">
          <h2>Payment options</h2>
          <div className="payment-options">
            <div
              className={`payment-option ${
                method === "stripe" ? "selected" : ""
              }  `}
              onClick={() => setMethod("stripe")}
            >
              <img src={stripe} alt="" className="payment-logo" />
            </div>
            <div
              className={`payment-option ${
                method === "razorpay" ? "selected" : ""
              }  `}
              onClick={() => setMethod("razorpay")}
            >
              <img src={razorpay} alt="" className="payment-logo" />
            </div>
            <div
              className={`payment-option ${
                method === "cod" ? "selected" : ""
              }  `}
              onClick={() => setMethod("cod")}
            >
              <span className="payment-text"> Cash on Delivery </span>
            </div>
          </div>
        </fieldset>

        <div className="form-title">
          <h2>Shipping Address</h2>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={onChangeHandler}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={onChangeHandler}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={onChangeHandler}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={onChangeHandler}
            required
          />
          <input
            type="text"
            name="street"
            placeholder="Street Address"
            value={formData.street}
            onChange={onChangeHandler}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={onChangeHandler}
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={onChangeHandler}
            required
          />
          <input
            type="text"
            name="zipcode"
            placeholder="Zip Code"
            value={formData.zipcode}
            onChange={onChangeHandler}
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={onChangeHandler}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Place Order
        </button>
      </div>
    </form>
  );
};

export default Checkout;
