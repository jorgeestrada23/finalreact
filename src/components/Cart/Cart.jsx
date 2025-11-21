// src/components/Cart/Cart.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cart, clearCart, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>🛒 Tu carrito está vacío</h2>
        <Link to="/" className="btn-home">Ir a comprar</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Tu Carrito</h2>
      <div className="cart-items">
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${getTotalPrice()}</h3>
        <button onClick={clearCart} className="btn-clear">Vaciar Carrito</button>
        <Link to="/checkout" className="btn-checkout">Finalizar Compra</Link>
      </div>
    </div>
  );
};

export default Cart;