import React from 'react';
import {Link} from 'react-router-dom'
import {FaQuestionCircle, FaTicketAlt} from 'react-icons/fa'

function Home() {
    return (
        <>
            <section className="heading">
                <h1>TFF National Football Team Selector 
                    <p>Develpment in progress...</p>
                </h1>
            </section>
            <Link to='/profile' className='btn
            btn-block'> 
                <FaTicketAlt /> View My Profile
            </Link>
        </>
    );
}

export default Home;