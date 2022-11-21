import {Link, useNavigate} from 'react-router-dom'
import { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MainPagePlayerItem from '../components/MainPagePlayerItem'
import {getPlayersHome} from '../features/players/playerSlice'
import Spinner from '../components/Spinner'

function Home() {

    const {user} = useSelector( (state) => state.auth)
    const dispatch = useDispatch()

    const {players, isLoading, isSuccess} = useSelector((state) => state.players)

    useEffect(() => {
        return () => {
            dispatch(getPlayersHome())
        }
    }, [dispatch, isSuccess])

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
                <h1>POST TEMPLATES(IN PROGRESS...)</h1>
                </>
            
            )
            : 
            (
                <div className="tickets">
                    <div className="ticket-headings">
                        
                        <div>Name</div>
                        <div>Team</div>
                        <div>Position</div>
                        <div>Rating</div>
                        
                    </div>
                    {players.slice(0,4).map((player) => (
                        <MainPagePlayerItem key={player._id} player={player}/>
                    ))}
                </div>
            )
            }             
        </div>
    )
}

export default Home