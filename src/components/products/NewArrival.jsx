import React from "react";
import Product from "./Product";
import { newArrivals } from "../../data";

function NewArrival() {
  return <Product items={newArrivals} heading={"New Arrival"} />;
}

export default NewArrival;
