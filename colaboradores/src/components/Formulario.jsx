import { useState } from 'react';

const Formulario = ({ onAgregarColaborador}) => {
    const [colaborador, setColaborador] = useState({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono:''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setColaborador({...colaborador, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            colaborador.nombre.trim() === '' ||
            colaborador.correo.trim() === '' ||
            colaborador.edad.trim() === '' ||
            colaborador.cargo.trim() === '' ||
            colaborador.telefono.trim() === ''

        ) {
            alert (' Por favor, complete todo los campos.');
            return;
        }

        onAgregarColaborador(colaborador);
            //LIMPIAR EL FORMULARIO
        setColaborador({
            nombre: '',
            correo: '',
            edad: '',
            cargo: '',
            telefono: ''
        });
    };

    const { nombre, correo, edad, cargo, telefono } = colaborador;

    return (
        <div>
            <h2>Formalario de Colaboradores</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                        name='nombre'
                    />
                </div>
                <div>
                    <label htmlFor="correo">Correo</label>
                    <input
                        type="email"
                        id="correo"
                        value={correo}
                        onChange={handleInputChange}
                        name='correo'
                    />
                </div>
                <div>
                    <label htmlFor="edad">Edad</label>
                    <input
                        type="number"
                        id="edad"
                        value={edad}
                        onChange={handleInputChange}
                        name='edad'
                    />
                </div>
                <div>
                    <label htmlFor="cargo">Cargo</label>
                    <input
                        type="text"
                        id="cargo"
                        value={cargo}
                        onChange={handleInputChange}
                        name='cargo'
                    />
                </div>
                <div>
                    <label htmlFor="telefono">Telefono</label>
                    <input
                        type="tel"
                        id="telefono"
                        value={telefono}
                        onChange={handleInputChange}
                        name='telefono'
                    />
                    <button type='submit'> Agregar Colaborador</button>
                </div>
            </form>
        </div>
    );
};

export default Formulario;