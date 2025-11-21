// src/components/ItemDetailContainer/ItemDetailContainer.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, 'products', itemId);

    getDoc(docRef)
      .then(snapshot => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch(error => console.error('Error fetching product:', error))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) {
    return <div className="loader">Cargando producto...</div>;
  }

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;