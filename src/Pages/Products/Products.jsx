import React, { useState } from "react";
import ProductsNav from "../../Components/Nav/ProductsNav";
import Categories from "../../Components/utility/Categories";
import Cards from "../../Components/CardCreation/Cards";

function Products() {
  // uplifted the state in order to use it in card.jsx & categories.jsx
  // to change the ui after selecting a specifc category
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  console.log(selectedCategory);

  return (
    <div style={{ background: "black" }} className="Products-main">
      <div className="ecommerce-content products">
        <ProductsNav />
      </div>
      <div className="products-section">
        <Categories onSelectCategory={handleCategorySelect} />
        <Cards selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}

export default Products;
