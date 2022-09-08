import {Row, Col} from "reactstrap";
import max from "../app/assets/img/max.jpg";

const About = () => {
  return (
    <>
   
    <div className="about" id="About">
      <Row>
        <Col xs='12' md='6'>
          <h1>What is Vent!</h1>
          <p>
            VENT! IS AN INTERACTIVE COMEDY VARIETY SHOW. Comedians unpack your
            gripes, grievances, rants, and raves. Come ready to submit your
            vents! The rest of the world might not care about your meaningless
            problems, but we do!
          </p>
          <br />
          <br />
          <p className="d-none d-md-block">
            “We had a phenomenal time and laughed so hard. I think that is the
            first good workout my abs have had in a while!” — Ellen
          </p>
        </Col>
        <Col xs='12' md='6'>
          <img src={max} alt="max" className=" aboutPic" />
        </Col>
        <hr />
      </Row>
    </div>
    </>
  );
};

export default About;
