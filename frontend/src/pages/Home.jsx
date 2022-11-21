import {Link} from 'react-router-dom'
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

                </>
            )
            : 
            (
                <>
                <div>
                    <h1>THIS IS THE TOP 5 PLAYERS OF THE MONTH</h1>
                    <br />
                </div>
                <div className="tickets">
                    <div className="ticket-headings">
                        
                        <div>Name</div>
                        <div>Team</div>
                        <div>Position</div>
                        <div>Rating</div>
                        
                    </div>
                    {players.slice(0,5).map((player) => (
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