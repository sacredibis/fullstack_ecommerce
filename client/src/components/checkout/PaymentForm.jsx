import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ shippingData }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Use cardElement and shippingData to create a payment method and confirm the payment
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Card Details
        </label>
        <CardElement className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-primary-light hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={!stripe}
        >
          Pay Now
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
