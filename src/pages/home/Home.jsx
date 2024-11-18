import React from "react";
import Announcement from "../../components/announcement/Announcement";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Categories from "../../components/categories/Categories";
import NewArrival from "../../components/products/NewArrival";
import BestSellers from "../../components/products/BestSellers";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <NewArrival />
      <BestSellers />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
