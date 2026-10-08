import { useState } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import TarjetaProducto from '../molecules/TarjetaProducto';
import FiltroCategoria from '../molecules/FiltroCategoria';
import { CATEGORIAS } from '../../utils/categorias';

function CatalogoProductos({
  productos = [],
  onAgregarCarrito,
  onVerDetalle,
  categoriaInicial = '',
  busquedaInicial = '',
}) {
  const [categoria, setCategoria] = useState(categoriaInicial);
  const [busqueda, setBusqueda] = useState(busquedaInicial);

  const texto = busqueda.toLowerCase();
  const productosFiltrados = productos.filter((p) => {
    const coincideCategoria = categoria === '' || p.categoria === categoria;
    const coincideTexto =
      p.nombre.toLowerCase().includes(texto) ||
      (p.marca ?? '').toLowerCase().includes(texto);
    return coincideCategoria && coincideTexto;
  });

  return (
    <section>
      <FiltroCategoria
        categorias={CATEGORIAS}
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
                onVerDetalle={onVerDetalle}
              />
            </Col>
          ))}
        </Row>
      )}
    </section>
  );
}

export default CatalogoProductos;