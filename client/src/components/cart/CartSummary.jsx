import React from 'react';

const CartSummary = ({ cart }) => {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Tax (10%)</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button className="mt-6 w-full bg-primary-light text-white font-bold py-2 px-4 rounded hover:bg-green-700">
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;
