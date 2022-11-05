import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class EditUser extends Component {

  constructor(props) {
    super(props)

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserSurname = this.onChangeUserSurname.bind(this);
    this.onChangeUserUsername = this.onChangeUserUsername.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      surname: '',
      username: '',
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5500/record/:id' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          surname: res.data.surname,
          username: res.data.username,
          email: res.data.email,
          password: res.data.password
        });
      })
      .catch((error) => {
        console.log(error);
      })
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
      password: this.state.password
    };

    axios.put('http://localhost:5500/record/:id' + this.props.match.params.id, userObject)
      .then((res) => {
        console.log(res.data)
        console.log('User successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/record')
  }


  render() {
    return (<div className="form-wrapper">
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
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" value={this.state.password} onChange={this.onChangeUserPassword} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update User
        </Button>
      </Form>
    </div>);
  }
}