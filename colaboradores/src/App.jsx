import 'bootstrap/dist/css/bootstrap.css'; // importamos los estilos CSS de Bootstrap
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import { BaseColaboradores } from './BaseColaboradores';



const App = () => {

    const agregarColaborador = (colaborador) => {
        console.log(' Colaborador agregado', colaborador);
    };



    return (
        <div>
            <h1>Aplicación de Colaboradores</h1>
            < Formulario onAgregarColaborador={agregarColaborador}/>
            < Listado colaboradores= { BaseColaboradores}/>
        </div>
    );
};

export default App;