import {Link} from 'react-router-dom'

function TeamItem({team}) {
    return (
        <div className='team'>
            <div>{new Date(team.createdAt).toLocaleString('en-US')}</div>
            <div>{team.player}</div>
            <Link to={`/team/${team._id}`} className='btn btn-reverse btn-sm'> View
             </Link>
        </div>
    )
}

export default TeamItem