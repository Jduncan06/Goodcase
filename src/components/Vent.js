
import {Container, Row, Col, Button} from 'reactstrap';


const Vent = () =>{
    return(
        <Container>
            <Row>
                <Col>
                    <Button>Submit Your Vent</Button>
                </Col>
                <Col>
                    <h1 className='ms-auto'>Submit Your Vent</h1>
                </Col>
            </Row>
            <hr/>
        </Container>
    );

};

export default Vent;