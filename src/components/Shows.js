import {Container, Row, Col, Button} from 'reactstrap';
import Host from '../app/assets/img/Host.JPG';
const Shows = () =>{
    return(
        <div id='Shows'>
            <Container className='shows' >
                <Row>
                    <Col className='background'>
                        <img src={Host} alt='host' className='pic'/>
                        <h1 className='me-auto contentRight'>Upcoming Shows</h1>
                    </Col>
                    <Col className='dates'>
                        <div>Date 1  <Button>Buy Tickets</Button></div>
                        <hr/>
                        <div>Date 2  <Button>Buy Tickets</Button></div>
                        <hr/>
                        <div>Date 3  <Button>Buy Tickets</Button></div>
                        <hr/>
                    </Col>
                </Row>
                <hr/>
            </Container>
        </div>
        
    );
};

export default Shows;