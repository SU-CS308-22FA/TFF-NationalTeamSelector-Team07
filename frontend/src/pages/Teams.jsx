import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getTeams, reset} from '../features/teams/teamSlice'
import Spinner from '../components/Spinner'
import TeamItem from '../components/TeamItem'

function Teams() {
    const {teams, isLoading, isSuccess} = useSelector((state) => state.teams)

    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            if(isSuccess) {
                dispatch(reset())
            }
        }
    }, [dispatch, isSuccess])

    useEffect(() => {
        dispatch(getTeams())
    }, [dispatch])

    if(isLoading) {
        return <Spinner />
    }

    return (
        <>
            <h1>TEAMS</h1>
            <div className="tickets">
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