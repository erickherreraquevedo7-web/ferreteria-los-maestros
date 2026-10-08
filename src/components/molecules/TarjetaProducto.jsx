import { Card } from 'react-bootstrap';
import Boton from '../atoms/Boton';
import Precio from '../atoms/Precio';
import EtiquetaStock from '../atoms/EtiquetaStock';

function TarjetaProducto({ producto, onAgregar, onVerDetalle }) {
  const { id, nombre, marca, precioVenta, stock, stockMinimo, imagen } = producto;
  const sinStock = stock <= 0;

  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Img
        variant="top"
        src={imagen || "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80"}
        alt={nombre}
        style={{ height: '180px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <small className="text-muted text-uppercase">{marca}</small>
          <EtiquetaStock stock={stock} stockMinimo={stockMinimo} />
        </div>
        <Card.Title className="fs-6 fw-bold mb-3">{nombre}</Card.Title>
        <div className="mt-auto pt-2 border-top d-flex justify-content-between align-items-center">
          <Precio monto={precioVenta} />
        </div>
      </Card.Body>
      <Card.Footer className="bg-white border-0 pt-0 pb-3">
        <Boton
          texto={sinStock ? "Sin Stock" : "Agregar al Carrito"}
          variant={sinStock ? "secondary" : "warning"}
          disabled={sinStock}
          onClick={() => onAgregar && onAgregar(producto)}
        />
        <div className="mt-2">
          <Boton
            texto="Ver detalle"
            variant="outline-secondary"
            onClick={() => onVerDetalle && onVerDetalle(id)}
          />
        </div>
      </Card.Footer>
    </Card>
  );
}

export default TarjetaProducto;