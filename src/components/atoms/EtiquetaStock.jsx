import { Badge } from 'react-bootstrap';

function EtiquetaStock({ stock }) {
  const disponible = stock > 0;
  return (
    <Badge bg={disponibilidad ? "success" : "danger"}>
      {disponible ? `Stock: ${stock} un.` : "Agotado"}
    </Badge>
  );
}

export default EtiquetaStock;