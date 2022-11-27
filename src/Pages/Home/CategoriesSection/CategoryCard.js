import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { _id, category_name, img, category_title } = category;
  return (
    <div>
      <Link to={`/category/${_id}`}>
        <div className="card w-full glass">
          <figure>
            <img src={img} alt="car!" className="w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">{category_name}</h2>
            <p className="text-slate-300">{category_title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
