import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation} from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaBiohazard} from 'react-icons/fa'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {getTeams} from '../features/teams/teamSlice'
import TeamItemHomePage from '../components/TeamItemHomePage'
import { MDBTextArea } from 'mdb-react-ui-kit';
import { createReport } from '../features/reports/reportsSlice'
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';

function VisitedProfile() {

    const { user } = useSelector((state) => state.auth)
    const [vrf] = useState(user.verification)
    const dispatch = useDispatch()
    const {teams} = useSelector((state) => state.teams)
    const {isSuccess} = useSelector((state) => state.teams)
    const location = useLocation()

    useEffect(() => {
        return () => {
            dispatch(getTeams())

        }
    }, [dispatch, isSuccess])

    const userData= {
        email: location.state.email,
        name: location.state.name
    }

    const reportUser = (e) => {
        e.preventDefault()
        toast.info('User reported')
        dispatch(createReport(userData))
    }

    const strAscending = [...teams].sort((a, b) =>
    a.likes.length > b.likes.length ? 1 : -1,
    ).reverse();

    return (
        console.log(vrf),
        <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                <MDBRow>
                 <MDBCol lg="4">
                    <MDBCard className="mb-4">
                    <MDBCardBody className="text-center">
                        <MDBCardText className="heading">{location.state.name}</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="mb-4 mb-lg-0">
                        <MDBCardBody className="p-0">
                            <MDBListGroup flush className="rounded-3">
                                <MDBListGroupItem className="list-group-item d-flex justify-content-center align-items-center">
                                <MDBIcon className="fas fa-user-alt"></MDBIcon>
                                    <MDBCardText > {"\u00a0\u00a0"} verified user: {location.state.verification.toString()}</MDBCardText>
                                </MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBTextArea style={{marginTop:"20px"}} label='Comment to profile' id='textAreaExample' rows={4} />
                    <div style={{marginTop:"20px"}} class="btn-group">
                        <button onClick={{}} >Submit</button>
                    </div>
                    <MDBRow>
                        <MDBCol lg="12">
                        <div className="tickets">
                            <div className="ticket-headings">
                               <div></div>
                               <div></div>
                               <div></div>
                                <form onSubmit={reportUser}  >
                                    <button className="btn btn-reverse btn-sm"> <FaBiohazard></FaBiohazard> Report</button>
                                </form>
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
                        </MDBCol>
                        
                    </MDBRow>
                    
                </MDBCol>
                <MDBCol lg="8">
                    <MDBCard className="mb-4">
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol sm="3">
                                    <MDBCardText>USERNAME:</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                    <MDBCardText className="text-muted">{location.state.name}</MDBCardText>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol sm="3">
                                    <MDBCardText>E-MAIL:</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                    <MDBCardText className="text-muted">{location.state.email}</MDBCardText>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBRow>
                    <MDBCol md="15">
                    <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                    <MDBCardText className="mb-4 fw-bold">MOST LIKED TEAM OF <span className="text-uppercase fw-bold">{location.state.name}</span></MDBCardText>
                        <div className="tickets">

                            {strAscending.slice(0,1).map((team) => (
                                <TeamItemHomePage key={team._id} team={team}/>
                            ))}
                        </div>
                        </MDBCardBody>
                        </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
             </MDBRow>
        </MDBContainer>
        </section>
        
    )
}

export default VisitedProfile