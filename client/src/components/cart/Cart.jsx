import React from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

const Cart = ({ cart, onUpdate, onRemove }) => {
  if (!cart || cart.length === 0) {
    return <p className="text-lg">Your cart is currently empty.</p>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} onUpdate={onUpdate} onRemove={onRemove} />
        ))}
      </div>
      <div>
        <CartSummary cart={cart} />
      </div>
    </div>
  );
};

export default Cart;
