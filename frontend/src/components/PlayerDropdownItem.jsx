import {useState} from 'react'
import {toast} from 'react-toastify'
import { useDispatch } from 'react-redux'
import { deletePlayer } from '../features/players/playerSlice'
import {useNavigate} from 'react-router-dom'

function PlayerDropdownItem({player}) {

    return (
        <div>
            {player.fullName}
        </div>
    )
}

export default PlayerDropdownItem