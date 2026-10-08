import { Card, Alert } from 'react-bootstrap';
import ItemCarrito from '../molecules/ItemCarrito';
import Precio from '../atoms/Precio';
import Boton from '../atoms/Boton';

function Carrito({ items = [], total = 0, onIncrementar, onDecrementar, onEliminar, onVaciar, onIrCatalogo }) {
  if (items.length === 0) {
    return (
      <Alert variant="info" className="text-center">
        <h5>Tu carrito está vacío</h5>
        <div className="mx-auto mt-3" style={{ maxWidth: '220px' }}>
          <Boton texto="Ir al catálogo" onClick={onIrCatalogo} />
        </div>
      </Alert>
    );
  }

  return (
    <Card className="shadow-sm border-0">
      <Card.Body className="p-0">
        {items.map((item) => (
          <ItemCarrito
            key={item.id}
            item={item}
            onIncrementar={onIncrementar}
            onDecrementar={onDecrementar}
            onEliminar={onEliminar}
          />
        ))}
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center bg-white p-3">
        <div className="fs-5">Total: <Precio monto={total} /></div>
        <div className="d-flex gap-2">
          <div style={{ width: '160px' }}><Boton texto="Vaciar" variant="outline-danger" onClick={onVaciar} /></div>
          <div style={{ width: '180px' }}><Boton texto="Seguir comprando" variant="secondary" onClick={onIrCatalogo} /></div>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default Carrito;