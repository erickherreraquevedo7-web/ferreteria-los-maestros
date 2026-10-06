import { Form } from 'react-bootstrap';

function CampoTexto({ type = "text", placeholder, value, onChange, id }) {
  return (
    <Form.Control 
      type={type} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
      id={id} 
    />
  );
}

export default CampoTexto;