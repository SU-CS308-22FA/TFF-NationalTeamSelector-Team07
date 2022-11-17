import { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getTeams, reset} from '../features/teams/teamSlice'
import Spinner from '../components/Spinner'
import TeamItem from '../components/TeamItem'


function Teams() {
    const {teams, isLoading, isSuccess} = useSelector((state) => state.teams)
    const {user} = useSelector((state) => state.auth)

    const {email} = useState(user.email)
    

    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(getTeams())
            console.log('teams ' + email)
        }
    }, [dispatch, isSuccess])

    

    if(isLoading) {
        return <Spinner />
    }

    return (
        <>
            <h1>TEAMS</h1>
            <div>
                <div className="ticket-headings">
                    <div>Date</div>
                    <div>Player</div>
                    <div>Team Name</div>
                    <div></div>
                </div>
                
                {teams.map((team) => (
                    <TeamItem key={team._id} team={team}/>
                ))}
            </div>
        </>
    )
}

export default Teams