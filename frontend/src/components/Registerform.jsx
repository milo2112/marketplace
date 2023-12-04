import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Registerform() {
  return (
    <Form style={{ paddingTop: '100px', paddingLeft: '850px' }} className='justify-content-center'>
      <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
        <Form.Label className='text-warning' style={{ fontFamily: 'Barrio', fontSize: '14px' }}>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su Nombre" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>      
      
      <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
        <Form.Label className='text-warning' style={{ fontFamily: 'Barrio', fontSize: '14px' }}>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su Apellido" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Label className='text-warning' style={{ fontFamily: 'Barrio', fontSize: '14px' }}>Rol</Form.Label>
      <Form.Select aria-label="select" className="mb-3 w-25">
        <option>Selecciona tu rol</option>
        <option value="1">Admin</option>
        <option value="2">Usuario</option>
      </Form.Select>

      <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
        <Form.Label className='text-warning' style={{ fontFamily: 'Barrio', fontSize: '14px' }}>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
        <Form.Label className='text-warning' style={{ fontFamily: 'Barrio', fontSize: '14px' }}>Password</Form.Label>
        <Form.Control type="password" placeholder="Ingrese su password" />
      </Form.Group>

      <Form.Group style={{ paddingTop: '30px', paddingLeft: '100px' }}>
        <Button variant="warning" type="submit">
          Guardar
        </Button>
      </Form.Group>
    </Form>
  );
}

export default Registerform