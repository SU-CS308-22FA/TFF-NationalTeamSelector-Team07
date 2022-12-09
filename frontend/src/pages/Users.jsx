import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getUsers} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import UserItem from '../components/UserItem'


function Users() {
    const { users } = useSelector((state) => state.auth)


    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(getUsers())
        }
    }, [dispatch])

    
    console.log(users)

    return (
        <>
            <h1>USERS</h1>
            <div className="tickets">
                <div className="ticket-headings">
                    
                    <div>User ID</div>
                    <div>Username</div>
                    <div>Email</div>
                    <div>Is Admin</div>
                    <div>Verification Status</div>
                    <div>Action</div>
                    
                </div>
                
                {users.map((user) => (
                    <UserItem key={user._id.toString()} user={user}/>
                ))}
            </div>
        </>
    )
}

export default Users