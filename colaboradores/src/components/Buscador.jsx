import { useState } from "react";

const Buscador = ({ onBuscarColaboradores }) => {
    const [filtro, setFiltro] = useState({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: '',
    });

    const handleChange = (e) => {
        setFiltro ({
            ...filtro,
            [e.target.name] : e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onBuscarColaboradores(filtro);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-2">
                        <input
                            type="text"
                            id="nombre"
                            className="form-control"
                            value={filtro.nombre}
                            onChange={handleChange}
                            name="nombre"
                            placeholder="Busca un colaborador"
                        />
                    </div>
                    <div className="col-md-2">
                        <button type="submit" className="btn btn-primary">
                            buscar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Buscador;