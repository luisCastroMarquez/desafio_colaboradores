import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';


const App = () => {
    return (
        <div>
            <Listado/>
            <Formulario/>
            <Buscador/>
            <Alert/>
        </div>
    );
};

export default App;