import { useState } from 'react';
import { Row, Col, Alert, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useProductos } from '../context/ProductosContext';
import { useCarrito } from '../context/CarritoContext';
import Precio from '../components/atoms/Precio';
import EtiquetaStock from '../components/atoms/EtiquetaStock';
import ContadorCantidad from '../components/atoms/ContadorCantidad';
import Boton from '../components/atoms/Boton';

const IMAGEN_POR_DEFECTO =
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80';

function DetalleProducto() {
  const navigate = useNavigate();
  const params = useParams();
  const { productos } = useProductos();
  const { agregar } = useCarrito();
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);

  const id = Number(params.id);
  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    return (
      <Alert variant="warning" className="text-center">
        <h4>Producto no encontrado</h4>
        <p>No existe un producto con el código "{params.id}".</p>
        <div className="mx-auto" style={{ maxWidth: '220px' }}>
          <Boton texto="Ir al catálogo" onClick={() => navigate('/catalogo')} />
        </div>
      </Alert>
    );
  }

  const sinStock = producto.stock <= 0;

  const handleAgregar = () => {
    agregar(producto, cantidad);
    setAgregado(true);
  };

  return (
    <div>
      <Button variant="link" className="p-0 text-decoration-none" onClick={() => navigate(-1)}>
        &larr; Volver
      </Button>
      <Row className="g-4 mt-1">
        <Col md={5}>
          <img
            src={producto.imagen || IMAGEN_POR_DEFECTO}
            alt={producto.nombre}
            className="img-fluid rounded shadow-sm w-100"
            style={{ maxHeight: '380px', objectFit: 'cover' }}
          />
        </Col>
        <Col md={7}>
          <small className="text-muted text-uppercase">{producto.marca} · {producto.codigo}</small>
          <h2 className="fw-bold mt-1">{producto.nombre}</h2>
          <p className="text-muted mb-2">
            {producto.categoria}
            {producto.subcategoria && ` › ${producto.subcategoria}`}
            {producto.unidad && ` · Venta por: ${producto.unidad}`}
          </p>
          <div className="mb-3"><Precio monto={producto.precioVenta} /></div>
          <div className="mb-3">
            <EtiquetaStock stock={producto.stock} stockMinimo={producto.stockMinimo} />
          </div>

          {!sinStock && (
            <div className="d-flex align-items-center gap-3 mb-3">
              <ContadorCantidad
                cantidad={cantidad}
                max={producto.stock}
                onIncrementar={() => setCantidad((c) => c + 1)}
                onDecrementar={() => setCantidad((c) => c - 1)}
              />
              <div style={{ maxWidth: '240px', flex: 1 }}>
                <Boton texto="Agregar al Carrito" onClick={handleAgregar} />
              </div>
            </div>
          )}

          {agregado && (
            <Alert variant="success">
              Agregado a la cotización.{' '}
              <Button
                variant="link"
                className="p-0 align-baseline"
                onClick={() => navigate('/carrito')}
              >
                Ver carrito
              </Button>
            </Alert>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default DetalleProducto;