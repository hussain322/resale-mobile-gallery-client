import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
  const booking = useLoaderData();
  console.log(booking);
  const { productName, price, customerName } = booking;
  return (
    <div>
      <h1 className="text-2xl font-semibold pt-8 pb-4">Payment</h1>
      <hr className="bg-black h-[2px]" />
      <div className="py-6">
        <h3 className="text-2xl font-semibold py-2">
          Product Name: {productName}
        </h3>
        <h3 className="text-xl">Customer Name: {customerName}</h3>
        <h3>
          Please pay <strong>{price}</strong> for buy this product
        </h3>
      </div>
      <div className="w-96 my-6">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
