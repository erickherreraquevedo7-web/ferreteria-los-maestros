function Precio({ monto }) {
  const formatoCLP = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  }).format(monto);

  return <span className="fw-bold text-primary fs-5">{formatoCLP}</span>;
}

export default Precio;