import { useState } from 'react';
import { useProductos } from '../context/ProductosContext';
import FormularioProducto from '../components/organisms/FormularioProducto';
import TablaInventario from '../components/organisms/TablaInventario';

function AdminInventario() {
  const { productos, agregarProducto, actualizarProducto, eliminarProducto } = useProductos();
  const [productoEditar, setProductoEditar] = useState(null);

  const handleGuardar = (producto) => {
    if (productoEditar) {
      actualizarProducto({ ...producto, id: productoEditar.id });
      setProductoEditar(null);
    } else {
      agregarProducto(producto);
    }
  };

  const handleEliminar = (id) => {
    if (window.confirm('¿Eliminar este producto del inventario?')) {
      eliminarProducto(id);
      if (productoEditar?.id === id) setProductoEditar(null);
    }
  };

  return (
    <div>
      <h2 className="mb-4 text-dark fw-bold">Administración de Inventario</h2>
      <FormularioProducto
        productoEditar={productoEditar}
        onGuardar={handleGuardar}
        onCancelar={() => setProductoEditar(null)}
      />
      <TablaInventario
        productos={productos}
        onEditar={setProductoEditar}
        onEliminar={handleEliminar}
      />
    </div>
  );
}

export default AdminInventario;
