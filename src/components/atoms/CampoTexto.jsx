import { Form } from 'react-bootstrap';

function CampoTexto({ type = "text", placeholder, value, onChange, id, name, required = false }) {
  return (
    <Form.Control 
      id={id}
      name={name}
      type={type} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange}
      required={required}
    />
  );
}

export default CampoTexto;