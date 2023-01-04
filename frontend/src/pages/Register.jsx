import React from 'react';
import {useState, useEffect} from 'react'
import{useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {register} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import { MDBCheckbox } from 'mdb-react-ui-kit';
function Register() {

    const [formData, setFromData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        verification: true
    })
    
    const {name, email, password, password2, verification} = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user, isLoading, isError, isSuccess, message} = useSelector(
state => state.auth)

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        //redirect when logged in

        if(isSuccess || user) {
            navigate('/')
        }

       



    }, [isError, isSuccess, user, message, navigate, dispatch])

    const onChange = (e) => {
        setFromData( (prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value,
        }))
    }

    const handleChange = (e) => { 
        setFromData({
            verification: !verification
          });
    
      } 
    const onSubmit = (e) => {
        e.preventDefault()

       

        if(password !== password2){
            toast.error('Passwords do not match')
        }
        else{
            const userData = {
                name,
                email,
                password,
                verification: false
            }

            dispatch(register(userData))
        }
    }

    if(isLoading){
        return <Spinner />
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser/> Register
                </h1>
                <p>Please Create an account</p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text" className='form-control'
                        id='name' value={name} name='name' onChange={onChange} 
                        placeholder='Enter your name' required />
                    </div>
                    <div className="form-group">
                        <input type="email" className='form-control'
                        id='email' value={email} name='email' onChange={onChange} 
                        placeholder='Enter your email' required/>
                    </div>
                    <div className="form-group">
                        <input type="password" className='form-control'
                        id='pssword' value={password} name='password' onChange={onChange} 
                        placeholder='Enter your password' requred/>
                    </div>
                    <div className="form-group">
                        <input type="password" className='form-control'
                        id='pssword2' value={password2} name='password2' onChange={onChange} 
                        placeholder='Confirm password' required/>
                    </div>
                    <div className="d-flex flex-row mb-3">
                    <div className="p-2 text-muted">regular user</div>
                    <div className="p-2">
                    <MDBCheckbox name='disabledCheck' disabled value={verification} id='verification' onChange={handleChange} defaultChecked/>
                        {/* <input type="password" className='form-control'
                        id='pssword' value={password} name='password' onChange={onChange} 
                        placeholder='Enter your password' requred/> */}
                        </div>
                    </div>
                    <div className="form-group">
                        <button type='register' className="btn btn-block">
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Register;