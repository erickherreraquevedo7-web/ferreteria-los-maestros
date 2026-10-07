import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductosProvider } from './context/ProductosContext';
import PlantillaPublica from './components/templates/PlantillaPublica';
import Inicio from './pages/Inicio';
import Catalogo from './pages/Catalogo';

function App() {
  return (
    <ProductosProvider>
      <BrowserRouter>
        <PlantillaPublica>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/catalogo" element={<Catalogo />} />
          </Routes>
        </PlantillaPublica>
      </BrowserRouter>
    </ProductosProvider>
  );
}

export default App;