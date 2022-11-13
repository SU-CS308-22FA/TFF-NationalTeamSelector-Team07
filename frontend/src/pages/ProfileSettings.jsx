import {useState} from 'react'
import {FaUser} from 'react-icons/fa'
import {toast} from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'

function ProfileSettings() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    const { user } = useSelector((state) => state.auth)

    const {name, email} = formData
    const [username] = useState(user.name)
    const [useremail] = useState(user.email)

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        toast.error('Profile edited')
    }

    const onSubmit2 = (e) => {
        e.preventDefault()
        toast.error('Account deleted')
    }

    return (
        <>
            <section className='heading'>
                <h1>
                    <FaUser /> Profile
                </h1>
                <p>Here is your Profile</p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control" 
                        id='name'
                        name='name'
                        value={username}
                        onChange={onChange}
                        placeholder='esra nur'
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="email"
                        className="form-control" 
                        id='email'
                        name='email'
                        value={useremail}
                        onChange={onChange}
                        placeholder='esra@gmail.com'
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">Edit</button>
                    </div>
                </form>
                <button onSubmit={onSubmit2} className="btn btn-block">Delete my account</button>
                
            </section>
        </>
    )
}

export default ProfileSettings