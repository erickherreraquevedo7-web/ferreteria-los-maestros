import { createContext, useContext, useState } from 'react';
import productosIniciales from '../data/productos.json';

const ProductosContext = createContext(null);

export function ProductosProvider({ children }) {
  const [productos, setProductos] = useState(productosIniciales);

  const agregarProducto = (producto) => {
    setProductos((prev) => {
      const nuevoId = prev.reduce((max, p) => Math.max(max, p.id), 0) + 1;
      return [...prev, { ...producto, id: nuevoId }];
    });
  };

  const actualizarProducto = (producto) => {
    setProductos((prev) => prev.map((p) => (p.id === producto.id ? { ...p, ...producto } : p)));
  };

  const eliminarProducto = (id) => {
    setProductos((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ProductosContext.Provider
      value={{ productos, agregarProducto, actualizarProducto, eliminarProducto }}
    >
      {children}
    </ProductosContext.Provider>
  );
}
export function useProductos() {
  const ctx = useContext(ProductosContext);
  if (!ctx) throw new Error('useProductos debe usarse dentro de ProductosProvider');
  return ctx;
}
