import { Navbar as BsNavbar, Container, Nav, Badge } from 'react-bootstrap';

function Navbar({ cantidadCarrito = 0, onNavegar }) {
  return (
    <BsNavbar bg="dark" variant="dark" expand="lg" className="mb-4 shadow-sm">
      <Container>
        <BsNavbar.Brand 
          href="#home" 
          onClick={() => onNavegar && onNavegar('catalogo')}
          className="fw-bold text-warning d-flex align-items-center gap-2"
        >
          🔨 Ferretería Los Maestros
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="menu-principal" />
        <BsNavbar.Collapse id="menu-principal">
          <Nav className="me-auto">
            <Nav.Link onClick={() => onNavegar && onNavegar('catalogo')}>Catálogo</Nav.Link>
            <Nav.Link onClick={() => onNavegar && onNavegar('admin')}>Administración (CRUD)</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link 
              onClick={() => onNavegar && onNavegar('carrito')}
              className="btn btn-outline-warning text-white px-3 border-0 d-flex align-items-center gap-2"
            >
              🛒 Cotización / Carrito
              <Badge bg="warning" text="dark" pill>
                {cantidadCarrito}
              </Badge>
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;