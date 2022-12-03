import {useState} from 'react'
import {FaUser} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {FaQuestionCircle, FaTicketAlt} from 'react-icons/fa'

function Profile() {
    
    const { user } = useSelector((state) => state.auth)
    const [username] = useState(user.name)

    return (
        <>
            <section className='heading'>
                <h1>
                    <FaUser /> Dear {username}, this is your profile
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