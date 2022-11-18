import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function TeamItem({team,user}) {

    const navigate = useNavigate()

    const displayTeam = (e) => {
        e.preventDefault()

        navigate('/displayTeam', {state:{teamId: team._id,teamname: team.teamName, user_id: user._id}});
    }


    return (
        <div className="tickets">
            <div className="ticket-headings">
                <div className="left-panel box">
                    {team._id}
                </div>
                <div className="middle-panel box">
                    {team.teamName}
                </div>
                <div className="right-panel box">
                    {team.createdAt}
                </div>
                <div></div>
                <div></div>
                <form onSubmit={displayTeam}  >
                    <button className="btn btn-reverse btn-sm">View Team</button>
                </form>
                
            </div>
        </div>

        
    )
}

export default TeamItem