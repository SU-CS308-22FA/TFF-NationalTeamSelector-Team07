import {useEffect, useState} from 'react'
import {FaUser} from 'react-icons/fa'
import {toast} from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import {useLocation} from 'react-router-dom'
import { getTeam } from '../features/teams/teamSlice'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';


function DisplayTeam() {

    const dispatch = useDispatch()
    const {state} = useLocation();
    const {team } = useSelector((state) => state.teams)
    

    const {teamId, teamname, user_id} = state
    //const [currentteam] = dispatch(getTeam(user_id))

    const teamData = {
        name: teamname,
        uid: user_id,
        tid: teamId
    }

    useEffect(() => {
        return () => {
            dispatch(getTeam(team._id)).unwrap().catch(toast.error)
            console.log('teams ' + user_id)
        }
        

    }, [dispatch])


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
                
                
            </div>
            
        </div>
    )
}

export default DisplayTeam