// src/components/ItemDetailContainer/ItemDetail.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useCart();

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(product, quantity);
  };

  return (
    <div className="item-detail">
      <img src={product.image} alt={product.name} />
      <div className="detail-info">
        <h2>{product.name}</h2>
        <p className="description">{product.description}</p>
        <p className="price">${product.price}</p>
        <p className="stock">Stock disponible: {product.stock}</p>
        
        {quantityAdded > 0 ? (
          <div className="added-actions">
            <p>✅ Agregado al carrito: {quantityAdded} unidades</p>
            <Link to="/cart" className="btn-cart">Ir al Carrito</Link>
            <Link to="/" className="btn-continue">Seguir Comprando</Link>
          </div>
        ) : (
          product.stock > 0 ? (
            <ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd} />
          ) : (
            <p className="no-stock">❌ Producto sin stock</p>
          )
        )}
      </div>
    </div>
  );
};

export default ItemDetail;