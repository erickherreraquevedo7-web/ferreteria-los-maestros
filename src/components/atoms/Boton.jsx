import { Button } from 'react-bootstrap';

function Boton({ texto, variant = "warning", type = "button", onClick }) {
  return (
    <Button variant={variant} type={type} onClick={onClick} className="w-100 fw-bold">
      {texto}
    </Button>
  );
}

export default Boton;