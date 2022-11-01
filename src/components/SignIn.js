import './SignIn.css'
import {Button, Form} from 'react-bootstrap';
import React, { useState } from "react";
import { useNavigate } from "react-router";

function SignIn() {

  const [form, setForm] = useState({
    email:"",
    password:""
  });
  
  
  const navigate = useNavigate();

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

   // This function will handle the submission.
 async function onSubmit(e) {
  e.preventDefault();

  await fetch("http://localhost:5500/record/:user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(response => console.log(response))
  .catch(error => {
    window.alert(error);
    return;
  });

  // setForm({email: "", password:"" });
  navigate("/UserSettings");
 }

  return (
    <div className='container'>
      <h4 className='textLayout' style={{marginTop:'100px'}}>User Sign In Platform</h4>
      <Form className='formLayout'>
      <form style={{marginBottom:"20px"}}>
         <input
           type="text"
           className="form-control"
           id="email"
           value={form.email}
           placeholder="Email"
           onChange={(e) => updateForm({ email: e.target.value })}
         />
      </form>
      <form style={{marginBottom:"30px"}}>
         <input
           type="password"
           className="form-control"
           id="password"
           value={form.password}
           placeholder="Password"
           onChange={(e) => updateForm({ password: e.target.value })}
         />
      </form>
      <Button onClick={onSubmit} variant="primary" type="submit">Submit</Button>
    </Form>
    </div>
  );
}

export default SignIn;