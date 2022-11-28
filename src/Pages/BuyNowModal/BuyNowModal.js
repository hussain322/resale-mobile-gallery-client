import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const BuyNowModal = ({ phoneDetails, setPhoneDetails }) => {
  const { user } = useContext(AuthContext);
  const { name, resalePrice, _id, img } = phoneDetails;

  const handleModalSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user.displayName;
    const email = user.email;
    const productName = form.product.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const buyNow = {
      _id,
      customerName: name,
      email,
      productName,
      price,
      phoneNumber: phone,
      location,
      img,
    };

    console.log(buyNow);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(buyNow),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("You Successfully buying this phone");
        }
        setPhoneDetails(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="buy-now-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-slate-700">
          <label
            htmlFor="buy-now-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <form
            onSubmit={handleModalSubmit}
            className="grid grid-cols-1 gap-4 mt-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full bg-slate-300"
              defaultValue={user.displayName}
              readOnly
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full bg-slate-300"
              defaultValue={user.email}
              readOnly
            />
            <input
              type="text"
              name="product"
              placeholder="Phone Name"
              className="input input-bordered w-full bg-slate-300"
              defaultValue={name}
              readOnly
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full bg-slate-300"
              defaultValue={`$${resalePrice}`}
              readOnly
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="location"
              placeholder="Meeting Location"
              className="input input-bordered w-full"
            />

            <input className="btn btn-accent" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyNowModal;
