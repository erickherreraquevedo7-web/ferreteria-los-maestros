import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductosProvider } from './context/ProductosContext';
import { CarritoProvider } from './context/CarritoContext';
import PlantillaPublica from './components/templates/PlantillaPublica';
import Inicio from './pages/Inicio';
import Catalogo from './pages/Catalogo';
import Categorias from './pages/Categorias';
import DetalleProducto from './pages/DetalleProducto';
import Cotizacion from './pages/Cotizacion';
import AdminInventario from './pages/AdminInventario';
import NoEncontrada from './pages/NoEncontrada';


function App() {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <BrowserRouter>
          <PlantillaPublica>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/categoria/:nombre" element={<Catalogo />} />
              <Route path="/buscar/:texto" element={<Catalogo />} />
              <Route path="/categorias" element={<Categorias />} />
              <Route path="/producto/:id" element={<DetalleProducto />} />
              <Route path="/carrito" element={<Cotizacion />} />
              <Route path="/admin/inventario" element={<AdminInventario />} />
              <Route path="*" element={<NoEncontrada />} />
            </Routes>
          </PlantillaPublica>
        </BrowserRouter>
      </CarritoProvider>
    </ProductosProvider>
  );
}

export default App;