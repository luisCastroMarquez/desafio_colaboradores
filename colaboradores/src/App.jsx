// Importación de módulos y componentes necesarios
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Buscador from "./components/Buscador";
import { BaseColaboradores } from "./BaseColaboradores";
import Alert from "./components/Alert";

//Componente principal App
const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores); //Estado para lista colaboradores
  const [mensaje, setMensaje] = useState(null); //Estado para mostrar alertas
  const [nextId, setNextId] = useState(colaboradores.length + 1); //Estado generar un Id para nuevo colaborador

  //Estado para agregar una nuevo colaborador
  const onAgregarColaborador = (nuevoColaborador) => {
    const colaboradorNuevo = { ...nuevoColaborador, id: nextId }; //Estado genera un nuevo objeto colaboradores con id único

    //Actualiza lista colaboradores
    setColaboradores([...colaboradores, colaboradorNuevo]);
    setNextId(nextId + 1); //Actualiza id para el siguiente colaborador
  };

  //Función elimina un colaborador de la lista
  const eliminarColaborador = (id) => {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id) //Si el filtro esta vacio, muestra la lista
    );
  };

  const buscarColaboradores = (filtro) => {
    if (filtro === "") {
      setColaboradores(BaseColaboradores);
      return;
    }

    //Filtra lista colaboradores segun la busqueda
    const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
      return (
        colaborador.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        colaborador.correo.toLowerCase().includes(filtro.toLowerCase()) ||
        colaborador.edad.toString().includes(filtro) ||
        colaborador.cargo.toLowerCase().includes(filtro.toLowerCase()) ||
        colaborador.telefono.includes(filtro)
      );
    });

    setColaboradores(colaboradoresFiltrados); //Actualiza lista colaboradores filtrados
  };

  //Función de mensajes de alertas
  const mostrarMensaje = (texto, tipo) => {
    setMensaje({ texto, tipo });
    setTimeout(() => {
      setMensaje(null);
    }, 3000);
  };

  // Renderizado del componente principal
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1>Lista de Colaboradores</h1>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col md={8}>
            <Buscador buscarColaboradores={buscarColaboradores} />
            {mensaje && <Alert mensaje={mensaje.texto} tipo={mensaje.tipo} />}
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col md={8}>
            <Listado
              colaboradores={colaboradores}
              onEliminarColaborador={eliminarColaborador}
            />
          </Col>
          <Col md={4}>
            <Formulario
              onAgregarColaborador={onAgregarColaborador}
              mostrarMensaje={mostrarMensaje}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
