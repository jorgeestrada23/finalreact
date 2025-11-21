// src/components/NavBar/NavBar.jsx
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <h1>🧸 Toy Store</h1>
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/accion">Acción</Link></li>
        <li><Link to="/category/educativos">Educativos</Link></li>
        <li><Link to="/category/peluches">Peluches</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;