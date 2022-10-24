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
                <text><b>Turkey Football Federation</b></text>
                </Row>
                <Row>
                <text>National Team Player Selector</text> 
                </Row>
                </Button>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link style={{marginLeft:"100px"}} href="/MainMenu">Home</Nav.Link>
                    <Nav.Link style={{marginLeft:"700px"}} href="/Contact">Contact</Nav.Link>
                    <Nav.Link style={{marginLeft:"50px"}} href="/Admin">Admin</Nav.Link>
                </Nav>
                </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
    );
}

export default NaviBar;