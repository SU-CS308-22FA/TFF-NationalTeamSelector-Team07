import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {FaThumbsUp} from 'react-icons/fa'
import {toast} from 'react-toastify'
import { updateLike } from '../features/teams/teamSlice'
import { useDispatch,useSelector } from 'react-redux'
import { format } from 'date-fns'

function TeamItem({team}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector( (state) => state.auth)

    const [teamId] = useState(team._id)
    const [name] = useState(team.teamName)
    const [player1] = useState(team.player1)
    const [player2] = useState(team.player2)
    const [player3] = useState(team.player3)
    const [player4] = useState(team.player4)
    const [player5] = useState(team.player5)
    const [player6] = useState(team.player6)
    const [player7] = useState(team.player7)
    const [player8] = useState(team.player8)
    const [player9] = useState(team.player9)
    const [player10] = useState(team.player10)
    const [player11] = useState(team.player11)
    const [likes] = useState(team.likes)


    const sentData = {
        user_id: user._id,
        team_id: teamId,
        isliked: "no",
    }

    const incrementLike = (e) => {
        e.preventDefault()
        if(team.likes.includes(user._id)) 
        {
            sentData.isliked = "yes"

        }
        else 
        {
            sentData.isliked = "no"
        }
        //console.log(sentData)
        dispatch(updateLike(sentData))
        window.location.reload(false);

    };
    

    const displayTeam = (e) => {
        e.preventDefault()
        

        navigate('/displayTeam', {state:{teamId: teamId, teamname: name, player1: player1, player2: player2, player3: player3,
            player4: player4, player5: player5, player6: player6, player7: player7, player8: player8, player9: player9, 
            player10: player10, player11: player11, likes: likes}});
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
                    {format(new Date(team.createdAt), "dd/MM/Y")}
                    
                </div>
               
                <form onSubmit={displayTeam}  >
                    <button className="btn btn-reverse btn-sm">View Team</button>
                </form>  
                <div></div>
                <button
                    className={"btn btn-reverse btn-sm like-button " + (team.likes.includes(user._id) ? "liked" : "")}
                    onClick = {incrementLike}
                >
                    
                like/unlike
                </button>  
                <div> <FaThumbsUp/>  {likes.length}</div>
                <style>
                    {`
                        .like-button {
                            font-size: 1rem;
                            padding: 9px 10px;
                            color:  #585858;
                        }
                        .liked {
                            font-weight: bold;
                            color: #1565c0;
                        }
                    `}
                </style>
                
            </div>
        </div>
        
    )
}

export default TeamItem