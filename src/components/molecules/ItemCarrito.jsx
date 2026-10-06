import { Button } from 'react-bootstrap';
import Precio from '../atoms/Precio';
import ContadorCantidad from '../atoms/ContadorCantidad';

function ItemCarrito({ item, onIncrementar, onDecrementar, onEliminar }) {
  const { nombre, precioVenta, cantidad, stock } = item;
  const subtotal = precioVenta * cantidad;

  return (
    <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
      <div style={{ flex: 2 }}>
        <h6 className="mb-0 fw-bold">{nombre}</h6>
        <small className="text-muted">Unitario: <Precio monto={precioVenta} /></small>
      </div>
      <div className="mx-2">
        <ContadorCantidad 
          cantidad={cantidad}
          max={stock}
          onIncrementar={() => onIncrementar(item.id)}
          onDecrementar={() => onDecrementar(item.id)}
        />
      </div>
      <div className="text-end ms-3" style={{ minWidth: '100px' }}>
        <Precio monto={subtotal} />
      </div>
      <Button variant="outline-danger" size="sm" className="ms-3" onClick={() => onEliminar(item.id)}>
        &times;
      </Button>
    </div>
  );
}

export default ItemCarrito;