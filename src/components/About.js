import { Row, Col } from "reactstrap";
import Smile from "../app/assets/img/Smile.jpg";
import AboutTxt from "../features/about/AboutTxt";
import { useMediaQuery } from 'react-responsive';


const About = () => {
  const window = useMediaQuery({ query: '(min-width: 576px)' });

  if (window) {
    return (
      <div className="about" id="About">
        <Row className="row">
        <Col xs="12" md="6 order-1">
          <AboutTxt />
          </Col>
          <Col xs="12" md="6" >
            <img src={Smile} alt="Smile" className=" aboutPic" /> 
          </Col>
        </Row>
      </div>
    );
  } else {
    return (
      <div className="about" id="About">
        <Row>
          <Col xs="12 order-1" md="6">
            <img src={Smile} alt="Smile" className=" aboutPic" />
          </Col>
          <Col xs="12" md="6">
          <AboutTxt />
          </Col>
        </Row>
        <hr/>
      </div>
    );
  }
};

export default About;
