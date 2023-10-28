import React, { useEffect, useState } from "react";
import "./Cards.css";
import Axios from "axios";

function Cards({ selectedCategory }) {
  const [products, setProducts] = useState([]);

  console.log(selectedCategory);

  const fetchProducts = async () => {
    let apiUrl = "https://dummyjson.com/products";
    if (selectedCategory) {
      apiUrl += `/category/${selectedCategory}`;
    }

    try {
      const res = await Axios.get(apiUrl);
      setProducts(res.data.products);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  return (
    <>
      <div className="Card-section">
        {products.map((product) => (
          <div key={product.id} className="Card box">
            <div className="images">
              <img
                className="image"
                src={product.thumbnail}
                alt={product.description}
              />
              {/* <span>{product.title}</span> */}
            </div>
            <div className="Card desc">
              <p className="Card-text description">{product.description}</p>
              <span>
                <span className="rating">RATING : </span>
                {product.rating} ⭐⭐⭐
              </span>
              <p className="brand">
                <span className="rating">BRAND : </span>
                {product.brand}
              </p>
              <div className="pricing">
                <p className="rate">${product.price}</p>
                <span className="discount">
                  Discounted - {product.discountPercentage}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
