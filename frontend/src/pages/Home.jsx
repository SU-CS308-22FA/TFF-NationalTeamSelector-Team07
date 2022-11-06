import React from 'react';
import {Link} from 'react-router-dom'
import {FaQuestionCircle, FaTicketAlt} from 'react-icons/fa'

function Home() {
    return (
        <>
            <section className="heading">
                <h1>What do you need help with?
                    <p>Please choose from an option below</p>
                </h1>
            </section>

            <Link to='/new-ticket' className='btn btn-reverse 
            btn-block'> 
                <FaQuestionCircle /> Do you have any questions?
            </Link>
            <Link to='/profile' className='btn
            btn-block'> 
                <FaTicketAlt /> View My Profile
            </Link>
        </>
    );
}

export default Home;