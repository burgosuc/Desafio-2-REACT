import React from "react";
import SocialButton from "./SocialButtom";
import Formulario from "./Formulario";

export default function Registro({ onAlert }) {
  return (
    <>
      <h1>Crea una cuenta</h1>
      <SocialButton button={"fa-facebook"} />
      <SocialButton button={"fa-github"} />
      <SocialButton button={"fa-linkedin"} />
      <p className="textOne">O usa tu email para registrarte.</p>
      <Formulario addAlert={onAlert} />
    </>
  );
}
