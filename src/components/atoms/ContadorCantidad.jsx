import { Button, InputGroup, Form } from 'react-bootstrap';

function ContadorCantidad({ cantidad, onIncrementar, onDecrementar, max = 99 }) {
  return (
    <InputGroup style={{ maxWidth: '130px' }}>
      <Button variant="outline-secondary" onClick={onDecrementar} disabled={cantidad <= 1}>
        -
      </Button>
      <Form.Control className="text-center" value={cantidad} readOnly />
      <Button variant="outline-secondary" onClick={onIncrementar} disabled={cantidad >= max}>
        +
      </Button>
    </InputGroup>
  );
}

export default ContadorCantidad;