import { Row, Col } from "reactstrap";
import max from "../app/assets/img/max.jpg";
import AboutTxt from "../features/about/AboutTxt";

const About = () => {
  if (window.width >= 576) {
    return (
      <div className="about" id="About">
        <Row className="row">
          <Col xs="12" md="6 order-1">
            <AboutTxt />
          </Col>
          <Col xs="12" md="6 ">
            <img src={max} alt="max" className=" aboutPic" />
          </Col>
        </Row>
      </div>
    );
  } else {
    return (
      <div className="about" id="About">
        <Row>
          <Col xs="12 order-1" md="8">
            <img src={max} alt="max" className=" aboutPic" />
          </Col>
          <Col xs="12" md="4 ">
            <AboutTxt />
          </Col>
        </Row>
        <hr />
      </div>
    );
  }
};

export default About;
