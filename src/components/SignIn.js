import styles from './SignIn.css'
import {Button} from 'react-bootstrap';
import React, { useState } from "react";
import axios from "axios";

function SignIn() {

  	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/UserSettings";
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
	<div style={styles.container}>
		<form onSubmit={handleSubmit}>
			<h3 style={{marginLeft:"920px"}}>Sign In</h3>
			<input 
				type="email"
				placeholder="Email"
				name="email"
				onChange={handleChange}
				value={data.email}
				required
				className="form-control"
			/>
			<br/>
			<input style={{marginBottom:"20px"}}
				type="password"
				placeholder="Password"
				name="password"
				onChange={handleChange}
				value={data.password}
				required
				className="form-control"
			/>
			{error && <div>{error}</div>}
			<Button type="submit">Sign In</Button>
		</form>
	</div>

  );
}

export default SignIn;