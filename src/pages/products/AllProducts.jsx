import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Product from "../../components/products/Product";
import { allProducts } from "../../data";
import Footer from "../../components/footer/Footer";

function AllProducts() {
  return (
    <div>
      <Navbar />
      <Product items={allProducts} heading={"All Products"} />
      <Footer />
    </div>
  );
}

export default AllProducts;
