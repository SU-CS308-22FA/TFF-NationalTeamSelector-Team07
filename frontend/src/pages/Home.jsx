import {Link} from 'react-router-dom'
import {FaQuestionCircle, FaTicketAlt} from 'react-icons/fa'
import { useSelector } from 'react-redux'

function Home() {

    const {user} = useSelector( (state) => state.auth)
    return (
        <div>
            <section className="heading">
                <h1>What do you need help with?</h1>
                <p>Please chose from an option below</p>
            </section>
            <ul>
            {user ? 
            (            
            <Link to='/profile' className='btn-block'> 
                View My Profile
            </Link>)
            : 
            (
                <h1> MAIN PAGE WITHOUT LOGIN</h1>
            )
            }           
            </ul>
            
        </div>
    )
}

export default Home