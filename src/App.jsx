import 'bootstrap/dist/css/bootstrap.min.css';
import TarjetaProducto from './components/molecules/TarjetaProducto';
import CampoFormulario from './components/molecules/CampoFormulario';

function App() {
  // Producto de prueba para verificar que la tarjeta y la imagen se vean bien
  const productoEjemplo = {
    id: 1,
    codigo: "TAL-001",
    nombre: "Taladro Percutor 13mm 750W",
    marca: "DeWalt",
    precioVenta: 45990,
    stock: 8,
    stockMinimo: 2,
    imagen: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=400&q=80"
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-warning fw-bold bg-dark p-3 rounded">
        🔨 Ferretería Los Maestros
      </h1>
      
      <div className="row g-4">
        <div className="col-md-4">
          <h5>Prueba de Molécula: Tarjeta</h5>
          <TarjetaProducto 
            producto={productoEjemplo} 
            onAgregar={(p) => alert(`Agregado: ${p.nombre}`)}
          />
        </div>

        <div className="col-md-6">
          <h5>Prueba de Molécula: Campo Formulario</h5>
          <CampoFormulario 
            label="Nombre del Producto" 
            placeholder="Ej. Martillo de Peña" 
            id="nombre"
          />
        </div>
      </div>
    </div>
  );
}

export default App;