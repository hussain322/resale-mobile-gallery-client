import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import CategoriesSection from "../CategoriesSection/CategoriesSection";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <CategoriesSection />
    </div>
  );
};

export default Home;
