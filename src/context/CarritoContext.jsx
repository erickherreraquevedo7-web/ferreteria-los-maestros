import { createContext, useContext, useState } from 'react';

const CarritoContext = createContext(null);

export function CarritoProvider({ children }) {
  const [items, setItems] = useState([]);

  const agregar = (producto, cantidad = 1) => {
    setItems((prev) => {
      const existente = prev.find((i) => i.id === producto.id);
      if (existente) {
        return prev.map((i) =>
          i.id === producto.id
            ? { ...i, cantidad: Math.min(i.cantidad + cantidad, producto.stock) }
            : i
        );
      }
      return [...prev, { ...producto, cantidad: Math.min(cantidad, producto.stock) }];
    });
  };

  const incrementar = (id) =>
    setItems((prev) =>
      prev.map((i) => (i.id === id && i.cantidad < i.stock ? { ...i, cantidad: i.cantidad + 1 } : i))
    );

  const decrementar = (id) =>
    setItems((prev) =>
      prev.map((i) => (i.id === id && i.cantidad > 1 ? { ...i, cantidad: i.cantidad - 1 } : i))
    );

  const eliminar = (id) => setItems((prev) => prev.filter((i) => i.id !== id));
  const vaciar = () => setItems([]);

  const total = items.reduce((suma, i) => suma + i.precioVenta * i.cantidad, 0);
  const cantidadTotal = items.reduce((suma, i) => suma + i.cantidad, 0);

  return (
    <CarritoContext.Provider
      value={{ items, total, cantidadTotal, agregar, incrementar, decrementar, eliminar, vaciar }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCarrito() {
  const ctx = useContext(CarritoContext);
  if (!ctx) throw new Error('useCarrito debe usarse dentro de CarritoProvider');
  return ctx;
}
