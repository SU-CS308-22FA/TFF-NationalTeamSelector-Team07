import './NaviBar.css';
import {Container, Navbar, Button, Image, Row, Nav} from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import Flag from './images/TRFlag.png'

function NaviBarSignedIn() {
    // let navigate = useNavigate();
    // const routeChange = () => {
    // let path='/MainMenu';
    // navigate(path);
    // }
    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
    return (
    <div>
    <Container fluid>
    <Navbar bg="light" variant="light" className='align'>
        <Container>
            <Navbar.Brand>
                <Button variant="light">
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
                    <Nav.Link  href="/UserSettings">Profile</Nav.Link>
                    <Nav.Link onClick={handleLogout} style={{marginLeft:"1000px"}} href="/SignUp">Logout</Nav.Link>
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
    </Container>
    </div>

    );
}

export default NaviBarSignedIn;