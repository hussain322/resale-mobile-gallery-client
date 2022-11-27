import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const PhoneCard = ({ phone, setPhoneDetails }) => {
  const { user } = useContext(AuthContext);
  const {
    name,
    location,
    resalePrice,
    originalPrice,
    used,
    postedTime,
    sellerName,
    condition,
    img,
    description,
  } = phone;
  return (
    <div>
      <div className="card lg:card-side glass">
        <figure>
          <img src={img} alt="Movie" className="w-full rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <div>
            <h6 className="font-semibold">Seller Name: {sellerName}</h6>
            <h6 className="font-semibold">Original Price: {originalPrice}</h6>
            <h6 className="font-semibold">Resale Price: {resalePrice}</h6>
            <h6 className="font-semibold">Year of use: {used}</h6>
            <h6 className="font-semibold">Condition: {condition}</h6>
            <h6 className="font-semibold">Location: {location}</h6>
            <h6 className="font-semibold">Post: {postedTime}</h6>
            <p>
              <strong>Description</strong>: {description}
            </p>
          </div>
          <div className="mt-6">
            <label
              onClick={() => setPhoneDetails(phone)}
              htmlFor="buy-now-modal"
              className="btn btn-primary px-10"
            >
              Buy Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
