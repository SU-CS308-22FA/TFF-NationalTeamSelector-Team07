import {useState} from 'react'
import {FaUser} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {FaQuestionCircle, FaTicketAlt} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function AdminProfilePage() {
    
    const { user } = useSelector((state) => state.auth)
    const [username] = useState(user.name)
    const navigate = useNavigate()

    const handleSubmitPlayers = (e) => {
        e.preventDefault()
        navigate('/players')
        //window.location.reload()
    }
    const handleSubmitCreatePlayer = (e) => {
        e.preventDefault()
        navigate('/new-player')
        //window.location.reload()
    }
    const handleSubmitProfile = (e) => {
        e.preventDefault()
        navigate('/profileSettings')
        //window.location.reload()
    }
    const handleSubmitUserSettings = (e) => {
        e.preventDefault()
        navigate('/users')
        //window.location.reload()
    }

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
            <form onSubmit={handleSubmitCreatePlayer}className='btn btn-block'>
               <button>
                    Create player
               </button>
            </form>

            <form onSubmit={handleSubmitPlayers} className='btn btn-block' >
                <button>
                    View all players
                </button>
            </form>
            <form onSubmit={handleSubmitProfile}className='btn btn-block'>
               <button>
                    Profile
               </button>
            </form>
            <form onSubmit={handleSubmitUserSettings}className='btn btn-block'>
               <button>
                    User Settings
               </button>
            </form>
        </div>
        </>
    )
}

export default AdminProfilePage