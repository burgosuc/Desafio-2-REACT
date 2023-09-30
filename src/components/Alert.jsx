const Alert = ({ alerta }) => {
  const { texto, tipo, estado } = alerta

  return (
    estado && <div className={`alert ${tipo} mt-1`}>{texto}</div>
  )
}

export default Alert
