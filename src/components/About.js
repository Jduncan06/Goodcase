import { Row, Col } from "reactstrap";
import AboutTxt from "../features/about/AboutTxt";

import HatRedRyan from "../app/assets/headshots/hat_red_ryan.jpeg";

const About = () => {
  

  if (window.innerWidth > 756) {
    return ( 
        <Row className="about min-vh-100 align-items-stretch" id="About" >
        <Col xs="12" md="6">
          <AboutTxt />
          </Col>
          <Col xs="12" md="6" >
            <img src={HatRedRyan} alt="Smile" className="aboutPic" /> 
          </Col>
          <hr />
        </Row>
    );
  } else {
    return (
      <>
        <Row className="about min-vh-100 align-items-stretch" id="About">
          <Col xs="12" md="6" >
            <img src={HatRedRyan} alt="Smile" className="aboutPic" />
          </Col>
          <Col xs="12" md="6" className="max-vh-100">
          <AboutTxt />
          </Col>
          <hr/>
        </Row>
        </>
    );
  }
};

export default About;
