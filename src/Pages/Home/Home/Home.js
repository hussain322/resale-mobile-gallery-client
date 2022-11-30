import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import CategoriesSection from "../CategoriesSection/CategoriesSection";
import ExtraSection from "../ExtraSection/ExtraSection";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <CategoriesSection />
      <ExtraSection />
    </div>
  );
};

export default Home;
