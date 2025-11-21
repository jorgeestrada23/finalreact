// src/components/CheckoutForm/CheckoutForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { useCart } from '../../context/CartContext';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { cart, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const order = {
      buyer: formData,
      items: cart,
      total: getTotalPrice(),
      date: Timestamp.fromDate(new Date())
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Error al crear la orden');
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className="order-success">
        <h2>✅ ¡Compra realizada con éxito!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <button onClick={() => navigate('/')} className="btn-home">
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-form">
      <h2>Finalizar Compra</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={formData.name}