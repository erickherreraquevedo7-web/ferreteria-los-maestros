import { useState, useEffect } from 'react';
import { Form, Card, Row, Col } from 'react-bootstrap';
import CampoFormulario from '../molecules/CampoFormulario';
import Selector from '../atoms/Selector';
import Boton from '../atoms/Boton';

const CATEGORIAS_FERRETERIA = [
  "Herramientas Eléctricas",
  "Herramientas Manuales",
  "Materiales de Construcción",
  "Seguridad e Higiene",
  "Pinturas y Acabados",
  "Fijaciones y Tornillos",
  "Plomería y Gasfitería",
  "Electricidad",
  "Jardín y Agrícola"
];

const ESTADO_INICIAL = {
  codigo: '',
  nombre: '',
  categoria: '',
  marca: '',
  precioVenta: '',
  stock: '',
  stockMinimo: '',
  imagen: ''
};

function FormularioProducto({ productoEditar, onGuardar, onCancelar }) {
  const [formData, setFormData] = useState(ESTADO_INICIAL);

  useEffect(() => {
    if (productoEditar) {
      setFormData(productoEditar);
    } else {
      setFormData(ESTADO_INICIAL);
    }
  }, [productoEditar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuardar(formData);
    setFormData(ESTADO_INICIAL);
  };

  return (
    <Card className="shadow-sm border-0 mb-4">
      <Card.Header className="bg-primary text-white fw-bold">
        {productoEditar ? '✏️ Editar Producto' : '➕ Registrar Nuevo Producto'}
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={4}>
              <CampoFormulario 
                label="Código" 
                id="codigo" 
                name="codigo" 
                value={formData.codigo} 
                onChange={handleChange} 
                required 
              />
            </Col>
            <Col md={8}>
              <CampoFormulario 
                label="Nombre del Producto" 
                id="nombre" 
                name="nombre" 
                value={formData.nombre} 
                onChange={handleChange} 
                required 
              />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Categoría</Form.Label>
                <Selector 
                  opciones={CATEGORIAS_FERRETERIA}
                  value={formData.categoria}
                  onChange={(e) => setFormData((prev) => ({ ...prev, categoria: e.target.value }))}
                  labelDefecto="Seleccione categoría..."
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <CampoFormulario 
                label="Marca" 
                id="marca" 
                name="marca" 
                value={formData.marca} 
                onChange={handleChange} 
                required 
              />
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <CampoFormulario 
                label="Precio Venta (CLP)" 
                id="precioVenta" 
                name="precioVenta" 
                type="number" 
                value={formData.precioVenta} 
                onChange={handleChange} 
                required 
              />
            </Col>
            <Col md={4}>
              <CampoFormulario 
                label="Stock Disponible" 
                id="stock" 
                name="stock" 
                type="number" 
                value={formData.stock} 
                onChange={handleChange} 
                required 
              />
            </Col>
            <Col md={4}>
              <CampoFormulario 
                label="Stock Mínimo (Alerta)" 
                id="stockMinimo" 
                name="stockMinimo" 
                type="number" 
                value={formData.stockMinimo} 
                onChange={handleChange} 
              />
            </Col>
          </Row>

          <CampoFormulario 
            label="URL de Imagen" 
            id="imagen" 
            name="imagen" 
            placeholder="https://..." 
            value={formData.imagen} 
            onChange={handleChange} 
          />

          <div className="d-flex justify-content-end gap-2 mt-3">
            {productoEditar && (
              <Boton 
                texto="Cancelar" 
                variant="secondary" 
                onClick={onCancelar} 
              />
            )}
            <Boton 
              texto={productoEditar ? "Guardar Cambios" : "Agregar Producto"} 
              variant="success" 
              type="submit" 
            />
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default FormularioProducto;