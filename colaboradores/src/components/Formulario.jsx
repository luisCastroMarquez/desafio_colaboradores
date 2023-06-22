import { useState } from 'react';
import Alert from './Alert';

const Formulario = ({ onMostrarError }) => {
    const [colaborador, setColaborador] = useState({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: '',
    });

    const [alerta, setAlerta] = useState(null);

    const handleChange = (e) => {
        setColaborador({
            ...colaborador,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar campos vacíos
        if (!colaborador.nombre || !colaborador.correo  || !colaborador.edad || !colaborador.telefono || !colaborador.cargo || !colaborador.telefono) {
            setAlerta({
                mensaje: 'Todos los campos son obligatorios.',
                color: 'danger',
            });

        // Ocultar  alerta
            setTimeout (() => {
                setAlerta(null);
            }, 3000);

        return;
        }

        //Enviar el objeto colaborador al componete padre
        onMostrarError(colaborador);

        // Realizar lógica de envío del formulario o guardar el colaborador

        // Limpiar los campos del formulario
        setColaborador({
            nombre: '',
            correo:'',
            edad: '',
            cargo: '',
            telefono: '',
        })

        // Mostrar mensaje de éxito
        setAlerta({
            mensaje: 'Colaborador agregado exitosamente.',
            color: 'success',
        });

        // Ocultar  mensaje
        setTimeout (() => {
            setAlerta(null);
        }, 3000);
    };

    return (
        <div className="mb-3">
            <h2>Agregar colaborador</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label"></label>
                    <input
                        type="text"
                        id="nombre"
                        className="form-control"
                        value={colaborador.nombre}
                        onChange={handleChange}
                        name="nombre"
                        placeholder="Nombre"
                    />
                </div>
                <div className="mb-2">
                    <label className="form-label"></label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={colaborador.correo}
                        onChange={handleChange}
                        name="correo"
                        placeholder="Correo"
                    />
                </div>
                <div className="mb-2">
                    <label className="form-label"></label>
                    <input
                        type='number'
                        id='Edad'
                        className='form-control'
                        value={colaborador.edad}
                        onChange={handleChange}
                        name='edad'
                        placeholder='Edad'
                    />
                </div>
                <div className="mb-2">
                    <label className="form-label"></label>
                    <input
                        type="text"
                        id="cargo"
                        className="form-control"
                        value={colaborador.cargo}
                        onChange={handleChange}
                        name="cargo"
                        placeholder="Cargo"
                    />
                </div>
                <div className='mb-2'>
                    <label className='form-label'></label>
                    <input
                        type="tel"
                        id="telefono"
                        className="form-control"
                        value={colaborador.telefono}
                        onChange={handleChange}
                        name="telefono"
                        placeholder="Teléfono"
                    />
                </div>
                <button className="btn btn-primary btn-md" type="submit">
                    Agregar Colaborador
                </button>
                {alerta && <Alert mensaje={alerta.mensaje} color={alerta.color} />}
            </form>
        </div>
    );
};

export default Formulario;