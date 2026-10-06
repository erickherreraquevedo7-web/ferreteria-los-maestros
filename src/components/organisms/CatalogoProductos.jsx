import { useState } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import TarjetaProducto from '../molecules/TarjetaProducto';
import FiltroCategoria from '../molecules/FiltroCategoria';

const CATEGORIAS_FERRETERIA = [
  "Herramientas Eléctricas",
  "Herramientas Manuales",
  "Materiales de Construcción",
  "Seguridad e Higiene",
  "Pinturas y Acabados",
  "Fijaciones y Tornillos",
  "Plomería y Gasfitería",
  "Electricidad",
  "Jardín y Agrícola"
];

function CatalogoProductos({ productos = [], onAgregarCarrito }) {
  const [categoria, setCategoria] = useState('');
  const [busqueda, setBusqueda] = useState('');

  const productosFiltrados = productos.filter((p) => {
    const coincideCategoria = categoria === '' || p.categoria === categoria;
    const coincideTexto = p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                          p.marca.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideTexto;
  });

  return (
    <section>
      <FiltroCategoria 
        categorias={CATEGORIAS_FERRETERIA}
        categoriaSeleccionada={categoria}
        onCambiarCategoria={setCategoria}
        busqueda={busqueda}
        onCambiarBusqueda={setBusqueda}
      />

      {productosFiltrados.length === 0 ? (
        <Alert variant="info" className="text-center my-4">
          No se encontraron productos que coincidan con los criterios de búsqueda.
        </Alert>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {productosFiltrados.map((producto) => (
            <Col key={producto.id}>
              <TarjetaProducto 
                producto={producto} 
                onAgregar={onAgregarCarrito} 
              />
            </Col>
          ))}
        </Row>
      )}
    </section>
  );
}

export default CatalogoProductos;