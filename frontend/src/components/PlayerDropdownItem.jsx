import {useState} from 'react'
import {toast} from 'react-toastify'
import { useDispatch } from 'react-redux'
import { deletePlayer } from '../features/players/playerSlice'
import {useNavigate} from 'react-router-dom'

function PlayerDropdownItem({player}) {
    console.log(player)
    const dispatch = useDispatch()
    const [FullName] = useState(player.fullName)
    const [Position] = useState(player.position)
    return (
        <div>
            {player.fullName}
        </div>
    )
}

export default PlayerDropdownItem