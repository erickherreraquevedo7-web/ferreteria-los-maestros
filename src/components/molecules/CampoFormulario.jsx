import { Form } from 'react-bootstrap';
import CampoTexto from '../atoms/CampoTexto';

function CampoFormulario({ label, id, name, type = "text", placeholder, value, onChange, error, required = false }) {
  return (
    <Form.Group className="mb-3" controlId={id}>
      {label && <Form.Label className="fw-semibold">{label}</Form.Label>}
      <CampoTexto 
        id={id}
        name={name}
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange}
        required={required}
      />
      {error && <Form.Control.Feedback type="invalid" className="d-block">{error}</Form.Control.Feedback>}
    </Form.Group>
  );
}

export default CampoFormulario;