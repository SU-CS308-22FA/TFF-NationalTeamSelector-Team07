import {Link} from 'react-router-dom'
import {useState} from 'react'

import {toast} from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { deletePlayer } from '../features/players/playerSlice'

function PlayerItem() {

    const {player} = useSelector((state) => state.players)
    const dispatch = useDispatch()

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
                
                <div className="right-panel box">
                    <Link to={`/player/${player._id}`} className='btn btn-reverse btn-sm'> Edit
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PlayerItem