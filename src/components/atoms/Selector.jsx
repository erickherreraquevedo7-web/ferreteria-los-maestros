import { Form } from 'react-bootstrap';

function Selector({ opciones = [], value, onChange, labelDefecto = "Seleccionar..." }) {
  return (
    <Form.Select value={value} onChange={onChange}>
      <option value="">{labelDefecto}</option>
      {opciones.map((opt, index) => (
        <option key={index} value={opt.valor || opt}>
          {opt.etiqueta || opt}
        </option>
      ))}
    </Form.Select>
  );
}

export default Selector;