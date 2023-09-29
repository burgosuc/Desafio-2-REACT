import { Button } from 'react-bootstrap'

const SocialButton = ({ button }) => {
  return (
    <Button variant='outline-dark rounded-circle p-3 m-3'>
      <i className={`fa-brands ${button} fa-xl`} />
    </Button>
  )
}

export default SocialButton
