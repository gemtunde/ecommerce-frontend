import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContex";
import { Link } from "react-router-dom";

const RelatedProduct = ({ category }) => {
  const { products } = useContext(ShopContext);
  const [relatedProduct, setRelatedProduct] = useState([]);

  const related = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  useEffect(() => {
    setRelatedProduct(related.slice(0, 4));
  }, []);
  return (
    <div>
      <div className="product-container">
        <div className="list_header">
          <h1>Related Products</h1>
          <hr className="divider" />
        </div>
        <div className="product-grid">
          {relatedProduct.length > 0 ? (
            relatedProduct.map((product) => (
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
            <h2>no related product in this category</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
