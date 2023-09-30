import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useState } from 'react'
import Registro from './components/Registro'
import Alert from './components/Alert.jsx'

const App = () => {
  const [alert, setAlert] = useState({ texto: '', tipo: '', estado: false })
  const addAlert = (newAlert) => setAlert(newAlert)

  return (
    <>
      <Registro onAlert={addAlert} />
      <Alert alerta={alert} />
    </>
  )
}

export default App
