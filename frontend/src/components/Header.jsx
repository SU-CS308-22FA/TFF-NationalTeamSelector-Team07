import React from 'react';
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout} from '../features/auth/authSlice'

/**
 * Header component attributes and frontend for user based login.
 * @author @mustafaataonbas
 */

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const {user} = useSelector( (state) => state.auth)
    const onLogout = () => {
        dispatch(logout())
        navigate('/')
    }

    const isAdmin = user?.isAdmin || false
    console.log(isAdmin)

    if(!isAdmin){
    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'> <b>TFF National Team Selector</b></Link>
            </div>
            <ul>
                {user ? 
                (<>
                    <li>
                        <Link to='/profile'>
                            <FaUser /> Profile
                        </Link>
                    </li> 
                    <li>
                    <button className='btn' onClick={onLogout}>
                      <FaSignOutAlt />  {user.name} Logout
                    </button>
                    </li>
                    
                </>) : 
                ( 
                <>
                <li>
                    <Link to='/loginAdmin'>
                        <FaSignInAlt /> Admin Login
                    </Link>
                </li>
                <li>
                    <Link to='/login'>
                        <FaSignInAlt /> User Login
                    </Link>
                </li>
                <li>
                    <Link to='/register'>
                        <FaUser /> Register
                    </Link>
                </li>
                </>
                )
                }

            </ul>
        </header>
    );
    }
    else{
        return(
        <header className='header'>
            <div className='logo'>
                <Link to='/'> <b>TFF National Team Selector</b></Link>
            </div>
            <ul>
                {user ? 
                (<>
                    <li>
                    <button className='btn' onClick={onLogout}>
                      <FaSignOutAlt /> {user.name} Logout
                    </button>
                    </li>
                    
                </>) : 
                ( 
                <>
                <li>
                    <Link to='/loginAdmin'>
                        <FaSignInAlt /> Admin Login
                    </Link>
                </li>
                <li>
                    <Link to='/login'>
                        <FaSignInAlt /> User Login
                    </Link>
                </li>
                <li>
                    <Link to='/register'>
                        <FaUser /> Register
                    </Link>
                </li>
                </>
                )
                }
            </ul>
        </header>
        );  
    }
}

export default Header;
