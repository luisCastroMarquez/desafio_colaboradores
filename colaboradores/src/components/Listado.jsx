
const Listado  = ({ colaboradores, onEliminarColaborador }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Teléfono</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {colaboradores.map((colaborador) => (
                    <tr key={colaborador.id}>
                        <td>{colaborador.nombre}</td>
                        <td>{colaborador.correo}</td>
                        <td>{colaborador.edad}</td>
                        <td>{colaborador.cargo}</td>
                        <td>{colaborador.telefono}</td>
                        <td>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => onEliminarColaborador(colaborador.id)}>
                            Eliminar
                        </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


export default Listado;