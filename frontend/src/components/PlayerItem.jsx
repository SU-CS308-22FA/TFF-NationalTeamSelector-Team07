import {useState} from 'react'
import {toast} from 'react-toastify'
import { useDispatch } from 'react-redux'
import { deletePlayer } from '../features/players/playerSlice'
import {useNavigate} from 'react-router-dom'

function PlayerItem({player, navigation}) {

    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [FullName] = useState(player.fullName)
    const [Team] = useState(player.team)
    const [player_id] = useState(player._id)
    const [Position] = useState(player.position)
    const [Rating] = useState(player.raiting)

    const playerData = {
        fullName: FullName,
        _id: player_id,
        team: Team,
        position: Position,
        raiting: Rating
    }

    const handleDelete = (e) => {
        e.preventDefault()
        toast.error('Account deleted')
        console.log('item: ' + player_id)
        dispatch(deletePlayer(player_id))
        navigate('/players')
    }
    const handleEdit = (e) => {
        e.preventDefault()
        navigate('/editPlayer', {state:{playerId: player_id,playerName: FullName, playerTeam: Team, playerRating: Rating, playerPosition: Position}});
    }


    return (
        <div className="tickets">
            <div className="ticket-headings">
                <div className="left-panel box">
                    {player.fullName}
                </div>
                <div className="middle-panel box">
                    {player.team}
                </div>
                <div className="right-panel box">
                    {player.position}
                </div>
                <div className="right-panel box">
                    {player.raiting}
                </div>
                <form onSubmit={handleEdit}  >
                    <button className="btn btn-reverse btn-sm">Edit</button>
                </form>
                <form onSubmit={handleDelete}  >
                    <button className="btn btn-reverse btn-sm">Delete</button>
                </form>
                
            </div>
        </div>
    )
}

export default PlayerItem