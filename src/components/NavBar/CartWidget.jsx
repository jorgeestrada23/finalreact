// src/components/NavBar/CartWidget.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const CartWidget = () => {
  const { getTotalQuantity } = useCart();
  const totalQuantity = getTotalQuantity();

  return (
    <Link to="/cart" className="cart-widget">
      🛒
      {totalQuantity > 0 && (
        <span className="cart-badge">{totalQuantity}</span>
      )}
    </Link>
  );
};

export default CartWidget;