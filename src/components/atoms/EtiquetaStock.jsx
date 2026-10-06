import { Badge } from 'react-bootstrap';

function EtiquetaStock({ stock, stockMinimo = 0 }) {
  if (stock <= 0) {
    return <Badge bg="danger">Agotado</Badge>;
  }
  if (stock <= stockMinimo) {
    return <Badge bg="warning" text="dark">Reponer ({stock} un.)</Badge>;
  }
  return <Badge bg="success">Stock: {stock} un.</Badge>;
}

export default EtiquetaStock;