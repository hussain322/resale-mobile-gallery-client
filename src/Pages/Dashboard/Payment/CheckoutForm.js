import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ booking }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { price, email, customerName, _id } = booking;

  useEffect(() => {
    fetch(
      "https://resale-market-server-roan.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("");
    setProcessing(true);

    const {
      paymentIntent,
      error: confirmError,
    } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: customerName,
          email: email,
        },
      },
    });

    if (confirmError) {
      setCardError(confirmError);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      // Store payment info in database
      const paymentInfo = {
        customerName,
        email,
        price,
        bookingId: _id,
        paymentStatus: paymentIntent.status,
        transactionId: paymentIntent.id,
      };
      fetch("https://resale-market-server-roan.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(paymentInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          setSuccess("Congrats! Your payment succeeded");
        });
    }
    setProcessing(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success mt-4 px-10 btn-sm"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500 mt-4">{cardError}</p>
      <p className="text-green-500 mt-4">{success}</p>
    </>
  );
};

export default CheckoutForm;
