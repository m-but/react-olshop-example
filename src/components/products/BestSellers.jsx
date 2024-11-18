import React from "react";
import Product from "./Product";
import { bestsellers } from "../../data";

function BestSellers() {
  return <Product items={bestsellers} heading={"Best Sellers"} />;
}

export default BestSellers;
