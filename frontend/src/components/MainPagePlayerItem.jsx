
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

function MainPagePlayerItem({player}) {

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
            </div>
        </div>
    )
}

export default MainPagePlayerItem