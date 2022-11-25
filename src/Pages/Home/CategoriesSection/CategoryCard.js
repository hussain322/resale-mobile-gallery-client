import React from "react";

const CategoryCard = ({ category }) => {
  const { category_id, category_name, img } = category;
  return (
    <div className="card w-full glass">
      <figure>
        <img src={img} alt="car!" className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{category_name}</h2>
        <p>How to park your car at your garage?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
