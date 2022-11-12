import {Link} from 'react-router-dom'
import {FaQuestionCircle, FaTicketAlt} from 'react-icons/fa'
function Home() {
    return (
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
        </div>
    )
}

export default Home