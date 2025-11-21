// src/context/CartContext.jsx
import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const existingItem = cart.find(prod => prod.id === item.id);
    
    if (existingItem) {
      setCart(cart.map(prod => 
        prod.id === item.id 
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    setCart(cart.filter(prod => prod.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      removeItem,
      clearCart,
      getTotalQuantity,
      getTotalPrice,
      isInCart
    }}>
      {children}
    </CartContext.Provider>
  );
};