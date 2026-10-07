import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <Container className="py-4">
      <div className="p-5 mb-4 bg-dark text-white rounded-3 shadow-sm">
        <Container fluid className="py-3">
          <h1 className="display-5 fw-bold text-warning">🔨 Ferretería Los Maestros</h1>
          <p className="col-md-8 fs-4">
            Todo en herramientas, materiales de construcción y artículos de seguridad para tus proyectos profesionales y del hogar.
          </p>
          <Link to="/catalogo">
            <Button variant="warning" size="lg" className="fw-bold">
              Ver Catálogo de Productos
            </Button>
          </Link>
        </Container>
      </div>

      <Row className="g-4 text-center">
        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm p-3">
            <Card.Body>
              <h3>🛠️ Herramientas</h3>
              <p className="text-muted">Las mejores marcas en herramientas eléctricas y manuales con garantía.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm p-3">
            <Card.Body>
              <h3>🏗️ Materiales</h3>
              <p className="text-muted">Insumos de construcción de alta calidad para obras de cualquier escala.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm p-3">
            <Card.Body>
              <h3>🥽 Seguridad EPP</h3>
              <p className="text-muted">Equipamiento de protección personal normado para tu tranquilidad.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Inicio;