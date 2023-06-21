
const Alert = ({ mensaje, color }) => {

    return <div className={`alert alert-${color}`}>{mensaje}</div>;
};



export default Alert;