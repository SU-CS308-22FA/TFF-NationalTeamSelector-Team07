import './SignIn.css'
import {Button, Form} from 'react-bootstrap';

function SignIn() {
  return (
    <div className='container'>
      <h4 className='textLayout' style={{marginTop:'100px'}}>User Sign In Platform</h4>
      <Form className='formLayout' style={{marginTop:'50px'}}>
      
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

export default SignIn;