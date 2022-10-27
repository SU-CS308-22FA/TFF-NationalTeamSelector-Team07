import './SignUp.css'
import {Form, InputGroup, Button} from 'react-bootstrap';
import {useState} from 'react'
import Axios from 'axios';

function SignUp() {

  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");

  // const [userList, setUserList] = useState([]); //here adding feature direct adding to list of map. 4-5 minutes
  // const [newName, setNewName] = useState("");

  // useEffect(() => { //burası get ile db'den alınacaklar için kullanılıyor. useEffect !!
  //   Axios.get("http://localhost:3001/api/get").then((response) => {
  //     console.log(response.data);
  //     setUserList(response.data)
  //   })
  // }, []);

  // const submitUser = () => { //db'ye insert etmek için kullanılıyor
  //   Axios.post("http://localhost:5432/api/insert", {
  //     name: name, 
  //     surname: surname,
  //     email: email,
  //     password: password,
  //     username: username
  //   }).then(() => {
  //     alert("succesfull insert");
  //   });
  // };

  // const deleteUser = (user) => {
  //   Axios.delete('http://localhost:3001/api/delete/${user}' )
  // }

  // const updateUser = (username) => {
  //   Axios.put("http://localhost:3001/api/update", {
  //     name: name,  //BURALAR KARIŞTI
  //     surname: surname,
  //     email: email,
  //     password: password,
  //     username: username
  //   });
  //   setNewName("")
  // }

  // {userList.map((val) => {
  //   return (
  //     <div className='card'>
  //       <h1>{val.email}</h1>
  //       <p>{val.password}</p>

  //       <button onClick={() => {deleteUser(val.username);
  //       }}
  //       >
  //         Delete
  //         </button>
  //         <input type="text" id="updateInput" onChange={(e) => {
  //           setNewName(e.target.value)
  //         }}/>
  //       <button onClick={ () => [updateUser(val.username)]}
  //       >Update</button>

  //     </div>
  //   );
  // }
  // )}
  
  return (
    <div className='container'>
      <h3 className='textLayout' style={{marginTop:"80px"}}>Sign Up</h3>
      <>
      <Form.Label style={{marginTop:"80px"}}>Personal Information</Form.Label>
      <InputGroup className="mb-3" onChange={(e) => {
        setName(e.target.value)
      }}>
        <Form.Control
          placeholder="Please enter your name"
          aria-label="name"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3" onChange={(e) => {
        setSurname(e.target.value)
      }}>
        <Form.Control
          placeholder="Please enter your surname"
          aria-label="surname"
          aria-describedby="basic-addon2"
        />
      </InputGroup>

      <br/>

      <Form.Label>Account Information</Form.Label>
      <InputGroup className="mb-3" onChange={(e) => {
        setEmail(e.target.value)
      }}>
      <Form.Control
          placeholder="Please enter your e-mail address"
          aria-label="email"
          aria-describedby="basic-addon2"
        />
      </InputGroup>

      <InputGroup className="mb-3" onChange={(e) => {
        setUsername(e.target.value)
      }}>
      <Form.Control
          placeholder="Please enter your username"
          aria-label="username"
          aria-describedby="basic-addon2"
        />
      </InputGroup>

      <InputGroup className="mb-3" onChange={(e) => {
        setPassword(e.target.value)
      }}>
      <Form.Control
          placeholder="Please enter your password"
          aria-label="password"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
      <Button variant="primary">Submit</Button>
    </>
    </div>
  );
}

export default SignUp;