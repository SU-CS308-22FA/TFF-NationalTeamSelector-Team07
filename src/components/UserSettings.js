import './UserSettings.css'
import photo from '../images/default-avatar.png'
import { MDBBtn } from 'mdb-react-ui-kit';

import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default function UserSettings() {
  return (
    <section className="w-auto p-1" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="w-auto p-1">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="10" className="mb-4 mb-lg-4">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-5">
                <MDBCol md="4" className="gradient-custom text-center text-white" 
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem', backgroundColor: '#D32F2F'}}>
                    <MDBCardImage src={[photo]}
                    alt="Avatar" className="my-5" style={{ width: '100px' }} fluid />
                  <MDBTypography tag="h5">name surname</MDBTypography>
                  <MDBCardText>verified ✓</MDBCardText>
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
                      <MDBCol size="5" className="mb-1">
                      <MDBBtn style={{marginBottom:'20px'}} color='danger' className='mx-0'>edit</MDBBtn>
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

