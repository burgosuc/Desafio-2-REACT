import SocialButton from './SocialButtom'
import Formulario from './Formulario'

const Registro = ({ onAlert }) => {
  const socialButtons = ['fa-facebook', 'fa-github', 'fa-linkedin']

  return (
    <>
      <h1>Crea una cuenta</h1>
      {socialButtons.map((sb) => <SocialButton key={sb} button={sb} />)}
      <p className='textOne'>O usa tu email para registrarte.</p>
      <Formulario addAlert={onAlert} />
    </>
  )
}

export default Registro
