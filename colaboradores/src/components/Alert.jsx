

const Alert = ({ mensaje, color }) => {

    const getBackgroundColor = () => {
        if (color === 'success') {
            return '#C3E6CB' // Color verde para logrado
        } else if (color === 'danger') {
            return  '#F8D7DA' // Color rojo para error
        } else {
            return '';
        }
    };

    return (
        <div className="alert"
            style={{
                backgroundColor: getBackgroundColor(),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height:'54px',
                width: '240px',
                margin: '3px',
                textAlign: 'center',
                borderRadius: '5px'
            }}
        >
            <p style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                }}
            >
                {mensaje}
            </p>
        </div>
    );
};

export default Alert;