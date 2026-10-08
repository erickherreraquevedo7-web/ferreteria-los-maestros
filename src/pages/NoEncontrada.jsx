import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Boton from '../components/atoms/Boton';

function NoEncontrada() {
  const navigate = useNavigate();
  return (
    <Alert variant="warning" className="text-center">
      <h4>404 – Página no encontrada</h4>
      <p>La dirección que buscas no existe.</p>
      <div className="mx-auto" style={{ maxWidth: '220px' }}>
        <Boton texto="Volver al inicio" onClick={() => navigate('/')} />
      </div>
    </Alert>
  );
}

export default NoEncontrada;
