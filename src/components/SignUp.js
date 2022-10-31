import './SignUp.css'
import {Form, Button} from 'react-bootstrap';
import React, { useState } from "react";
import { useNavigate } from "react-router";

function SignUp() {

 const [form, setForm] = useState({
   name: "",
   surname: "",
   email:"",
   username:"",
   password:""
 });
 
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5500/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", surname: "", email: "", username:"", password:"" });
   navigate("/UserSettings");
   console.log(form.name,form.email,form.password,form.username, form.surname)
  }

  return (
    <div className='container'>
      <h3 className='textLayout' style={{marginTop:"80px"}}>Sign Up</h3>
      <Form.Label style={{marginTop:"60px"}}>Personal Information</Form.Label>
      <form style={{marginBottom:"10px"}}>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           placeholder="Please enter your name"
           onChange={(e) => updateForm({ name: e.target.value })}
         />
      </form>
      <form style={{marginBottom:"30px"}}>
         <input
           type="text"
           className="form-control"
           id="surname"
           value={form.surname}
           placeholder="Please enter your surname"
           onChange={(e) => updateForm({ surname: e.target.value })}
         />
      </form>

      <Form.Label>Account Information</Form.Label>
      <form style={{marginBottom:"10px"}}>
         <input
           type="text"
           className="form-control"
           id="email"
           value={form.email}
           placeholder="Please enter your email"
           onChange={(e) => updateForm({ email: e.target.value })}
         />
      </form>
      <form style={{marginBottom:"10px"}}>
         <input
           type="text"
           className="form-control"
           id="username"
           value={form.username}
           placeholder="Please enter your username"
           onChange={(e) => updateForm({ username: e.target.value })}
         />
      </form>
      <form style={{marginBottom:"30px"}}>
         <input
           type="text"
           className="form-control"
           id="password"
           value={form.password}
           placeholder="Please enter your password"
           onChange={(e) => updateForm({ password: e.target.value })}
         />
      </form>
      <Button onClick={onSubmit} variant="primary">Submit</Button>
    </div>
  );
}

export default SignUp;