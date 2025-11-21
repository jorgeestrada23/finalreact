// src/components/Cart/CartItem.jsx
import { useCart } from '../../context/CartContext';

const CartItem = ({ item }) => {
  const { removeItem } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-info">
        <h4>{item.name}</h4>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio unitario: ${item.price}</p>
        <p className="subtotal">Subtotal: ${item.price * item.quantity}</p>
      </div>
      <button onClick={() => removeItem(item.id)} className="btn-remove">
        🗑️ Eliminar
      </button>
    </div>
  );
};

export default CartItem;