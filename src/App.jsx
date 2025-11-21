
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <NavBar />
          <main className="main-content">
            <Routes>
              <Route 
                path="/" 
                element={<ItemListContainer greeting="Bienvenidos a Toy Store 🧸" />} 
              />
              <Route 
                path="/category/:categoryId" 
                element={<ItemListContainer greeting="Productos por categoría" />} 
              />
              <Route 
                path="/item/:itemId" 
                element={<ItemDetailContainer />} 
              />
              <Route 
                path="/cart" 
                element={<Cart />} 
              />
              <Route 
                path="/checkout" 
                element={<CheckoutForm />} 
              />
              <Route 
                path="*" 
                element={<h2>404 - Página no encontrada</h2>} 
              />
            </Routes>
          </main>
          <footer className="footer">
            <p>© 2025 Toy Store - Todos los derechos reservados</p>
          </footer>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;