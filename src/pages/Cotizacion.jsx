import { useNavigate } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import CarritoOrganismo from '../components/organisms/Carrito';

function Cotizacion() {
  const navigate = useNavigate();
  const { items, total, incrementar, decrementar, eliminar, vaciar } = useCarrito();

  return (
    <div>
      <h2 className="mb-4 text-dark fw-bold">Cotización / Carrito</h2>
      <CarritoOrganismo
        items={items}
        total={total}
        onIncrementar={incrementar}
        onDecrementar={decrementar}
        onEliminar={eliminar}
        onVaciar={vaciar}
        onIrCatalogo={() => navigate('/catalogo')}
      />
    </div>
  );
}

export default Cotizacion;