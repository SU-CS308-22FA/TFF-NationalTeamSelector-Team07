import './SignUp.css'
import {Form, Button} from 'react-bootstrap';
import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function SignUp() {

  const [data, setData] = useState({
		name: "",
		surname: "",
		email: "",
		password: "",
		username: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/SignIn");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

  return (
    <div className='container'>
      <h3 className='textLayout' style={{marginTop:"80px"}}>Sign Up</h3>
      <Form.Label style={{marginTop:"100px"}}>Personal Information</Form.Label>
      <form style={{marginBottom:"10px"}} onSubmit={handleSubmit}>
         <input style={{marginBottom:"10px"}}
           type="text"
           placeholder="Please enter your name"
           className="form-control"
           name="name"
           value={data.name}
           required
           onChange={handleChange}
         />
         <input style={{marginBottom:"30px"}}
           type="text"
           placeholder="Please enter your surname"
           className="form-control"
           name="surname"
           value={data.surname}
           required
           onChange={handleChange}
         />

      <Form.Label>Account Information</Form.Label>
      <input style={{marginBottom:"10px"}}
           type="email"
           placeholder="Please enter your email"
           className="form-control"
           name="email"
           value={data.email}
           required
           onChange={handleChange}
         />
         <input style={{marginBottom:"10px"}}
           type="text"
           placeholder="Please enter your username"
           className="form-control"
           name="username"
           value={data.username}
           required
           onChange={handleChange}
         />
          <input style={{marginBottom:"30px"}}
           type="password"
           placeholder="Please enter your password"
           className="form-control"
           name="password"
           value={data.password}
           required
           onChange={handleChange}
         />
        {error && <div>{error}</div>}
				<Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUp;