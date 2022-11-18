import { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getTeams, reset} from '../features/teams/teamSlice'
import Spinner from '../components/Spinner'
import TeamItem from '../components/TeamItem'


function Teams() {
    const {teams, isLoading, isSuccess} = useSelector((state) => state.teams)
    const {user} = useSelector((state) => state.auth)

    const [email] = useState(user.email)
    const [user_id] = useState(user._id)


    const dispatch = useDispatch()


    useEffect(() => {
        return () => {
            dispatch(getTeams())
            console.log('teams ' + user_id)
        }
    }, [dispatch, user_id])

    

    if(isLoading) {
        return <Spinner />
    }

    return (

       

        <>
            <h1>TEAMS</h1>
            <div className="tickets">
                <div className="ticket-headings">
                    
                    <div>Team ID</div>
                    <div></div>
                    <div>Team Name</div>
                    <div>Created At</div>
                    <div></div>
                    <div>Action</div>
                    
                </div>
                
                {teams.map((team) => (
                    <TeamItem key={team._id} team={team} user={user}/>))}
            </div>
    
        </>
    )
}

export default Teams