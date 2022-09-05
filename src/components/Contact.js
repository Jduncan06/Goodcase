import { Row, Col, Button } from "reactstrap";
import banter from "../app/assets/img/banter.png";

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <Row>
        
        <Col className=" contentContactText">
          NEED TO VENT?
          <br />
          PRIVATE EVENT BOOKING
          <br />
          The creators of the VENT! Show want to come perform our show for your
          private party. Book us for birthdays, office parties, retirement
          parties, and more. We’ll provide the comedians and show materials. You
          provide the audience.
          <br />
          If you have any questions, contact the VENT! Live Team at
          ventlive@gmail.com
          <br />
          <Button>Book an Event</Button>
        </Col>
        <Col className="background">
          <h1 className=" contentContact">Contact Us</h1>
          <img src={banter} alt="banter" className="contactPic md-4" />
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default Contact;
