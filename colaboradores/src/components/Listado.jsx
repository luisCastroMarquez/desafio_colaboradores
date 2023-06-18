import { BaseColaboradores } from "../BaseColaboradores";

const Listado  = () => {
    return (
        <div>
            <h2>Listado de Colaboradores </h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Edad</th>
                        <th>Cargo</th>
                        <th>Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {BaseColaboradores.map((Colaborador) => (
                        <tr key={Colaborador.id}>
                            <td>{Colaborador.id}</td>
                            <td>{Colaborador.nombre}</td>
                            <td>{Colaborador.correo}</td>
                            <td>{Colaborador.edad}</td>
                            <td>{Colaborador.cargo}</td>
                            <td>{Colaborador.telefono}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Listado;