import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

export default class UserTableRow extends Component {
  constructor(props) {
    super(props)
    this.deleteUser = this.deleteUser.bind(this)
  }

  deleteUser() {
    axios
      .delete(
        'http://localhost:5500/record/delete/' + this.props.obj._id,
      )
      .then((res) => {
        console.log('User successfully deleted!')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.surname}</td>
        <td>{this.props.obj.username}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.pasword}</td>
        <td>
          <Link
            className="edit-link" path={"record/:id"}
            to={'/delete/' + this.props.obj._id}
          >
            Edit
          </Link>
          <Button onClick={this.deleteUser} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    )
  }
}
