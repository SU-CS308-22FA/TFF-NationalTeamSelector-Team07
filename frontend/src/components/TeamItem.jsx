import {Link} from 'react-router-dom'

function TeamItem({team}) {
    return (
        <div class="row">
        <div className='col'>
        
            <div className='row'>{team.team}</div>
            <div className='row'>{team.player1}</div>
            <div className='row'>{team.player2}</div>
            <div className='row'>{team.player3}</div>
            <div className='row'>{team.player4}</div>
            <div className='row'>{team.player5}</div>
            <div className='row'>{team.player6}</div>
            <div className='row'>{team.player7}</div>
            <div className='row'>{team.player8}</div>
            <div className='row'>{team.player9}</div>
            <div className='row'>{team.player10}</div>
            <div className='row'>{team.player11}</div>
            
        </div>
        </div>
    )
}

export default TeamItem