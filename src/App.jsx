import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductosProvider, useProductos } from './context/ProductosContext';

import Navbar from './components/organisms/Navbar';
import CatalogoProductos from './components/organisms/CatalogoProductos';
import Footer from './components/organisms/Footer'; 

import TablaInventario from './components/organisms/TablaInventario';
import FormularioProducto from './components/organisms/FormularioProducto';

function ContenidoPrincipal() {
  const { productos, crear, actualizar, eliminar } = useProductos();
  const [vista, setVista] = useState('catalogo'); // 'catalogo' | 'admin' | 'carrito'
  const [carrito, setCarrito] = useState([]);
  const [productoEditar, setProductoEditar] = useState(null);

  // Funciones del Carrito / Cotización
  const handleAgregarCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
    alert(`"${producto.nombre}" agregado al carrito.`);
  };

  const handleGuardarProducto = (datos) => {
    if (productoEditar) {
      actualizar(productoEditar.id, datos);
      setProductoEditar(null);
      alert('Producto actualizado con éxito.');
    } else {
      crear(datos);
      alert('Producto creado con éxito.');
    }
  };

  const handleEditarProducto = (producto) => {
    setProductoEditar(producto);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEliminarProducto = (id) => {
    if (window.confirm('¿Seguro que deseas eliminar este producto?')) {
      eliminar(id);
    }
  };

  const totalItemsCarrito = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <>
      <Navbar cantidadCarrito={totalItemsCarrito} onNavegar={setVista} />

      <main className="container py-2">
        {vista === 'catalogo' && (
          <div>
            <h2 className="mb-4 text-secondary fw-bold">Catálogo de Productos</h2>
            <CatalogoProductos 
              productos={productos} 
              onAgregarCarrito={handleAgregarCarrito} 
            />
          </div>
        )}

        {vista === 'admin' && (
          <div>
            <h2 className="mb-4 text-secondary fw-bold">Administración de Inventario (CRUD)</h2>
            <FormularioProducto 
              productoEditar={productoEditar}
              onGuardar={handleGuardarProducto}
              onCancelar={() => setProductoEditar(null)}
            />
            <TablaInventario 
              productos={productos}
              onEditar={handleEditarProducto}
              onEliminar={handleEliminarProducto}
            />
          </div>
        )}

        {vista === 'carrito' && (
          <div>
            <h2 className="mb-4 text-secondary fw-bold">Cotización de Productos</h2>
            {carrito.length === 0 ? (
              <p className="text-muted">No has agregado productos al carrito todavía.</p>
            ) : (
              <ul className="list-group mb-3">
                {carrito.map((item) => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong>{item.nombre}</strong> (x{item.cantidad})
                    </div>
                    <span>${(item.precioVenta * item.cantidad).toLocaleString('es-CL')}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </main>
    </>
  );
}


function App() {
  return (
    <ProductosProvider>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="container py-4 flex-grow-1">
          <CatalogoProductos />
        </main>
        <Footer /> {/* <--- Lo agregas al final */}
      </div>
    </ProductosProvider>
  );
}

export default App;