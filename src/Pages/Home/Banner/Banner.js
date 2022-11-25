import React from "react";
import "./Banner.css";
import Lottie from "lottie-react";
import bannerMobile from "./../../../assets/banner-mobile.json";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto">
        <div className="flex items-center">
          <h1 className="text-7xl font-bold text-gray-200">
            Now it's time to fulfill everyone's dreams
          </h1>
        </div>
        <div>
          <Lottie animationData={bannerMobile} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
