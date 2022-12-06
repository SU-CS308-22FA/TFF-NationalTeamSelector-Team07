import {Link, useNavigate} from 'react-router-dom'
import { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MainPagePlayerItem from '../components/MainPagePlayerItem'
import {getPlayersHome} from '../features/players/playerSlice'
import Spinner from '../components/Spinner'
import {getTeams, reset} from '../features/teams/teamSlice'
import TeamItemHomePage from '../components/TeamItemHomePage'

function Home() {

    const {user} = useSelector( (state) => state.auth)
    const dispatch = useDispatch()
    const {teams} = useSelector((state) => state.teams)

    const {players, isLoading, isSuccess} = useSelector((state) => state.players)

    useEffect(() => {
        return () => {
            dispatch(getPlayersHome())
            dispatch(getTeams())
            
        }
    }, [dispatch, isSuccess])

    // 👇️ sort by String property ASCENDING (A - Z)
    const strAscending = [...players].sort((a, b) =>
    a.raiting > b.raiting ? 1 : -1,
    ).reverse();
    

    if(isLoading) {
        return <Spinner />
    }

    return (
        <div>
            {user ? 
            (            
                <>
                <div class="btn-group">
                    <Link to='/viewAllPlayers'>
                        <button >View all players</button>
                    </Link>
                    <Link to='/new-team'>
                        <button >Create your team</button>
                    </Link>
                    <Link to='/teams'>
                        <button >View your team</button>
                    </Link>
                    <Link to=''>
                        <button >Top 5 teams</button>
                    </Link>
                </div>
                <hr class="solid" style={{marginTop:"50px"}}></hr>
                <br/>
                <h1>POST TEMPLATES WILL BE ADDED(IN PROGRESS...)</h1>
                <div>
                {teams.map((team) => (
                    <TeamItemHomePage key={team._id} team={team}/>))}
                </div>
                </>
            
            )
            : 
            (
                <>
                <div style={{marginBottom:"20px"}}>
                    <h1>TOP 5 PLAYERS OF THE MONTH</h1>
                </div>
                <div className="tickets">
                    <div className="ticket-headings">
                        
                        <div>Name</div>
                        <div>Team</div>
                        <div>Position</div>
                        <div>Rating</div>
                        
                    </div>
                    {strAscending.slice(0,5).map((player) => (
                        <MainPagePlayerItem key={player._id} player={player}/>
                    ))}
                </div>
                </>
            )
            }             
        </div>
    )
}

export default Home