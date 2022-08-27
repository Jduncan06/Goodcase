import {Container, Row, Col} from 'reactstrap';
import {Pic1} from '../app/assets/Pic1'

const About = () =>{
    return(
        <Container>
            <Row>
                <Col>
                    <p>VENT! IS AN INTERACTIVE COMEDY VARIETY SHOW.
                    Comedians unpack your gripes, grievances, rants, and raves. Come ready to submit your vents!
                    
                    The rest of the world might not care about your meaningless problems, but we do!
                    <br/><br/>
                    “We had a phenomenal time and laughed so hard. I think that is the first good workout my abs have had in a while!”
                    — Ellen</p>
                </Col>
                <Col>
                    <div className='about'>
                        <img src={Pic1} alt='Pic1'/>
                        <h1 className='ms-auto'>What is Vent?</h1>
                    </div>
                </Col>
            </Row>
            <hr/>
        </Container>
        
    );
};

export default About;