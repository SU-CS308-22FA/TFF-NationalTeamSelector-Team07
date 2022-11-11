import React from 'react';
import {Link} from 'react-router-dom'
import {FaTicketAlt} from 'react-icons/fa'
import {useSelector} from 'react-redux'

function Home() {

    const {user} = useSelector( (state) => state.auth)

    
    return (
        <>
            <section className="heading">
                <h1>TFF National Football Team Selector 
                    <p>Develpment in progress...</p>
                </h1>
            </section>
            <ul>
            {user ? 
            (            
            <Link to='/profile' className='btnbtn-block'> 
                <FaTicketAlt /> View My Profile
            </Link>)
            : 
            (
                <h1> MAIN PAGE WITHOUT LOGIN</h1>
            )
            }           
            </ul>
        </>
    );
}

export default Home;