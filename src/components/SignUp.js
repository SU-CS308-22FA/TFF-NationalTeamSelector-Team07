// import './SignUp.css'
// import {Form, Button} from 'react-bootstrap';
// import React, { useState } from "react";
// import { useNavigate } from "react-router";

// function SignUp() {

//  const [form, setForm] = useState({
//    name: "",
//    surname: "",
//    email:"",
//    username:"",
//    password:""
//  });
 
//  const navigate = useNavigate();
 
//  // These methods will update the state properties.
//  function updateForm(value) {
//    return setForm((prev) => {
//      return { ...prev, ...value };
//    });
//  }
 
//  // This function will handle the submission.
//  async function onSubmit(e) {
//    e.preventDefault();
 
//    // When a post request is sent to the create url, we'll add a new record to the database.
//    const newPerson = { ...form };
 
//    await fetch("http://localhost:5500/record/add", {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//      },
//      body: JSON.stringify(newPerson),
//    })
//    .catch(error => {
//      window.alert(error);
//      return;
//    });
 
//    setForm({ name: "", surname: "", email: "", username:"", password:"" });
//    navigate("/create");
//    console.log(form.name,form.email,form.password,form.username, form.surname)
//   }

//   return (
//     <div className='container'>
//       <h3 className='textLayout' style={{marginTop:"80px"}}>Sign Up</h3>
//       <Form.Label style={{marginTop:"60px"}}>Personal Information</Form.Label>
//       <form style={{marginBottom:"10px"}}>
//          <input
//            type="text"
//            className="form-control"
//            id="name"
//            required
//            value={form.name}
//            placeholder="Please enter your name"
//            onChange={(e) => updateForm({ name: e.target.value })}
//          />
//       </form>
//       <form style={{marginBottom:"30px"}}>
//          <input
//            type="text"
//            className="form-control"
//            id="surname"
//            required
//            value={form.surname}
//            placeholder="Please enter your surname"
//            onChange={(e) => updateForm({ surname: e.target.value })}
//          />
//       </form>

//       <Form.Label>Account Information</Form.Label>
//       <form style={{marginBottom:"10px"}}>
//          <input
//            type="text"
//            className="form-control"
//            id="email"
//            required
//            value={form.email}
//            placeholder="Please enter your email"
//            onChange={(e) => updateForm({ email: e.target.value })}
//          />
//       </form>
//       <form style={{marginBottom:"10px"}}>
//          <input
//            type="text"
//            className="form-control"
//            id="username"
//            required
//            value={form.username}
//            placeholder="Please enter your username"
//            onChange={(e) => updateForm({ username: e.target.value })}
//          />
//       </form>
//       <form style={{marginBottom:"30px"}}>
//          <input
//            type="password"
//            className="form-control"
//            id="password"
//            required
//            value={form.password}
//            placeholder="Please enter your password"
//            onChange={(e) => updateForm({ password: e.target.value })}
//          />
//       </form>
//       <Button onClick={onSubmit} variant="primary">Submit</Button>
//     </div>
//   );
// }

// export default SignUp;

import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class SignUp extends Component {
    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserSurname = this.onChangeUserSurname.bind(this);
        this.onChangeUserUsername = this.onChangeUserUsername.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

          // Setting up state
        this.state = {
            name: '',
            surname: '',
            username: '',
            email: '',
            password: ''
        }
    }
    onChangeUserName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeUserSurname(e) {
        this.setState({ surname: e.target.value })
    }
    onChangeUserUsername(e) {
        this.setState({ username: e.target.value })
    }
    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangeUserPassword(e) {
        this.setState({ password: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
    
        const userObject = {
          name: this.state.name,
          surname: this.state.surname,
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        };
        axios.post('http://localhost:5500/record/add', userObject)
          .then(res => console.log(res.data));
    
        this.setState({ name: '', surname: '', username: '', email: '', password: '' })
      }

      render() {
        return (
        <div className="form-wrapper">
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={this.state.name} onChange={this.onChangeUserName} />
            </Form.Group>
    
            <Form.Group controlId="Surname">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" value={this.state.surname} onChange={this.onChangeUserSurname} />
            </Form.Group>

            <Form.Group controlId="Username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value={this.state.username} onChange={this.onChangeUserUsername} />
            </Form.Group>

            <Form.Group controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={this.state.email} onChange={this.onChangeUserEmail} />
            </Form.Group>
    
            <Form.Group controlId="Password">
              <Form.Label>Password No</Form.Label>
              <Form.Control type="password" value={this.state.password} onChange={this.onChangeUserPassword} />
            </Form.Group>
    
            <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
              Create User
            </Button>
          </Form>
        </div>
        );
      }
    }