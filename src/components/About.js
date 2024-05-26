import { Row, Col } from "reactstrap";
import AboutTxt from "../features/about/AboutTxt";
import { useMediaQuery } from 'react-responsive';
import HatRedRyan from "../app/assets/headshots/hat_red_ryan.jpeg";

const About = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 756 px)' });

  if (isDesktop) {
    return ( 
        <Row className="about min-vh-100 align-items-stretch" id="About" >
        <Col xs="12" md="6 order-1">
          <AboutTxt />
          </Col>
          <Col xs="12" md="6" >
            <img src={HatRedRyan} alt="Smile" className="aboutPic" /> 
          </Col>
        </Row>
    );
  } else {
    return (
      <>
        <Row className="about min-vh-100 align-items-stretch" id="About">
          <Col xs="12 order-1" md="6" >
            <img src={HatRedRyan} alt="Smile" className="aboutPic" />
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
