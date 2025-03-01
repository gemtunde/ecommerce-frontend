import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContex";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";
import RelatedProduct from "../../components/RelatedProduct/RelatedProduct";

const ProductDetails = () => {
  const { products, currency } = useContext(ShopContext);
  const { productId } = useParams();
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);
  return productData ? (
    <div>
      <div className="product-container">
        <div className="product-content">
          <div className="product-images">
            <div className="thumbnail-container">
              {productData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  alt="images"
                  key={index}
                  className="thumbnail"
                />
              ))}
            </div>
            <div className="main-image-container">
              <img src={image} alt="main image" className="main-image" />
            </div>
          </div>
          <div className="product-info">
            <h1 className="product-name">{productData?.name}</h1>
            <hr className="product-divider" />
            <p className="product-price">
              {currency}
              {productData?.price}
            </p>
            <p className="product-description">{productData?.description}</p>
            <div className="size-selector">
              <p>Select Size</p>
              <div className="size-buttons">
                {productData.sizes.map((item, index) => (
                  <button
                    className={`size-button ${
                      item === size ? "active-size" : " "
                    }`}
                    key={index}
                    onClick={() => setSize(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <hr className="product-divider" />
            <div className="product-policy">
              <p>Free Delivery</p>
              <p>Seamless and Secure Payment</p>
              <p>Several payment option available</p>
            </div>
            <Link to="/cart" className="add-to-cart">
              ADD To CART
            </Link>
          </div>
        </div>
        <div className="description-review-section">
          <div className="tabs">
            <b className="tab active">Description</b>
            <p className="tab">Reviews</p>
          </div>
          <div className="description-content">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis possimus quibusdam at, obcaecati cum ipsa, atque error
              vel nesciunt enim aliquam quis. Doloremque eveniet cum ipsam
              itaque quam illum distinctio!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis possimus quibusdam at, obcaecati cum ipsa, atque error
              vel nesciunt enim aliquam quis. Doloremque eveniet cum ipsam
              itaque quam illum distinctio!
            </p>
          </div>
        </div>
        <RelatedProduct category={productData.category} />
      </div>
    </div>
  ) : (
    <p>no data is available for this product</p>
  );
};

export default ProductDetails;
