import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContex";
import { Link } from "react-router-dom";

const HomeCollection = () => {
  const { products, searchTerm } = useContext(ShopContext);
  const [homeProduct, setHomeProducts] = useState([]);

  // useEffect(() => {
  //   //const bestProduct = products.filter((item) => item.bestseller);
  //   if (searchTerm !== "") {
  //     const searchedItem = products.filter((item) =>
  //       item.name.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     console.log("searched", searchedItem);
  //     setHomeProducts(searchedItem);
  //   }
  //   setHomeProducts(products.slice(0, 10));
  // }, [products, searchTerm, setHomeProducts]);
  useEffect(() => {
    if (searchTerm !== "") {
      const searchedItem = products.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log("searched", searchedItem);
      setHomeProducts(searchedItem);
    } else {
      setHomeProducts(products.slice(0, 10));
    }
  }, [products, searchTerm]);
  return (
    <div>
      <div className="product-container">
        <div className="list_header">
          <h1>our Collections</h1>
          <hr className="divider" />
        </div>
        <div className="product-grid">
          {homeProduct.length > 0 ? (
            homeProduct.map((product) => (
              <div className="product-card" key={product._id}>
                <div className="product-image">
                  <Link to={`/product/${product._id}`}>
                    <img src={product.image[0]} alt="product" />
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

export default HomeCollection;
