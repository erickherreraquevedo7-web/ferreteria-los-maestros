import { Table, Card } from 'react-bootstrap';
import FilaInventario from '../molecules/FilaInventario';

function TablaInventario({ productos = [], onEditar, onEliminar }) {
  return (
    <Card className="shadow-sm border-0 mb-4">
      <Card.Body className="p-0">
        <Table responsive hover align="middle" className="mb-0">
          <thead className="table-dark">
            <tr>
              <th>Código</th>
              <th>Producto</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Estado Stock</th>
              <th className="text-end">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4 text-muted">
                  No hay productos registrados en el inventario.
                </td>
              </tr>
            ) : (
              productos.map((prod) => (
                <FilaInventario 
                  key={prod.id} 
                  producto={prod} 
                  onEditar={onEditar} 
                  onEliminar={onEliminar} 
                />
              ))
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default TablaInventario;