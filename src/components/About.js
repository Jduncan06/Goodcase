import {Container, Row, Col} from 'reactstrap';
import max from '../app/assets/img/max.jpg';

const About = () =>{
    return(
        <Container id='About' className='about'>
            <Row>
                <Col className='4'>
                    <p>VENT! IS AN INTERACTIVE COMEDY VARIETY SHOW.
                    Comedians unpack your gripes, grievances, rants, and raves. Come ready to submit your vents!
                    
                    The rest of the world might not care about your meaningless problems, but we do!
                    <br/>
                    <br/>
                    “We had a phenomenal time and laughed so hard. I think that is the first good workout my abs have had in a while!”
                    — Ellen</p>
                </Col>
                <Col className='8 background'>
                    <div>
                        
                        <img src={max} alt='max' className='pic'/>
                        <h1 className='ms-auto content'>What is Vent!?</h1>
                        <hr/>
                    </div>
                </Col>
            </Row>
           
        </Container>
    );
};

export default About;