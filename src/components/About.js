import { Container, Row, Col } from "reactstrap";
import max from "../app/assets/img/max.jpg";

const About = () => {
  return (
    <div id="About" className="about">
      <Row className="background">
        <div>
          <img src={max} alt="max" className=" aboutPic" />
          <Col>
            <h1 className="contentAbout">What is Vent!?</h1>
          </Col>
          <Col>
            <p className="contentAboutText">
              VENT! IS AN INTERACTIVE COMEDY VARIETY SHOW. Comedians unpack your
              gripes, grievances, rants, and raves. Come ready to submit your
              vents! The rest of the world might not care about your meaningless
              problems, but we do!
              <br />
              <br />
              “We had a phenomenal time and laughed so hard. I think that is the
              first good workout my abs have had in a while!” — Ellen
            </p>
          </Col>
          <hr />
        </div>
      </Row>
    </div>
  );
};

export default About;
