import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Formulario({ addAlert }) {
  const [inputs, setInputs] = useState({
    nombre: "",
    email: "",
    password: "",
    passwordOne: "",
  });

  function inputsHandler(e) {
    if (e.target.id === "nombre") {
      setInputs({ ...inputs, nombre: e.target.value });
    }

    if (e.target.id === "email") {
      setInputs({ ...inputs, email: e.target.value });
    }

    if (e.target.id === "password") {
      setInputs({ ...inputs, password: e.target.value });
    }
    if (e.target.id === "passwordOne") {
      setInputs({ ...inputs, passwordOne: e.target.value });
    }
  }

  function validacionInputs(e) {
    e.preventDefault();

    const isValidNombre = /^[a-zA-Z0-9]{4,}$/;
    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
    const isValidPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    if (
      inputs.nombre.trim() === "" ||
      inputs.email === "" ||
      inputs.password === "" ||
      inputs.passwordOne === ""
    ) {
      addAlert({
        texto: "Asegúrese de completar todos los campos!",
        tipo: "alert-danger",
        estado: true,
      });
    } else if (!isValidNombre.test(inputs.nombre)) {
      addAlert({
        texto:
          "El nombre no debe contener caracteres especiales y minimo 4 caracteres!",
        tipo: "alert-warning",
        estado: true,
      });
    } else if (!isValidEmail.test(inputs.email)) {
      addAlert({
        texto: "Verifique que el formato de email este correcto!",
        tipo: "alert-warning",
        estado: true,
      });
    } else if (!isValidPassword.test(inputs.password)) {
      addAlert({
        texto:
          "La contraseña debe tener, al menos una letra mayúscula, una letra minúscula y un número y minimo 8 caracteres!",
        tipo: "alert-danger",
        estado: true,
      });
    } else if (inputs.password != inputs.passwordOne) {
      addAlert({
        texto: "Verifique que las contraseñas sean iguales!",
        tipo: "alert-danger",
        estado: true,
      });
    } else {
      addAlert({
        texto: "Registro exitoso!",
        tipo: "alert-success",
        estado: true,
      });
    }
  }

  return (
    <>
      <Form onSubmit={(e) => validacionInputs(e)}>
        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => inputsHandler(e)}
            id="nombre"
            name="Nombre"
            type="text"
            placeholder="Nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => inputsHandler(e)}
            id="email"
            name="Email"
            type="email"
            placeholder="tuemail@ejemplo.com"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => inputsHandler(e)}
            id="password"
            name="password"
            type="password"
            placeholder="Contraseña"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => inputsHandler(e)}
            id="passwordOne"
            name="passwordOne"
            type="password"
            placeholder="Confirma tu contraseña"
          />
        </Form.Group>

        <Button variant="success w-100" type="submit">
          Registrarse
        </Button>
      </Form>
    </>
  );
}

export default Formulario;
