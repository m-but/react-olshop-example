import React, { useState } from "react";
import "./Slider.css";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

import { sliderItems } from "../../data";
import { Link } from "react-router-dom";

function Slider() {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
    } else {
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
  };
  return (
    <div className="slider-container">
      <div
        className="arrow"
        direction="left"
        onClick={() => handleClick("left")}
      >
        <IoMdArrowDropleft className="icon" />
      </div>

      <div
        className="slider-wrapper"
        style={{ transform: `translatex(${sliderIndex * -100}vw)` }}
      >
        {sliderItems.map((item) => (
          <div
            className="slide"
            key={item.id}
            style={{ backgroundColor: `#${item.bg}` }}
          >
            <div className="img-container">
              <img src={item.img} className="img" alt="" />
            </div>
            <div className="info-container">
              <h1 className="title">{item.title}</h1>
              <p className="desc">{item.desc}</p>
              <Link to={"/products"}>
                <button className="button">Buy Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div
        className="arrow"
        direction="right"
        onClick={() => handleClick("right")}
      >
        <IoMdArrowDropright className="icon" />
      </div>
    </div>
  );
}

export default Slider;
