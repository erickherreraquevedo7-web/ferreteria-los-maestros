import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-3 mt-auto">
      <Container>
        <Row className="g-4">
          <Col md={4}>
            <h5 className="text-warning fw-bold">🔨 Ferretería Los Maestros</h5>
            <p className="text-muted small">
              Especialistas en herramientas, materiales de construcción y artículos de seguridad. Calidad garantizada para tus proyectos.
            </p>
          </Col>

          <Col md={4}>
            <h6 className="fw-bold text-uppercase mb-3">Contacto</h6>
            <ul className="list-unstyled text-muted small">
              <li>📍 Av. Bernardo O'Higgins 1234, Santiago</li>
              <li>📞 +56 9 1234 5678</li>
              <li>✉️ contacto@ferreterialosmaestros.cl</li>
            </ul>
          </Col>

          <Col md={4}>
            <h6 className="fw-bold text-uppercase mb-3">Horario de Atención</h6>
            <p className="text-muted small mb-1">Lunes a Viernes: 08:30 - 18:30 hrs</p>
            <p className="text-muted small">Sábados: 09:00 - 14:00 hrs</p>
          </Col>
        </Row>

        <hr className="border-secondary my-3" />

        <div className="text-center text-muted small">
          © {new Date().getFullYear()} Ferretería Los Maestros. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;