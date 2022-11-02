import './UserSettings.css'
import {Button} from 'react-bootstrap';
import React from 'react';
// import {useState, useEffect} from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';


function UserSettings() {

// const [items, setItems] = useState([]);

// // useEffect(() => {
// //   const items = JSON.parse(localStorage.getItem('items'));
// //   if (items) {
// //    setItems(items);
// //   }
// // }, []);


const handleClick = (e) => {
  e.preventDefault();
  console.log('The link was clicked.');
}


  return (
    <section className="w-auto p-1" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="w-auto p-1">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="10" className="mb-4 mb-lg-4">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-5">
                <MDBCol md="4" className="gradient-custom text-center text-white" 
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem', backgroundColor: '#D32F2F'}}>
                    <MDBCardImage
                    alt="Avatar" className="my-5" style={{ width: '100px' }} fluid />
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography style={{textAlign:'left'}} tag="h3">User Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      
                      <MDBCol size="6" className="mb-6">
                        <MDBTypography tag="h6">Name</MDBTypography>
                        <MDBCardText style={{marginBottom:'20px'}} className="text-muted">name</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-6">
                        <MDBTypography tag="h6">Surname</MDBTypography>
                        <MDBCardText className="text-muted">name</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">

                        <MDBTypography tag="h6">Username</MDBTypography>
                        <MDBCardText className="text-muted">insert username</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">info@example.com</MDBCardText>
                      </MDBCol>
                      <MDBCol size="5" className="mb-6">
                      <Button 
                      onClick={handleClick} style={{background:"#D32F2F"}} className='mx-0'>Edit</Button>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
 
}
export default UserSettings;
