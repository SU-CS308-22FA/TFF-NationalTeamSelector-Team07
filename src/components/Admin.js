import './Admin.css'
import {Button, Form} from 'react-bootstrap';

function Admin() {
  return (
    <div className='container'>
      <h4 style={{marginBottom: '30px', textAlign:'center',marginTop:'70px'}}> Admin Login Platform</h4>
      <Form style={{marginTop:"120px"}}className='formLayout'>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Admin;