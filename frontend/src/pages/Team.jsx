import {useEffect} from 'react'
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import { useParams} from 'react-router-dom'
import {getTeam, reset} from '../features/teams/teamSlice'
import Spinner from '../components/Spinner'


function Team() {
    const {team, isLaoding, isSuccess, isError, message} =
    useSelector((state) => state.teams)

    const params = useParams()
    const dispatch = useDispatch()
    const {teamId} = useParams()
   
    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        dispatch(getTeam(teamId))
    }, [isError, message, teamId])

    if(isLaoding) {
        return <Spinner />
    }

    if(isError) {
        return <h3>Something Went Wrong</h3>
    }

    return <div className='ticket-page'>
        <header className="ticket-header">
            <h2>
                Team ID: {team._id}
            </h2>
            <h3>
                Date Submitted: {new Date(team.createdAt).toLocaleString('en-US')}
            </h3>
            <hr /><div className="ticket-desc">
                <h3>Team Name</h3>
                <p>{team.teamName}</p>
            </div>
        </header>
    </div>
}

export default Team