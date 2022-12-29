
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'



function MainPagePlayerItem({player}) {
    
    const [FullName] = useState(player.fullName)
    const [Team] = useState(player.team)
    const [player_id] = useState(player._id)
    const [Position] = useState(player.position)
    const [Rating] = useState(player.raiting)
    const [DateOfBirth] = useState(player.DateOfBirth)
    const [PreferedFoot] = useState(player.PreferedFoot)
    const [Age] = useState(player.Age)
    const [PlaceOfBirth] = useState(player.PlaceOfBirth)

    const navigate = useNavigate()

    const playerData = {
        fullName: FullName,
        _id: player_id,
        team: Team,
        position: Position,
        raiting: Rating,
        dob: DateOfBirth,
        foot: PreferedFoot,
        age: Age,
        pob: PlaceOfBirth
    }

    
  
    const handleViewPlayerInfo = (e) => {
        e.preventDefault()
        //console.log(player_id)
        console.log("24 line: " + DateOfBirth)
        navigate('/player-profile', {state: {personel: player_id, name: FullName, 
            team: Team, pos: Position, Rating: Rating, dob: DateOfBirth, 
            foot: PreferedFoot, age: Age, pob: PlaceOfBirth} })
        //window.location.reload()
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
                <form onSubmit={handleViewPlayerInfo}>
               <button className='btn btn-danger'>
                    view player
               </button>
            </form>
            </div>
        </div>
    )
}

export default MainPagePlayerItem