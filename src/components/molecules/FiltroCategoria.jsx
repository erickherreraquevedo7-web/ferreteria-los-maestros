import { Row, Col } from 'react-bootstrap';
import CampoTexto from '../atoms/CampoTexto';
import Selector from '../atoms/Selector';

function FiltroCategoria({ categorias = [], categoriaSeleccionada, onCambiarCategoria, busqueda, onCambiarBusqueda }) {
  return (
    <Row className="g-3 mb-4">
      <Col md={7}>
        <CampoTexto 
          placeholder="Buscar herramienta, material, marca..." 
          value={busqueda}
          onChange={(e) => onCambiarBusqueda(e.target.value)}
        />
      </Col>
      <Col md={5}>
        <Selector 
          opciones={categorias}
          value={categoriaSeleccionada}
          onChange={(e) => onCambiarCategoria(e.target.value)}
          labelDefecto="Todas las categorías"
        />
      </Col>
    </Row>
  );
}

export default FiltroCategoria;