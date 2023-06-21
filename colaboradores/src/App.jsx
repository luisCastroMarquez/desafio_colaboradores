import { useState } from 'react';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Buscador from './components/Buscador';
import { BaseColaboradores } from './BaseColaboradores';


const App = () => {
    const [colaboradores, setColaboradores] = useState(BaseColaboradores);

    const agregarColaborador = (colaborador) => {
        setColaboradores([...colaboradores, colaborador]);
    };

    const eliminarColaborador = (id) => {
        setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== id));
    };

    const buscarColaboradores = (filtro) => {
        const { nombre, correo, edad, cargo, telefono } = filtro;

        const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
            return (
                colaborador.nombre.toLowerCase().includes(nombre.toLowerCase()) &&
                colaborador.correo.toLowerCase().includes(correo.toLowerCase()) &&
                colaborador.edad.toString().includes(edad.toString()) &&
                colaborador.cargo.toLowerCase().includes(cargo.toLowerCase()) &&
                colaborador.telefono.includes(telefono)
            );
        });

        return colaboradoresFiltrados;
    };

    return (
        <>
            <div>
                <h1>Lista de Colaboradores</h1>
                <Buscador onBuscarColaboradores={buscarColaboradores} />
                <Listado colaboradores={colaboradores}
                    onEliminarColaborador={eliminarColaborador}/>
                <Formulario onMostrarError={agregarColaborador} />
            </div>
        </>
    );
};

export default App;


