import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContex";
import { Link } from "react-router-dom";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 4));
  }, [products]);
  return (
    <div>
      <div className="product-container">
        <div className="list_header">
          <h1>Best Collections</h1>
          <hr className="divider" />
        </div>
        <div className="product-grid">
          {bestSeller.length > 0 ? (
            bestSeller.map((product) => (
              <div className="product-card" key={product._id}>
                <div className="product-image">
                  <Link to={`/product/${product._id}`}>
                    <img src={product.image} alt="product" />
                  </Link>
                </div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            ))
          ) : (
            <h2>no product in this category</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
