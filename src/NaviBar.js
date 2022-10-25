import './NaviBar.css';
import {Container, Navbar, Button, Image, Row, Nav} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Flag from './images/TRFlag.png'

function NaviBar() {
    let navigate = useNavigate();
    const routeChange = () => {
    let path='/MainMenu';
    navigate(path);
    }

    return (
    <div>
    <Navbar bg="light" variant="light" className='style'>
        <Container>
            <Navbar.Brand>
                <Button variant="light" onClick={routeChange}>
                <Image className='imageStyle' src={Flag}/>
                <Row style={{marginTop:"10px"}}>
                <text><b>Turkish Football Federation</b></text>
                </Row>
                <Row>
                <text>National Team Player Selector</text> 
                </Row>
                </Button>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link style={{marginLeft:"20px"}} href="/MainMenu">Home</Nav.Link>
                    <Nav.Link style={{marginLeft:"20px"}} href="/Contact">Contact</Nav.Link>
                    <Nav.Link style={{marginLeft:"700px", marginRight:"10px"}} href="/SignIn">Sign In</Nav.Link>
                    <text style={{marginTop:"7px"}}>/</text> 
                    <Nav.Link style={{marginLeft:"10px"}} href="/SignUp">Sign Up</Nav.Link>
                </Nav>
                </Navbar.Collapse>
        </Container>
    </Navbar>
    <Container>
      <Navbar fixed="bottom" expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="/Admin">Admin Platform</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
    </div>
    );
}

export default NaviBar;