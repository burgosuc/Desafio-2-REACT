import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Registro from "./components/Registro";
import Alert from "./components/Alert.jsx";
import "./App.css";
import { Card } from "react-bootstrap";
import FormGoogle from "./components/FormGoogle";
function App() {
  const [alert, setAlert] = useState({
    texto: "",
    tipo: "",
    estado: false,
  });

  const addAlert = (newAlert) => {
    setAlert(newAlert);
  };

  return (
    <>
      <Registro onAlert={addAlert} />
      <Alert alerta={alert} />
      <FormGoogle />
    </>
  );
}

export default App;
