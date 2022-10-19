import { Row, Col, Button } from "reactstrap";
import SweaterClose from "../app/assets/img/SweaterClose.jpg";
import ContactForm from "../app/utils/ContactForm";

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <Row id="Contact">
        
        <Col className="background" xs="12" md="6">
        <h1 className="contentContact">Contact Me</h1>
          <img src={SweaterClose} alt="sweater" className="contactPic md-4" />
        </Col>
        <Col className=" contentContactText" xs="12" md="6">
          <br/>
          <h5>I'm kind of shy, message me first?</h5>
        <ContactForm/>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default Contact;
