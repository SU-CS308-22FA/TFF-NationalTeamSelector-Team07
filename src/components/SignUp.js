import './SignUp.css'
import {Form, InputGroup, Button} from 'react-bootstrap';

function SignUp() {
  return (
    <div className='container'>
      <h3 className='textLayout' style={{marginTop:"80px"}}>Sign Up</h3>
      <>
      <Form.Label style={{marginTop:"80px"}} htmlFor="basic-url">Personal Information</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Please enter your name"
          aria-label="name"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Please enter your surname"
          aria-label="surname"
          aria-describedby="basic-addon2"
        />
      </InputGroup>

      <br/>

      <Form.Label htmlFor="basic-url">Account Information</Form.Label>
      <InputGroup className="mb-3">
      <Form.Control
          placeholder="Please enter your e-mail address"
          aria-label="email"
          aria-describedby="basic-addon2"
        />
      </InputGroup>

      <InputGroup className="mb-3">
      <Form.Control
          placeholder="Please enter your username"
          aria-label="username"
          aria-describedby="basic-addon2"
        />
      </InputGroup>

      <InputGroup className="mb-3">
      <Form.Control
          placeholder="Please enter your password"
          aria-label="password"
          aria-describedby="basic-addon2"
        />
      </InputGroup>

    </>

    <Button variant="primary">Submit</Button>{' '}
    </div>
  );
}

export default SignUp;