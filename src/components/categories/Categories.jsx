import React from "react";
import "./Categories.css";
import { categories } from "../../data";

function Categories() {
  return (
    <div className="categories-container">
      {categories.map((item) => (
        <div className="category-container" key={item.id}>
          <img src={item.img} alt="" />
          <div className="category-info">
            <h1>{item.title}</h1>
            <button>Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;