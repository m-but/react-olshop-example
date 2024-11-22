import React from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import "./Products.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../pages/redux/cartSlice";

function Product({ items, heading }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h1 className="heading">{heading}</h1>
      <div className="products-container">
        {items.map((item) => (
          <div className="product-container" key={item.id}>
            <img src={item.img} alt="" className="product-image" />
            <div className="product-desc">
              <h3>{item.title}</h3>
              <span>${item.price}</span>
            </div>

            <div className="product-info">
              <button className="icon" onClick={() => handleAddToCart(item)}>
                <CiShoppingCart /> Add to Cart
              </button>
              <button
                className="icon"
                onClick={() => {
                  navigate(`/product/${item.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                <CiSearch /> View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
