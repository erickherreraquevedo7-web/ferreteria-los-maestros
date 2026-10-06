import { Button } from 'react-bootstrap';

function Boton({ texto, variant = "warning", type = "button", onClick, disabled = false }) {
  return (
    <Button 
      variant={variant} 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      className="w-100 fw-bold"
    >
      {texto}
    </Button>
  );
}

export default Boton;