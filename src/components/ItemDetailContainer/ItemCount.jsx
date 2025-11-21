// src/components/ItemDetailContainer/ItemCount.jsx
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="controls">
        <button onClick={decrement} disabled={quantity <= 1}>-</button>
        <span>{quantity}</span>
        <button onClick={increment} disabled={quantity >= stock}>+</button>
      </div>
      <button 
        className="btn-add" 
        onClick={() => onAdd(quantity)}
        disabled={stock <= 0}
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemCount;