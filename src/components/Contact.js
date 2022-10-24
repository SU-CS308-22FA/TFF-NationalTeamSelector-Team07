import './Contact.css'
import {Card, Col, Row} from 'react-bootstrap';
import Bengisu from '../images/BengisuPhoto.png';
import Ata from '../images/AtaPhoto.png';
import Esra from '../images/EsraPhoto.png';


function Contact() {
  return (
    <div className='container'>
    <Row style={{marginLeft:"270px", marginBottom:'50px'}}>
      <Col>
        <Card style={{ marginRight:"50px", width:'250px' }}>
          <Card.Img variant="top" src={Bengisu} />
          <Card.Body>
            <Card.Title><b>Bengisu Özdemir</b></Card.Title>
            <Card.Text>
              I code.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
      <Card style={{ width:'250px' }}>
          <Card.Img variant="top" src={Esra} />
          <Card.Body>
            <Card.Title><b>Esra Nur Özüm</b></Card.Title>
            <Card.Text>
              I code too.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row style={{marginLeft:"270px", marginBottom:'50px'}}>
      <Col>
      <Card style={{ width:'250px' }}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title><b>Sarp Bora Polat</b></Card.Title>
            <Card.Text>
              I sleep.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
      <Card style={{ width:'250px'}}>
          <Card.Img variant="top" src={Ata} />
          <Card.Body>
            <Card.Title><b>Mustafa Ata Onbaş</b></Card.Title>
            <Card.Text>
              I code.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
  );
}

export default Contact;