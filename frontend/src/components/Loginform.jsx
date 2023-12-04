import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'

function Loginform() {


  return (
    <Form style={{ paddingTop: '50px', paddingLeft: '850px' }} className='justify-content-center'>
      <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
        <Form.Label className='text-warning' style={{ fontFamily: 'Barrio', fontSize: '14px' }}>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 w-25" controlId="formBasicPassword" style={{ paddingBottom: '50px' }}>
        <Form.Label className='text-warning' style={{ fontFamily: 'Barrio', fontSize: '14px' }}>Password</Form.Label>
        <Form.Control type="password" placeholder="Ingrese su password" />
      </Form.Group>


      <Link style={{ color: '#ffa500', paddingLeft: '20px' }} to='/registerview/'>
        <Form.Text className="text-warning" style={{ fontFamily: 'Barrio', fontSize: '40px' }}>
            Registrarse
        </Form.Text>
      </Link>

      <Form.Group style={{ paddingTop: '30px', paddingLeft: '100px' }}>
        <Button variant="warning" type="submit" style={{ fontFamily: 'Barrio', fontSize: '14px' }}>
          Login
        </Button>
      </Form.Group>
    </Form>
  );
}

export default Loginform