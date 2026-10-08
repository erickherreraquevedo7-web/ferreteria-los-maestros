import { useState } from 'react';
import { Navbar as BsNavbar, Container, Nav, NavDropdown, Badge, Form, Button } from 'react-bootstrap';
import CampoTexto from '../atoms/CampoTexto';

function Navbar({
  categorias = [],
  cantidadCarrito = 0,
  onNavegar = () => {},
  onBuscar = () => {},
}) {
  const [texto, setTexto] = useState('');

  function ir(evento, ruta) {
    evento.preventDefault();
    onNavegar(ruta);
  }

  function buscar(evento) {
    evento.preventDefault();
    const limpio = texto.trim();
    if (limpio === '') return;
    onBuscar(limpio);
    setTexto('');
  }

  return (
    <BsNavbar bg="dark" variant="dark" expand="lg" className="mb-4 shadow-sm">
      <Container>
        <BsNavbar.Brand
          href="/"
          onClick={(e) => ir(e, '/')}
          className="fw-bold text-warning d-flex align-items-center gap-2"
        >
          🔨 Ferretería Los Maestros
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="menu-principal" />
        <BsNavbar.Collapse id="menu-principal">
          <Nav className="me-auto">
            <Nav.Link href="/catalogo" onClick={(e) => ir(e, '/catalogo')}>
              Catálogo
            </Nav.Link>

            <NavDropdown title="Categorías" id="menu-categorias">
              {categorias.map((c) => {
                const ruta = `/categoria/${encodeURIComponent(c)}`;
                return (
                  <NavDropdown.Item key={c} href={ruta} onClick={(e) => ir(e, ruta)}>
                    {c}
                  </NavDropdown.Item>
                );
              })}
              <NavDropdown.Divider />
              <NavDropdown.Item href="/categorias" onClick={(e) => ir(e, '/categorias')}>
                Ver todas
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/admin/inventario" onClick={(e) => ir(e, '/admin/inventario')}>
              Administración (CRUD)
            </Nav.Link>
          </Nav>

          <Form className="d-flex me-lg-3 my-2 my-lg-0 gap-2" onSubmit={buscar}>
            <CampoTexto
              type="search"
              placeholder="Buscar producto..."
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
            />
            <Button type="submit" variant="outline-warning">Buscar</Button>
          </Form>

          <Nav>
            <Nav.Link
              href="/carrito"
              onClick={(e) => ir(e, '/carrito')}
              className="d-flex align-items-center gap-2"
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