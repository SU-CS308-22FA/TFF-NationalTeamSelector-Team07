import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getPlayersHome} from '../features/players/playerSlice'
import Spinner from '../components/Spinner'
import MainPagePlayerItem from '../components/MainPagePlayerItem'


function ViewAllPlayers() {
    const {players, isLoading, isSuccess} = useSelector((state) => state.players)


    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(getPlayersHome())
        }
    }, [dispatch, isSuccess])

    const strAscending = [...players].sort((a, b) =>
    a.raiting > b.raiting ? 1 : -1,
    ).reverse();

    const handleFilterTopDown = (e) => {
        e.preventDefault()


      
    }
    

    if(isLoading) {
        return <Spinner />
    }

    return (
        <>
            <h1>PLAYERS</h1>
            <div className="tickets">
                <div className="ticket-headings">
                    <div>Name</div>
                    <div>Team</div>
                    <div>Position</div>
                    <div>Rating</div>
                </div>
                
                {/* {players.map((player) => (
                    <MainPagePlayerItem key={player._id} player={player}/>
                ))} */}
                {strAscending.map((player) => (
                    <MainPagePlayerItem key={player._id} player={player}/>
                ))}
            </div>
        </>
    )
}

export default ViewAllPlayers