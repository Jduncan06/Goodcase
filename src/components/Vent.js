import microphone from '../app/assets/img/microphone.png';
import {Container, Row, Col} from 'reactstrap';
import { Formik } from 'formik';

const Vent = () =>{
    return(
        <div className='vent' id='Vent'>
            <Row>
                <Col className='4 md-5 background' >
                    <img src={microphone} alt='microphone' className='ventPic'/>
                    <h1 className='ms-auto contentVent'>Submit Your Vent</h1>
                </Col>
                <Col>
                    
                    
                </Col>
            </Row>
            <hr/>
        </div>
    );

};

export default Vent;