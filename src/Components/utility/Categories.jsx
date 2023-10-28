import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Categories.css";

function Categories({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await Axios.get("https://dummyjson.com/products/categories");
      setCategories(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="Categories">
      {categories.map((category) => (
        <button
          className="categories-button"
          key={category}
          onClick={() => onSelectCategory(category)}
        >
          <ul className="categories-ul">
            <li className="categories-li">{category}</li>
          </ul>
        </button>
      ))}
    </div>
  );
}

export default Categories;
