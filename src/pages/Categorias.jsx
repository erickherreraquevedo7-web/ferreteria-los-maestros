import { Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useProductos } from '../context/ProductosContext';
import Boton from '../components/atoms/Boton';
import { CATEGORIAS } from '../utils/categorias';

function Categorias() {
  const navigate = useNavigate();
  const { productos } = useProductos();

  return (
    <div>
      <h2 className="mb-4 text-dark fw-bold">Categorías</h2>
      <Row xs={1} sm={2} lg={3} className="g-4">
        {CATEGORIAS.map((categoria) => {
          const cantidad = productos.filter((p) => p.categoria === categoria).length;
          return (
            <Col key={categoria}>
              <Card className="h-100 shadow-sm border-0 text-center">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{categoria}</Card.Title>
                  <Card.Text className="text-muted">
                    {cantidad} {cantidad === 1 ? 'producto' : 'productos'}
                  </Card.Text>
                  <div className="mt-auto">
                    <Boton
                      texto="Ver productos"
                      onClick={() => navigate(`/categoria/${encodeURIComponent(categoria)}`)}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Categorias;