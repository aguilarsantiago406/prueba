import { useState, useEffect } from "react";

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  // Efecto para establecer el tema inicial (claro) cuando el componente se monta por primera vez.
  useEffect(() => {
    setIsDark(false);
    document.body.classList.remove("dark");
  }, []); // El array vacío asegura que solo se ejecute una vez.

  // Función para alternar entre tema claro y oscuro.
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.body.classList.toggle("dark", newTheme);
  };

  // El hook devuelve el estado actual y la función para cambiarlo.
  return { isDark, toggleTheme };
};