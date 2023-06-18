import { BaseColaboradores } from "../BaseColaboradores";

const Listado  = () => {
    return (
        <div>
            <h2>Listado de Colaboradores </h2>
            <ul>
                {BaseColaboradores.map((colaborador) => (
                    <li key={colaborador.id}>
                        <strong>Nombre:</strong> {colaborador.nombre}<br />
                        <strong>Correo:</strong> {colaborador.correo}<br />
                        <strong>Edad:</strong> {colaborador.edad}<br />
                        <strong>Cargo:</strong> {colaborador.cargo}<br />
                        <strong>Telefono:</strong> {colaborador.telefono}<br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Listado;