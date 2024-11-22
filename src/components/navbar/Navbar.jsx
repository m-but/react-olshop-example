import React from "react";
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.length;

  return (
    <nav className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <span className="navbar-language">EN</span>
          <div className="navbar-searchContainer">
            <input type="text" className="navbar-input" />
            <IoSearch className="icon" />
          </div>
        </div>

        <div className="navbar-center">
          <h1 className="navbar-logo">
            React Shop <span>.</span>
          </h1>
        </div>

        <div className="navbar-right">
          <Link to={"/register"} className="navbar-menuItem">
            Register
          </Link>
          <Link to={"/login"} className="navbar-menuItem">
            Login
          </Link>
          <div className="navbar-menuItem">
            <MdOutlineShoppingCart className="icon" />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
