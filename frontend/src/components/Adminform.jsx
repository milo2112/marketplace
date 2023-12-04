import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Adminform() {
  return (
    <Form style={{ paddingTop: '100px', paddingLeft: '850px' }} className='justify-content-center'>
      <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
        <Form.Label className='text-warning'>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su Nombre" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>      
      
      <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
        <Form.Label className='text-warning'>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
        <Form.Label className='text-warning'>Password</Form.Label>
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

export default Adminform