import { Button } from 'react-bootstrap';
import Precio from '../atoms/Precio';
import EtiquetaStock from '../atoms/EtiquetaStock';

function FilaInventario({ producto, onEditar, onEliminar }) {
  const { id, codigo, nombre, categoria, precioVenta, stock, stockMinimo } = producto;

  return (
    <tr>
      <td><code>{codigo || id}</code></td>
      <td className="fw-bold">{nombre}</td>
      <td>{categoria}</td>
      <td><Precio monto={precioVenta} /></td>
      <td><EtiquetaStock stock={stock} stockMinimo={stockMinimo} /></td>
      <td className="text-end">
        <Button variant="outline-primary" size="sm" className="me-2" onClick={() => onEditar(producto)}>
          Editar
        </Button>
        <Button variant="outline-danger" size="sm" onClick={() => onEliminar(id)}>
          Eliminar
        </Button>
      </td>
    </tr>
  );
}

export default FilaInventario;
