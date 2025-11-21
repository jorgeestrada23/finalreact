// src/components/ItemListContainer/ItemList.jsx
import Item from './Item';

const ItemList = ({ products }) => {
  if (products.length === 0) {
    return <p>No hay productos disponibles</p>;
  }

  return (
    <div className="item-list">
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;