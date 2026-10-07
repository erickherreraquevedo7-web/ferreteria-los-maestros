import { useProductos } from '../context/ProductosContext';
import CatalogoProductos from '../components/organisms/CatalogoProductos';

function Catalogo() {
  const { productos } = useProductos();

  const handleAgregarCarrito = (producto) => {
    alert(`"${producto.nombre}" agregado a la cotización.`);
  };

  return (
    <div>
      <h2 className="mb-4 text-dark fw-bold">Catálogo de Productos</h2>
      <CatalogoProductos 
        productos={productos} 
        onAgregarCarrito={handleAgregarCarrito} 
      />
    </div>
  );
}

export default Catalogo;