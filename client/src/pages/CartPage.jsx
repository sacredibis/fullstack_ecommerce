import React, { useState } from 'react';
import Cart from '../components/cart/Cart';

const initialCart = [
  { id: 1, name: 'Product 1', price: 99.99, image: 'https://via.placeholder.com/150', quantity: 2 },
  { id: 2, name: 'Product 2', price: 129.99, image: 'https://via.placeholder.com/150', quantity: 1 },
];

const CartPage = () => {
  const [cart, setCart] = useState(initialCart);

  const handleUpdate = (id, quantity) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <Cart cart={cart} onUpdate={handleUpdate} onRemove={handleRemove} />
    </div>
  );
};

export default CartPage;