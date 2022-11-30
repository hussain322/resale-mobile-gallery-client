import React from "react";
import { FcShipped } from "react-icons/fc";
import { FaHandsHelping } from "react-icons/fa";
import { SiWebmoney } from "react-icons/si";

const ExtraSection = () => {
  return (
    <div className="py-10 bg-slate-200">
      <h1 className="text-center text-4xl font-semibold">
        Millions of people use{" "}
        <span className="text-red-500">MOBILE GALLERY</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[90%] mx-auto mt-20">
        <div className="px-10 py-20 bg-white rounded-md">
          <div className="flex justify-center">
            <FcShipped className="text-8xl text-center bg-[#fbb513] p-4 rounded-xl" />
          </div>
          <h3 className="text-2xl font-semibold text-center mt-2">
            Free Shipping
          </h3>
        </div>
        <div className="px-10 py-20 bg-white rounded-md">
          <div className="flex justify-center">
            <FaHandsHelping className="text-8xl text-white text-center bg-[#0a9150] p-4 rounded-xl" />
          </div>
          <h3 className="text-2xl font-semibold text-center mt-2">
            24/7 Hour Support
          </h3>
        </div>
        <div className="px-10 py-20 bg-white rounded-md">
          <div className="flex justify-center">
            <SiWebmoney className="text-8xl text-white text-center bg-[#fc185a] p-4 rounded-xl" />
          </div>
          <h3 className="text-2xl font-semibold text-center mt-2">
            100% Money Back
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
