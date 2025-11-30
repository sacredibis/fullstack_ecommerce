import React from 'react';

const CartItem = ({ item, onUpdate, onRemove }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div className="flex items-center">
        <img className="h-16 w-16 object-cover rounded" src={item.image} alt={item.name} />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => onUpdate(item.id, parseInt(e.target.value))}
          className="w-16 text-center border rounded"
        />
        <button onClick={() => onRemove(item.id)} className="ml-4 text-red-500 hover:text-red-700">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
