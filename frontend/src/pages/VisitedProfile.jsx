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
    MDBCardImage,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
    MDBInput
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
                {/* ///////////////////////////////////////////comment part */}
                <MDBContainer className="card-body p-0" style={{marginTop:'30px'}}>
                <MDBRow>
                    <MDBCol style={{width:'100%'}}>
                        <MDBCard
                            className="shadow-0 border"
                            style={{ backgroundColor: 'white' }}
                        >
                            <MDBCardBody>
                            <MDBInput wrapperClass="mb-4" placeholder="Type comment..." label={"Comment to " +location.state.name} />
                            <MDBCard className="mb-4">
                                <MDBCardBody>
                                <p>Type your note, and hit enter to add it</p>

                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                    <MDBCardImage
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                                        alt="avatar"
                                        width="25"
                                        height="25"
                                    />
                                    <p className="small mb-0 ms-2">Martha</p>
                                    </div>
                                    <div className="d-flex flex-row align-items-center">
                                    <p className="small text-muted mb-0">Upvote?</p>
                                    <MDBIcon
                                        far
                                        icon="thumbs-up mx-2 fa-xs text-black"
                                        style={{ marginTop: "-0.16rem" }}
                                    />
                                    <p className="small text-muted mb-0">3</p>
                                    </div>
                                </div>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard className="mb-4">
                                <MDBCardBody>
                                <p>Type your note, and hit enter to add it</p>

                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                    <MDBCardImage
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                                        alt="avatar"
                                        width="25"
                                        height="25"
                                    />
                                    <p className="small mb-0 ms-2">Mary Kate</p>
                                    </div>
                                    <div className="d-flex flex-row align-items-center text-primary">
                                    <p className="small mb-0">Upvoted</p>
                                    <MDBIcon
                                        fas
                                        icon="thumbs-up mx-2 fa-xs"
                                        style={{ marginTop: "-0.16rem" }}
                                    />
                                    <p className="small mb-0">2</p>
                                    </div>
                                </div>
                                </MDBCardBody>
                            </MDBCard>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
    
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