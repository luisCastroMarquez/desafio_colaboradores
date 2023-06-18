import 'bootstrap/dist/css/bootstrap.css'; // importamos los estilos CSS de Bootstrap
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';
import { BaseColaboradores } from './BaseColaboradores';


const App = () => {
    return (
        <div>
            <Listado colaboradores={BaseColaboradores}/>
            <Formulario/>
            <Buscador/>
            <Alert/>
        </div>
    );
};

export default App;