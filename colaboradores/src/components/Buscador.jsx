import { useState } from "react";

const Buscador = ({ onBuscarColaboradores }) => {
    const [filtro, setFiltro] = useState({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFiltro ({...filtro, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onBuscarColaboradores(filtro);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre"></label>
                    <input
                        type="text"
                        id="nombre"
                        value={filtro.nombre}
                        onChange={handleInputChange}
                        name="nombre"
                        placeholder="Busca un colaborador"
                    />
                </div>
            </form>
        </div>
    );
};

export default Buscador;