import microphone from '../app/assets/img/microphone.png';
import {Container, Row, Col, Button} from 'reactstrap';
import timelapse from "../app/assets/timelapse.mp4";

const Vent = () =>{
    return(
        <Container className='vent' id='Vent'>
            <Row>
                <Col className='4 md-5'>
                <video src={timelapse} loop autoPlay muted className="videoBackground"/>
                </Col>
                <Col className='background'>
                    <img src={microphone} alt='microphone' className='pic'/>
                    <h1 className='ms-auto content'><Button>Submit Your Vent</Button></h1>
                </Col>
            </Row>
            <hr/>
        </Container>
    );

};

export default Vent;