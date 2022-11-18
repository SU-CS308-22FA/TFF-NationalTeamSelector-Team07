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
    }, [dispatch, isSuccess, email])

    

    if(isLoading) {
        return <Spinner />
    }

    return (

       

        <>
            <h1>TEAMS</h1>
            <div class="container text-center">
                <div class="row">
                    <div className="col">
                       
                        <div className='col'>Team Name</div>
                        <div className='col'>Player1 - Goalkeeper</div>
                        <div className='col'>Player2 - Defender</div>
                        <div className='row'>Player3 - Defender</div>
                        <div className='row'>Player4 - Defender</div>
                        <div className='row'>Player5 - Defender</div>
                        <div className='row'>Player6 - Midfielder</div>
                        <div className='row'>Player7 - Midfielder</div>
                        <div className='row'>Player8 - Midfielder</div>
                        <div className='row'>Player9 - Midfielder</div>
                        <div className='row'>Player10 - Forward</div>
                        <div className='row'>Player11 - Forward</div>       
                    </div>  
                </div>
            </div>
            <div>
                {teams.map((team) => (
                    <TeamItem key={team._id} team={team}/>))}
            </div>
               
                
        </>
    )
}

export default Teams