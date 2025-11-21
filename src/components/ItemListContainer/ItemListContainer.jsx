// src/components/ItemListContainer/ItemListContainer.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const productsRef = collection(db, 'products');
    
    const q = categoryId 
      ? query(productsRef, where('category', '==', categoryId))
      : productsRef;

    getDocs(q)
      .then(snapshot => {
        const productsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsData);
      })
      .catch(error => console.error('Error fetching products:', error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) {
    return <div className="loader">Cargando productos...</div>;
  }

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;