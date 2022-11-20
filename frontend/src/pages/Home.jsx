import {Link} from 'react-router-dom'
import { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MainPagePlayerItem from '../components/MainPagePlayerItem'
import {getPlayers} from '../features/players/playerSlice'

function Home() {

    const {players, isSuccess} = useSelector((state) => state.players)


    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(getPlayers())
        }
    }, [dispatch, isSuccess])

    const {user} = useSelector( (state) => state.auth)
    return (
        <div>
            <section className="heading">
                <h1>What do you need help with?</h1>
                <p>Please chose from an option below</p>
            </section>
            <ul>
            {user ? 
            (            
            <Link to='/profile' className='btn-block'> 
                View My Profile
            </Link>)
            : 
            (
                <div className="tickets">
                    <div className="ticket-headings">
                        
                        <div>Name</div>
                        <div>Team</div>
                        <div>Position</div>
                        <div>Rating</div>
                        
                    </div>
                    {players.map((player) => (
                        <MainPagePlayerItem key={player._id} player={player}/>
                    ))}
                </div>
            )
            }           
            </ul>
            
        </div>
    )
}

export default Home