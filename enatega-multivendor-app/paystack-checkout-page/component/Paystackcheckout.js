import React from "react";
import { PaystackButton } from "@react-paystack/bootstrap";
import axios from "axios";

const PaystackCheckout = () => {
  const publicKey = "pk_test_570cdf6c9ad0209f896e36f338ec37befaa24ea1"; // Replace with your Paystack public key
  const amountInKobo = 50000; // Replace with the desired amount in kobo (e.g., 50000 = ₦500)

  const initializePayment = (reference) => {
    axios
      .post("https://api.paystack.co/transaction/initialize", {
        reference,
        amount: amountInKobo,
        email: "example@example.com", // Replace with the customer's email address
      })
      .then((response) => {
        const { authorization_url } = response.data.data;
        window.location.replace(authorization_url);
      })
      .catch((error) => {
        console.error("Error initializing payment:", error);
      });
  };

  const onSuccess = (reference) => {
    console.log("Payment successful. Reference:", reference);
    // Handle successful payment (e.g., update order status, show success message)
  };

  const onClose = () => {
    console.log("Payment closed without success.");
    // Handle payment closure (e.g., show payment canceled message)
  };

  return (
    <div>
      <PaystackButton
        text="Pay Now"
        class="btn btn-primary"
        callback={onSuccess}
        close={onClose}
        reference={new Date().getTime().toString()} // Generate a unique reference for each transaction
        email="example@example.com" // Replace with the customer's email address
        amount={amountInKobo}
        paystackkey={publicKey}
      />
    </div>
  );
};

export default PaystackCheckout;
