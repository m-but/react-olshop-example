import React, { useState } from "react";
import "./SingleProduct.css";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import { allProducts } from "../../data";
import Footer from "../../components/footer/Footer";

function SingleProduct() {
  const { id } = useParams();
  const product = allProducts.find((product) => product.id === parseInt(id));

  const colors = ["red", "purple", "teal", "green", "black"];
  const [selectedColor, setSelectedColor] = useState(null);
  const handelCircelClick = (color) => {
    setSelectedColor(color);
  };

  const sizes = ["S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState(null);
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="singleProduct-container">
      <Navbar />
      <div className="singleProduct-wrapper">
        <div className="singleProduct-imageSection">
          <img src={product.img} alt="" className="singleProduct-image" />
        </div>
        <div className="singleProduct-infoSection">
          <h2 className="singleProduct-title">{product.title}</h2>
          <p className="singleProduct-number">{product.price}</p>
          <h4 className="singleProduct-title">Description</h4>
          <p className="singleProduct-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, earum
            veniam amet, debitis, placeat sit ea laborum maxime dicta assumenda
            sequi. Dolore minima facilis quasi provident? Possimus facere
            facilis ducimus consectetur placeat ullam, suscipit quas amet a
            fugit ratione dicta.
          </p>
          <div className="singleProduct-options">
            <div className="colors-section">
              <h4>Colors</h4>
              <div className="colors">
                {colors.map((color) => (
                  <div
                    key={color}
                    className="color-circle"
                    style={{
                      backgroundColor: color,
                      outline:
                        selectedColor === color ? `3px solid ${color}` : "",
                    }}
                    onClick={() => handelCircelClick(color)}
                  ></div>
                ))}
              </div>
            </div>
            <div className="sizes-section">
              <h4>Sizes</h4>
              <div className="sizes">
                {sizes.map((size) => (
                  <span
                    key={size}
                    style={{
                      border: selectedSize === size ? `1px solid #ccc` : "",
                    }}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="addToCart">
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleProduct;
