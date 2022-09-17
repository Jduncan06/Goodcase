import { Row, Col, Button } from "reactstrap";
import banter from "../app/assets/img/banter.png";

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <Row id="Contact">
        <Col className=" contentContactText" xs="12" md="5">
          <h1>PRIVATE EVENT BOOKING</h1>
          <br />
          <p>
            The creators of the VENT! Show want to come perform our show for
            your private party. Book us for birthdays, office parties,
            retirement parties, and more. We’ll provide the comedians and show
            materials. You provide the audience.
          </p>
          <br />
          <p>
            If you have any questions, contact the VENT! Live Team at
            ventlive@gmail.com
          </p>
          <br />
          <Button>Book an Event</Button>
        </Col>
        <Col className="background" xs="12" md="7">
          <img src={banter} alt="banter" className="contactPic md-4" />
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default Contact;
