import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useProductos } from '../context/ProductosContext';
import { useCarrito } from '../context/CarritoContext';
import CatalogoProductos from '../components/organisms/CatalogoProductos';

// Una página, tres rutas (ver App.jsx):
//   /catalogo            todos los productos
//   /categoria/:nombre   los de una categoría
//   /buscar/:texto       resultado de una búsqueda
function Catalogo() {
  const navigate = useNavigate();
  const { nombre, texto } = useParams();
  const { productos } = useProductos();
  const { agregar } = useCarrito();
  const [mensaje, setMensaje] = useState('');

  let titulo = 'Catálogo de Productos';
  if (nombre) titulo = nombre;
  if (texto) titulo = `Resultados para "${texto}"`;

  const handleAgregarCarrito = (producto) => {
    agregar(producto);
    setMensaje(`"${producto.nombre}" agregado a la cotización.`);
  };

  return (
    <div>
      <h2 className="mb-4 text-dark fw-bold">{titulo}</h2>
      {mensaje && (
        <Alert variant="success" dismissible onClose={() => setMensaje('')}>
          {mensaje}
        </Alert>
      )}
      <CatalogoProductos
        key={`${nombre ?? ''}|${texto ?? ''}`}
        productos={productos}
        categoriaInicial={nombre ?? ''}
        busquedaInicial={texto ?? ''}
        onAgregarCarrito={handleAgregarCarrito}
        onVerDetalle={(id) => navigate(`/producto/${id}`)}
      />
    </div>
  );
}

export default Catalogo;