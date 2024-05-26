import { Row, Col } from "reactstrap";
import Smile from "../app/assets/img/Smile.jpg";
import AboutTxt from "../features/about/AboutTxt";
import { useMediaQuery } from 'react-responsive';


const About = () => {
  const window = useMediaQuery({ query: '(min-width: 576px)' });

  if (window) {
    return ( 
        <Row className="about min-vh-100 align-items-stretch" id="About" >
        <Col xs="12" md="6 order-1">
          <AboutTxt />
          </Col>
          <Col xs="12" md="6" >
            <img src={Smile} alt="Smile" className=" aboutPic" /> 
          </Col>
        </Row>
    );
  } else {
    return (
      <>
        <Row className="about min-vh-100 align-items-stretch" id="About">
          <Col xs="12 order-1" md="6" >
            <img src={Smile} alt="Smile" className=" aboutPic" />
          </Col>
          <Col xs="12" md="6" className="max-vh-100">
          <AboutTxt />
          </Col>
        </Row>
        <hr/>
        </>
    );
  }
};

export default About;
