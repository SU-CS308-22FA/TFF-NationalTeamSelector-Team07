import {Link} from 'react-router-dom'

function PlayerItem({player}) {
    return (
        <div className='player'>
            <div>{new Date(player.createdAt).toLocaleString('en-US')}</div>
            <div>{player.fullName}</div>
            <Link to={`/player/${player._id}`} className='btn btn-reverse btn-sm'> View
             </Link>
        </div>
    )
}

export default PlayerItem