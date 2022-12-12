import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {toast} from 'react-toastify'
import { deleteUser, logout} from '../features/auth/authSlice'
import { useDispatch,useSelector } from 'react-redux'
import {update} from '../features/auth/authSlice'

function UserItem({user}) {

    
    const dispatch = useDispatch()
    // const {user} = useSelector( (state) => state.auth)
    console.log("userItem"  + JSON.stringify(user))
    const [userID] = useState(user._id)
    const [username] = useState(user.name)
    const [email] = useState(user.email)
    const [verif, setVerif] = useState(user.verification)
    const [isAdmin] = useState(user.isAdmin)
    
    const handleDelete = (e) => {
        
        e.preventDefault()
        toast.error('Account deleted')
        dispatch(deleteUser(userID))
        dispatch(logout())     
        
        window.location.reload()
    }
    
    
    const handleVerif = (e) => {
        const userData = {
            name: username,
            email: email,
            isAdmin: isAdmin,
            verification: !verif
        }
        e.preventDefault()
        toast.info('User verified')
        dispatch(update(userData))
        window.location.reload()
    }
    
    return (
        <div className="tickets">
        <div className="ticket-headings">
            {/* <div className="left-panel box">
                {user._id}
            </div> */}
            <div className="left-panel box">
                {user.name}
            </div>
            <div className="middle-panel box">
                {user.email}
            </div>
            <div className="right-panel box">
                {user.isAdmin.toString()}
            </div>
            <div className="right-panel box">
                {user.verification.toString()}
            </div>
            
            {/* <form onClick={(e) => handleVerif(verif => !verif)}  >
                <button className="btn btn-reverse btn-sm">Verify</button>
            </form> */}
            <div></div>
            <form onClick={handleDelete}  >
                <button className="btn btn-reverse btn-sm">Delete</button>
            </form>
            
        </div>
    </div>
        
    )
}

export default UserItem