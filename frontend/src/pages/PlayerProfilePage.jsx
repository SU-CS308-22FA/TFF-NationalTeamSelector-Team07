
import { useSelector, useDispatch } from 'react-redux'

import Spinner from '../components/Spinner'
import {useNavigate} from 'react-router-dom'
import { useEffect, useState} from 'react'

import historicService from '../features/historics/historicService'

import { useLocation } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import HistoricDataItem from '../components/HistoricDataItem'


/**
 * from state (line 23) player object has been taken. Then, each paramter has been put to the relevant location from table.
 */
function PlayerProfile() {
 
    const {players, isLoading, isSuccess} = useSelector((state) => state.players || {})

    
    
    const dispatch = useDispatch()

    const[storage, getStorage] = useState([])

    const {state} = useLocation();
    const {personel, name, team, pos, Rating, dob, foot, age, pob } = state; // Read values passed on state

    useEffect(() => {
        return async () => {
            getStorage( await historicService.getHistoric(personel))
            //minor changes
        }
    }, [dispatch, isSuccess])

    //console.log('INCOMING POPULATED DATA '+ JSON.stringify(storage))
    //console.log('line 37, '+ JSON.stringify(storage.gk_SaveRatio))
    
    
    if(isLoading){
        return <Spinner />
    }
   
    console.log("LINE 28, WHAT OS THE TYO OF TEAMS: " + storage)


    return (
        <>
            
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-80">
                    <MDBCol lg="6" className="mb-4 mb-lg-0">
                        <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                            <MDBRow className="g-0">
                                <MDBCol md="4" className="gradient-custom text-center text-white"
                                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                    <MDBCardImage src="https://media.istockphoto.com/id/1300845620/tr/vekt%C3%B6r/kullan%C4%B1c%C4%B1-simgesi-d%C3%BCz-beyaz-arka-plan-%C3%BCzerinde-izole-kullan%C4%B1c%C4%B1-sembol%C3%BC-vekt%C3%B6r-ill%C3%BCstrasyonu.jpg?s=612x612&w=0&k=20&c=BapxTLg8R3jjWnvaSXeHqgtou_-FcyBKmAkUsgwQzxU="
                                        alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                                    <MDBTypography tag="h5">{name}</MDBTypography>
                                    <MDBCardText>{pos}</MDBCardText>                               
                                </MDBCol>
                                <MDBCol md="8">
                                    <MDBCardBody className="p-4">
                                        <MDBTypography tag="h6">Players Personel Information</MDBTypography>
                                        <hr className="mt-0 mb-4" />
                                        <MDBRow className="pt-1">
                                        <MDBCol size="6" className="mb-3">
                                            <MDBTypography tag="h6">Date of Birth</MDBTypography>
                                            <MDBCardText className="text-muted">{dob}</MDBCardText>
                                        </MDBCol>
                                        <MDBCol size="6" className="mb-3">
                                            <MDBTypography tag="h6">Place of Birth</MDBTypography>
                                            <MDBCardText className="text-muted">{pob}</MDBCardText>
                                        </MDBCol>
                                        </MDBRow>
                    
                                        
                                        <hr className="mt-0 mb-4" />
                                        <MDBRow className="pt-1">
                                        <MDBCol size="6" className="mb-3">
                                            <MDBTypography tag="h6">Prefered Foot</MDBTypography>
                                            <MDBCardText className="text-muted">{foot}</MDBCardText>
                                        </MDBCol>
                                        <MDBCol size="6" className="mb-3">
                                            <MDBTypography tag="h6">Age</MDBTypography>
                                            <MDBCardText className="text-muted">{age}</MDBCardText>
                                        </MDBCol>
                                        </MDBRow>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <br />
            <hr className="solid" />

            <h2>PLAYERS RECENT HISTORY</h2>

            
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">DATE</th>
                    <th scope="col">Save Ratio (%)</th>
                    <th scope="col">Clean Sheets</th>
                    <th scope="col">Runs Out</th>
                    <th scope="col">Monthly Games</th>
                    <th scope="col">Monthly Rating</th>
                    </tr>
                </thead>
           

                {storage.map((sto) => 
                        (
                            <tbody>
                            <tr>
                            <th scope="row">12.12.2022</th>
                            <td>{sto.gk_saveRatio}</td>
                            <td>{sto.gk_cleanSheets}</td>
                            <td>{sto.gk_RunsOut}</td>
                            <td>{sto.monthlyGame}</td> 
                            <td>{Rating}</td> 
                            </tr>
                            </tbody> 
                        )
                        
                    )
                }
            
                
            </table>
    
        </>

            
            
        
    )
}

export default PlayerProfile