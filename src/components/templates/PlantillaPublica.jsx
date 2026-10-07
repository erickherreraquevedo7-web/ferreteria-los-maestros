import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';

function PlantillaPublica({ children, cantidadCarrito = 0, onNavegar }) {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Navbar cantidadCarrito={cantidadCarrito} onNavegar={onNavegar} />
      <main className="container py-4 flex-grow-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default PlantillaPublica;

