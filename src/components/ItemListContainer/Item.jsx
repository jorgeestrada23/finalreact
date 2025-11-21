// src/components/ItemListContainer/Item.jsx
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="item-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
      <p className="category">{product.category}</p>
      <Link to={`/item/${product.id}`} className="btn-detail">
        Ver Detalle
      </Link>
    </div>
  );
};

export default Item;