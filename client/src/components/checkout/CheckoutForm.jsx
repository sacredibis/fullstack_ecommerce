import React, { useState } from 'react';
import ShippingForm from './ShippingForm';
import PaymentForm from './PaymentForm';

const CheckoutForm = () => {
  const [shippingData, setShippingData] = useState(null);

  const handleShippingSubmit = (data) => {
    setShippingData(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      {!shippingData ? (
        <ShippingForm onSubmit={handleShippingSubmit} />
      ) : (
        <PaymentForm shippingData={shippingData} />
      )}
    </div>
  );
};

export default CheckoutForm;
