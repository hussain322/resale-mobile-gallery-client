import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../../Hooks/useTitle";

const AddProduct = () => {
  useTitle("Add Product");
  const { user } = useContext(AuthContext);
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const condition = form.condition.value;
    const category = form.category.value;
    const date = form.date.value;
    const email = user?.email;
    const description = form.description.value;
    const photoURL = form.photoURL.value;
    const originalPrice = form.originalPrice.value;
    const createdTime = new Date().toISOString();

    const productInfo = {
      categoryName: category,
      name,
      location,
      resalePrice: price,
      originalPrice,
      phoneNumber: phone,
      condition,
      purchaseDate: date,
      email,
      description,
      img: photoURL,
      createdTime,
      sellerName: user.displayName,
    };

    fetch("https://resale-market-server-roan.vercel.app/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Added a new product");
          form.reset();
        }
      });
  };
  return (
    <div className="my-10">
      <h1 className="text-3xl text-center mt-10 font-semibold">
        Add A Product
      </h1>
      <div className="bg-purple-200 w-[80%] mx-auto py-10 px-20 rounded-lg shadow-sm mt-6">
        <form onSubmit={handleAddProduct}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            {/* Location */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>

            {/* Photo url */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>

            {/* Original Price */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Original Price</span>
              </label>
              <input
                type="text"
                name="originalPrice"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>

            {/* Radio Buttons for Condition */}
            <select className="select w-full" name="condition">
              <option disabled selected>
                Select Condition
              </option>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
            {/* Category */}
            <div>
              <select className="select w-full" name="category">
                <option disabled selected>
                  Select Category
                </option>
                <option>Iphone</option>
                <option>Samsung</option>
                <option>Oppo</option>
              </select>
            </div>

            {/* Year of purchase */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Year of purchase</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            {/* email */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered w-full"
                disabled
              />
            </div>
          </div>
          {/* Description */}
          <div>
            <textarea
              name="description"
              className="textarea textarea-bordered h-32 w-full mt-4"
              placeholder="Product Description"
            ></textarea>
          </div>
          <div className="w-full mt-4">
            <button type="submit" className="btn btn-accent w-full text-white">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
