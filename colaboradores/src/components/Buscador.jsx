// Importación de módulos y componentes necesarios
import { useState } from "react";

const Buscador = ({ buscarColaboradores }) => {
  // Estado para almacenar el valor del filtro de búsqueda
  const [filtro, setFiltro] = useState("");

  // Estado para almacenar el valor del filtro de búsqueda
  const handleChange = (e) => {
    const { value } = e.target;
    setFiltro(value);
    buscarColaboradores(value);
  };

  // Renderización del componente Buscador
  return (
    <div
      className="table-responsive"
      style={{ display: "flex", flexDirection: "column", padding: "15px 0px" }}
    >
      <div style={{ display: "flex", width: "350px" }}>
        <label htmlFor="filtro" className="form-label"></label>
        <input
          type="text"
          id="filtro"
          className="form-control"
          value={filtro}
          onChange={handleChange}
          placeholder="Busca un colaborador"
        />
      </div>
    </div>
  );
};

export default Buscador;
