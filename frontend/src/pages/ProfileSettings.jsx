import {useState} from 'react'
import {FaUser} from 'react-icons/fa'
import {toast} from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import {update} from '../features/auth/authSlice'
import { deleteUser } from '../features/auth/authSlice'

function ProfileSettings() {
    /*const [formData, setFormData] = useState({
        name: '',
        email: ''
    })*/

    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    
    
    const [firstName, setName] = useState(user.name);
    const [email, setmail] = useState(user.email);
    const [user_id] = useState(user._id)
    const [username] = useState(user.name)
    const [mail] = useState(user.email)
    

    const handleEdit = (e) => {
        e.preventDefault()
        toast.info('Profile edited')
        dispatch(update({user_id}))
    }

    const handleDelete = (e) => {
        e.preventDefault()
        toast.error('Account deleted')
        console.log('profileSettng: ' + user_id)
        dispatch(deleteUser(user_id))
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
                <form onSubmit={handleEdit}>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control" 
                        id='name'
                        name='name'
                        value={firstName}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={username}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="email"
                        className="form-control" 
                        id='email'
                        name='email'
                        value={email}
                        onChange={(e) => setmail(e.target.value)}
                        placeholder={mail}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">Edit</button>
                    </div>
                </form>
                <form onSubmit={handleDelete}  >
                    <button className="btn btn-block">Delete my account</button>
                </form>
            </section>
        </>
    )
}

export default ProfileSettings