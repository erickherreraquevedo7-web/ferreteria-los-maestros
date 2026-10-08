import { useNavigate } from 'react-router-dom';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
import { useCarrito } from '../../context/CarritoContext';
import { CATEGORIAS } from '../../utils/categorias';

function PlantillaPublica({ children }) {
  const navigate = useNavigate();
  const { cantidadTotal } = useCarrito();

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Navbar
        categorias={CATEGORIAS}
        cantidadCarrito={cantidadTotal}
        onNavegar={navigate}
        onBuscar={(texto) => navigate(`/buscar/${encodeURIComponent(texto)}`)}
      />
      <main className="container py-4 flex-grow-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default PlantillaPublica;

