import "../assets/css/style.css";

const Alert = ({ alerta }) => {
  const { texto, tipo, estado } = alerta;

  return estado && <div className={`alert ${tipo} mt-1 fade-in`}>{texto}</div>;
};

export default Alert;
