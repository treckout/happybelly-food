import React, { useState } from "react";
import axios from "axios";

const Paystackcheckout = () => {
  const amountInKobo = 50000; // Replace with the desired amount in kobo (e.g., 50000 = ₦500)
  const [loading, setLoading] = useState(false);

  const initializePayment = () => {
    setLoading(true);
    axios
      .post("https://api.paystack.co/transaction/initialize", {
        amount: amountInKobo,
        email: "example@example.com", // Replace with the customer's email address
      })
      .then((response) => {
        const { authorization_url } = response.data.data;
        window.location.replace(authorization_url);
      })
      .catch((error) => {
        console.error("Error initializing payment:", error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Paystack Checkout</h2>
      <button onClick={initializePayment} disabled={loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};

export default Paystackcheckout;
