import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShopContex";
import women_wear from "../../assets/women-banner.png";
import kid_wear from "../../assets/kid-banner.png";
import men_wear from "../../assets/men-wear.png";

const Collections = () => {
  const params = useParams();
  console.log("Params", params);
  const { products, searchTerm } = useContext(ShopContext);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const categoryProduct = products.filter(
      (item) =>
        item.category === params.category &&
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCategory(categoryProduct);
  }, [products, params.category, searchTerm]);

  const bannerImages = {
    Men: men_wear,
    Women: women_wear,
    Kids: kid_wear,
  };
  return (
    <div>
      {/* banner */}
      <div className="banner">
        {bannerImages[params.category] ? (
          <img src={bannerImages[params.category]} />
        ) : (
          <p>no banner image </p>
        )}
      </div>
      <div className="product-container">
        <div className="list_header">
          <h1> {params.category} Collections</h1>
          <hr className="divider" />
        </div>
        <div className="product-grid">
          {category.length > 0 ? (
            category.map((product) => (
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

export default Collections;
