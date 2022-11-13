import {useState} from 'react'
import {FaUser} from 'react-icons/fa'
import {toast} from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import {FaQuestionCircle, FaTicketAlt} from 'react-icons/fa'

function Profile() {
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
                    <FaUser /> Dear {user.name}, this is your profile
                </h1>
                
            </section>

            <div>
            <section className="heading">
                <h1>What do you need help with?</h1>
                <p>Please chose from an option below</p>
            </section>
            <Link to='/new-team' className='btn btn-reverse btn-block'>
                <FaQuestionCircle /> Create New Team
            </Link>

            <Link to='/teams' className='btn btn-block'>
                <FaTicketAlt /> View My Teams
            </Link>
            <Link to='/profilesettings' className='btn btn-block'>
                <FaTicketAlt /> Profile Settings
            </Link>
        </div>
        </>
    )
}

export default Profile